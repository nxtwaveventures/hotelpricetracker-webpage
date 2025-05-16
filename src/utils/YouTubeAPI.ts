import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';
import * as fs from 'fs';
import * as path from 'path';

export class YouTubeAPI {
    private static readonly SCOPES = [
        'https://www.googleapis.com/auth/youtube.upload',
        'https://www.googleapis.com/auth/youtube'
    ];
    private static readonly TOKEN_PATH = path.join(process.cwd(), 'youtube_token.json');
    private static readonly CREDENTIALS_PATH = path.join(process.cwd(), 'client_secrets.json');

    private static async getAuthClient(): Promise<OAuth2Client> {
        const credentials = JSON.parse(fs.readFileSync(YouTubeAPI.CREDENTIALS_PATH, 'utf8'));
        const { client_secret, client_id, redirect_uris } = credentials.installed;
        const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

        try {
            // Try to load existing token
            if (fs.existsSync(YouTubeAPI.TOKEN_PATH)) {
                const token = JSON.parse(fs.readFileSync(YouTubeAPI.TOKEN_PATH, 'utf8'));
                oAuth2Client.setCredentials(token);
                return oAuth2Client;
            }
        } catch (err) {
            console.warn('No existing token found or token invalid');
        }

        // If no valid token exists, get a new one
        return await YouTubeAPI.getNewToken(oAuth2Client);
    }

    private static async getNewToken(oAuth2Client: OAuth2Client): Promise<OAuth2Client> {
        const authUrl = oAuth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: YouTubeAPI.SCOPES,
        });

        console.log('Authorize this app by visiting this url:', authUrl);

        // This will need to be replaced with your actual method of getting the code
        // For now, we'll throw an error with instructions
        throw new Error(
            'Please visit the authorization URL printed above and get the code. ' +
            'Then create a file called youtube_token.json with the token data.'
        );
    }

    static async uploadVideo(videoPath: string, title: string, description: string, tags: string[] = []) {
        try {
            const auth = await YouTubeAPI.getAuthClient();
            const youtube = google.youtube({ version: 'v3', auth });

            console.log('Starting video upload...');

            const response = await youtube.videos.insert({
                part: ['snippet', 'status'],
                requestBody: {
                    snippet: {
                        title,
                        description,
                        tags,
                        categoryId: '22' // People & Blogs category
                    },
                    status: {
                        privacyStatus: 'private' // Start as private for safety
                    }
                },
                media: {
                    body: fs.createReadStream(videoPath)
                }
            });

            console.log('Video upload complete!');
            return response.data;

        } catch (error) {
            console.error('Error uploading video:', error);
            throw error;
        }
    }
} 