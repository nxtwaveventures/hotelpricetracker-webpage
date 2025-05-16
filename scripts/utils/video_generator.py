import os
from moviepy.editor import (
    VideoFileClip,
    TextClip,
    CompositeVideoClip,
    ImageClip,
    concatenate_videoclips,
    AudioFileClip,
    CompositeAudioClip,
)
from gtts import gTTS
from PIL import Image
import requests
from dotenv import load_dotenv

load_dotenv()


class HotelDropBotVideoGenerator:
    def __init__(self):
        self.output_dir = "generated_videos"
        self.music_dir = "assets/music"
        os.makedirs(self.output_dir, exist_ok=True)
        os.makedirs(self.music_dir, exist_ok=True)

    def download_music(self, url, filename):
        """Download free music from URL"""
        try:
            response = requests.get(url)
            if response.status_code == 200:
                filepath = os.path.join(self.music_dir, filename)
                with open(filepath, "wb") as f:
                    f.write(response.content)
                return filepath
        except Exception as e:
            print(f"Error downloading music: {e}")
        return None

    def get_background_music(self):
        """Get or download background music"""
        # Free music from Free Music Archive (FMA)
        # This is a royalty-free corporate music track
        music_url = "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Kevin_MacLeod/Impact/Kevin_MacLeod_-_01_-_Impact_Prelude.mp3"
        music_file = "background_music.mp3"

        # Check if we already have the music file
        local_path = os.path.join(self.music_dir, music_file)
        if os.path.exists(local_path):
            return local_path

        # Download if we don't have it
        return self.download_music(music_url, music_file)

    def get_stock_image(self, query, filename):
        """Get a free stock image from Pexels"""
        headers = {"Authorization": os.getenv("PEXELS_API_KEY", "")}
        response = requests.get(f"https://api.pexels.com/v1/search?query={query}&per_page=1", headers=headers)
        if response.status_code == 200:
            image_url = response.json()["photos"][0]["src"]["large"]
            img_response = requests.get(image_url)
            if img_response.status_code == 200:
                with open(filename, "wb") as f:
                    f.write(img_response.content)
                return filename
        return None

    def create_scene(self, text, duration, background_query):
        """Create a scene with text overlay and background image"""
        # Get background image
        bg_image = self.get_stock_image(background_query, f"{self.output_dir}/temp_bg.jpg")
        if not bg_image:
            # Create a colored background if image fetch fails
            bg_clip = ColorClip((1920, 1080), color=(53, 59, 72))
        else:
            bg_clip = ImageClip(bg_image).set_duration(duration).resize((1920, 1080))

        # Create text overlay
        text_clip = (
            TextClip(text, fontsize=70, color="white", bg_color="rgba(0,0,0,0.5)", font="Arial", size=(1600, None))
            .set_position("center")
            .set_duration(duration)
        )

        # Create voice narration
        tts = gTTS(text=text, lang="en")
        audio_file = f"{self.output_dir}/temp_audio.mp3"
        tts.save(audio_file)
        voice_audio = AudioFileClip(audio_file)

        # Combine everything
        scene = CompositeVideoClip([bg_clip, text_clip])

        # Clean up temporary files
        if bg_image:
            os.remove(bg_image)
        os.remove(audio_file)

        return scene, voice_audio

    def generate_promo_video(self):
        """Generate a promotional video for HotelDropBot"""
        scenes = [
            {"text": "Tired of overpaying for hotel rooms?", "duration": 5, "background": "hotel luxury"},
            {
                "text": "Introducing HotelDropBot\nYour AI-powered price tracking assistant",
                "duration": 5,
                "background": "robot technology",
            },
            {
                "text": "Track prices automatically\nGet notified when prices drop",
                "duration": 5,
                "background": "price chart",
            },
            {"text": "Save up to 70% on your hotel bookings", "duration": 5, "background": "savings money"},
            {
                "text": "Visit HotelDropBot.com today\nStart saving on your next stay",
                "duration": 5,
                "background": "travel vacation",
            },
        ]

        # Get background music
        bg_music_path = self.get_background_music()
        if bg_music_path:
            background_music = AudioFileClip(bg_music_path)
            # Loop the music if it's shorter than the video
            total_duration = sum(scene["duration"] for scene in scenes)
            if background_music.duration < total_duration:
                background_music = background_music.loop(duration=total_duration)
            # Reduce volume of background music
            background_music = background_music.volumex(0.3)

        # Create each scene
        video_scenes = []
        audio_clips = []

        for scene in scenes:
            video_clip, voice_audio = self.create_scene(scene["text"], scene["duration"], scene["background"])
            video_scenes.append(video_clip)
            # Add the voice audio at the correct time
            audio_clips.append(voice_audio)

        # Concatenate all scenes
        final_video = concatenate_videoclips(video_scenes)

        # Combine all audio (voice narration and background music)
        voice_track = concatenate_videoclips(audio_clips)
        if bg_music_path:
            final_audio = CompositeAudioClip([background_music, voice_track])
        else:
            final_audio = voice_track

        # Set the final audio to the video
        final_video = final_video.set_audio(final_audio)

        # Write the final video
        output_path = f"{self.output_dir}/promo_video.mp4"
        final_video.write_videofile(output_path, fps=30, codec="libx264", audio_codec="aac")

        return output_path


if __name__ == "__main__":
    generator = HotelDropBotVideoGenerator()
    video_path = generator.generate_promo_video()
    print(f"Video generated successfully: {video_path}")
