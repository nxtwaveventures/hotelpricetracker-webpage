import os
from utils.video_generator import HotelDropBotVideoGenerator
from utils.youtube_uploader import YouTubeUploader
from datetime import datetime


def main():
    # Generate the video
    print("Generating video...")
    generator = HotelDropBotVideoGenerator()
    video_path = generator.generate_promo_video()
    print(f"Video generated at: {video_path}")

    # Prepare video metadata
    today = datetime.now().strftime("%B %d, %Y")
    title = f"Save Up to 70% on Hotel Bookings - HotelDropBot ({today})"
    description = f"""🏨 Looking for the best hotel deals? Meet HotelDropBot!

HotelDropBot is your AI-powered assistant that helps you:
✅ Track hotel prices automatically
✅ Get notified when prices drop
✅ Save up to 70% on your bookings

Visit HotelDropBot.com today and start saving on your next stay!

#HotelDeals #TravelSavings #HotelBooking #TravelHacks #AI #SmartBooking

Video generated on {today}
"""

    # Upload to YouTube
    print("\nUploading to YouTube...")
    uploader = YouTubeUploader()
    video_id = uploader.upload_video(
        video_path=video_path,
        title=title,
        description=description,
        tags=[
            "HotelDropBot",
            "Hotel Deals",
            "Travel Savings",
            "Hotel Booking",
            "AI Assistant",
            "Price Tracking",
            "Travel Hacks",
            "Smart Booking",
            "Hotel Discounts",
            "Travel Tips",
        ],
    )

    if video_id:
        print(f"\nSuccess! Video uploaded to YouTube.")
        print(f"Watch it here: https://youtu.be/{video_id}")

        # Clean up
        if os.path.exists(video_path):
            os.remove(video_path)
            print("\nTemporary video file cleaned up.")
    else:
        print("\nError: Video upload failed.")


if __name__ == "__main__":
    main()
