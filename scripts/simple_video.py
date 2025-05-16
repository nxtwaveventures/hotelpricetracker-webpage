from moviepy.editor import TextClip, ColorClip, CompositeVideoClip, concatenate_videoclips
import os


def create_video():
    # Create output directory
    os.makedirs("generated_videos", exist_ok=True)

    # Create scenes
    scenes = []
    texts = [
        "Tired of overpaying for hotel rooms?",
        "Introducing HotelDropBot\nYour AI-powered price tracking assistant",
        "Track prices automatically\nGet notified when prices drop",
        "Save up to 70% on your hotel bookings",
        "Visit HotelDropBot.com today\nStart saving on your next stay",
    ]

    for text in texts:
        # Create background
        bg = ColorClip((1920, 1080), color=(53, 59, 72)).set_duration(5)

        # Create text
        txt = (
            TextClip(text, fontsize=70, color="white", bg_color="rgba(0,0,0,0.5)", font="Arial", size=(1600, None))
            .set_position("center")
            .set_duration(5)
        )

        # Combine background and text
        scene = CompositeVideoClip([bg, txt])
        scenes.append(scene)

    # Concatenate all scenes
    final_video = concatenate_videoclips(scenes)

    # Write the final video
    output_path = "generated_videos/promo_video.mp4"
    final_video.write_videofile(output_path, fps=30, codec="libx264", audio=False)

    return output_path


if __name__ == "__main__":
    video_path = create_video()
    print(f"Video generated at: {video_path}")
