import os
import pickle
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from googleapiclient.discovery import build
from googleapiclient.http import MediaFileUpload
from datetime import datetime


def get_authenticated_service():
    credentials = None
    token_pickle = "token.pickle"

    # Token has been previously stored
    if os.path.exists(token_pickle):
        with open(token_pickle, "rb") as token:
            credentials = pickle.load(token)

    # If credentials are invalid or don't exist, let the user log in
    if not credentials or not credentials.valid:
        if credentials and credentials.expired and credentials.refresh_token:
            credentials.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                "client_secrets.json", ["https://www.googleapis.com/auth/youtube.upload"]
            )
            credentials = flow.run_local_server(port=0)

        # Save credentials for future use
        with open(token_pickle, "wb") as token:
            pickle.dump(credentials, token)

    return build("youtube", "v3", credentials=credentials)


def upload_video(video_path):
    youtube = get_authenticated_service()

    today = datetime.now().strftime("%B %d, %Y")
    body = {
        "snippet": {
            "title": f"Save Up to 70% on Hotel Bookings - HotelDropBot ({today})",
            "description": f"""🏨 Looking for the best hotel deals? Meet HotelDropBot!

HotelDropBot is your AI-powered assistant that helps you:
✅ Track hotel prices automatically
✅ Get notified when prices drop
✅ Save up to 70% on your bookings

Visit HotelDropBot.com today and start saving on your next stay!

#HotelDeals #TravelSavings #HotelBooking #TravelHacks #AI #SmartBooking

Video generated on {today}""",
            "tags": [
                "HotelDropBot",
                "Hotel Deals",
                "Travel Savings",
                "Hotel Booking",
                "AI Assistant",
                "Price Tracking",
                "Travel Hacks",
                "Smart Booking",
            ],
            "categoryId": "22",  # People & Blogs
        },
        "status": {"privacyStatus": "private", "selfDeclaredMadeForKids": False},
    }

    # Call the API to upload the video
    insert_request = youtube.videos().insert(
        part=",".join(body.keys()), body=body, media_body=MediaFileUpload(video_path, chunksize=-1, resumable=True)
    )

    print("Uploading video...")
    response = None
    while response is None:
        try:
            _, response = insert_request.next_chunk()
            if response:
                print(f"Video uploaded successfully! Video ID: {response['id']}")
                return response["id"]
        except Exception as e:
            print(f"An error occurred: {e}")
            break

    return None


if __name__ == "__main__":
    from simple_video import create_video

    # Generate video
    print("Generating video...")
    video_path = create_video()
    print(f"Video generated at: {video_path}")

    # Upload to YouTube
    if os.path.exists(video_path):
        video_id = upload_video(video_path)
        if video_id:
            print(f"Watch your video here: https://youtu.be/{video_id}")
            # Clean up
            os.remove(video_path)
            print("Temporary video file cleaned up.")
    else:
        print("Error: Video file not found.")
