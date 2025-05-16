import os
import pickle
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from googleapiclient.discovery import build
from googleapiclient.http import MediaFileUpload
from dotenv import load_dotenv

load_dotenv()


class YouTubeUploader:
    def __init__(self):
        self.scopes = ["https://www.googleapis.com/auth/youtube.upload"]
        self.api_name = "youtube"
        self.api_version = "v3"
        self.client_secrets_file = "client_secrets.json"
        self.credentials = None
        self.youtube = None

    def authenticate(self):
        """Authenticate with YouTube API"""
        # Token pickle file
        token_pickle = "token.pickle"

        # Check if we have valid credentials
        if os.path.exists(token_pickle):
            with open(token_pickle, "rb") as token:
                self.credentials = pickle.load(token)

        # If there are no valid credentials, let the user log in
        if not self.credentials or not self.credentials.valid:
            if self.credentials and self.credentials.expired and self.credentials.refresh_token:
                self.credentials.refresh(Request())
            else:
                flow = InstalledAppFlow.from_client_secrets_file(self.client_secrets_file, self.scopes)
                self.credentials = flow.run_local_server(port=0)

            # Save the credentials for the next run
            with open(token_pickle, "wb") as token:
                pickle.dump(self.credentials, token)

        self.youtube = build(self.api_name, self.api_version, credentials=self.credentials)

    def upload_video(self, video_path, title, description, tags=None):
        """Upload a video to YouTube"""
        if not self.youtube:
            self.authenticate()

        if not tags:
            tags = ["HotelDropBot", "Hotel Deals", "Travel Savings", "Hotel Booking"]

        body = {
            "snippet": {
                "title": title,
                "description": description,
                "tags": tags,
                "categoryId": "22",  # People & Blogs category
            },
            "status": {
                "privacyStatus": "private",  # Start as private, you can change later
                "selfDeclaredMadeForKids": False,
            },
        }

        # Create the video insert request
        insert_request = self.youtube.videos().insert(
            part=",".join(body.keys()), body=body, media_body=MediaFileUpload(video_path, chunksize=-1, resumable=True)
        )

        # Execute the request and get the response
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
    # Example usage
    uploader = YouTubeUploader()
    video_path = "generated_videos/promo_video.mp4"  # Path to your generated video
    title = "Save Up to 70% on Hotel Bookings with HotelDropBot!"
    description = """
    🏨 Tired of overpaying for hotel rooms? Meet HotelDropBot!

    HotelDropBot is your AI-powered assistant that helps you:
    ✅ Track hotel prices automatically
    ✅ Get notified when prices drop
    ✅ Save up to 70% on your bookings
    
    Visit HotelDropBot.com today and start saving on your next stay!
    
    #HotelDeals #TravelSavings #HotelBooking #TravelHacks
    """

    video_id = uploader.upload_video(video_path, title, description)
    if video_id:
        print(f"Video uploaded successfully! Watch it here: https://youtu.be/{video_id}")
