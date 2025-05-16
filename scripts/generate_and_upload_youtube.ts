import { YouTubeAPI } from '../src/utils/YouTubeAPI';
import * as fs from 'fs';
import * as path from 'path';
import { spawn } from 'child_process';

async function generateVideo(): Promise<string> {
    const outputDir = path.join(process.cwd(), 'generated_videos');
    const outputPath = path.join(outputDir, `promo_${Date.now()}.mp4`);

    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // For now, we'll create a simple video using ffmpeg
    // You'll need to have ffmpeg installed on your system
    return new Promise((resolve, reject) => {
        // Create a 10-second video with text
        const ffmpeg = spawn('ffmpeg', [
            '-f', 'lavfi', // Use lavfi input format
            '-i', 'color=c=blue:s=1920x1080:d=10', // Blue background
            '-vf', 'drawtext=text=\'HotelDropBot - Save on Hotel Bookings\':fontsize=60:fontcolor=white:x=(w-text_w)/2:y=(h-text_h)/2',
            '-c:v', 'libx264', // Use H.264 codec
            '-preset', 'medium', // Encoding preset
            '-movflags', '+faststart', // Enable fast start for web playback
            outputPath
        ]);

        ffmpeg.stderr.on('data', (data) => {
            console.log(`ffmpeg: ${data}`);
        });

        ffmpeg.on('close', (code) => {
            if (code === 0) {
                resolve(outputPath);
            } else {
                reject(new Error(`ffmpeg process exited with code ${code}`));
            }
        });
    });
}

async function main() {
    try {
        // Generate the video
        console.log('Generating video...');
        const videoPath = await generateVideo();
        console.log('Video generated:', videoPath);

        // Upload to YouTube
        const title = 'HotelDropBot - Never Overpay for Hotel Rooms Again';
        const description = `Track hotel prices and get instant alerts when they drop. 
Save up to 70% on your hotel bookings with our intelligent price tracking bot.

Features:
- Real-time price alerts
- Multiple hotel tracking
- Easy to use Telegram interface
- Potential savings up to 70%

Try it now: https://t.me/hoteldropbot`;

        const tags = [
            'hotel deals',
            'travel savings',
            'hotel price tracker',
            'travel tips',
            'hotel booking',
            'travel hacks',
            'budget travel',
            'hotel discounts'
        ];

        console.log('Uploading to YouTube...');
        const result = await YouTubeAPI.uploadVideo(videoPath, title, description, tags);
        console.log('Upload complete! Video ID:', result.id);

        // Clean up the generated video
        fs.unlinkSync(videoPath);
        console.log('Cleaned up temporary video file');

    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

main(); 