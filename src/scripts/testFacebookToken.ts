import { FacebookAPI } from '../utils/socialMediaAPIs';
import dotenv from 'dotenv';

dotenv.config();

async function testFacebookToken() {
    try {
        // Test getting page info
        const response = await fetch(
            `https://graph.facebook.com/v19.0/${process.env.FB_PAGE_ID}?fields=name,id&access_token=${process.env.FB_ACCESS_TOKEN}`
        );

        const data = await response.json();

        if (data.error) {
            console.error('Error testing token:', data.error.message);
            return;
        }

        console.log('✅ Token test successful!');
        console.log('Page Name:', data.name);
        console.log('Page ID:', data.id);

        // Test creating a test post (commented out for safety)
        /*
        await FacebookAPI.createPost({
            message: "🔄 Test post - Please ignore",
            pageId: process.env.FB_PAGE_ID!,
            accessToken: process.env.FB_ACCESS_TOKEN!
        });
        console.log('✅ Test post created successfully!');
        */

    } catch (error) {
        console.error('❌ Error testing token:', error);
    }
}

testFacebookToken(); 