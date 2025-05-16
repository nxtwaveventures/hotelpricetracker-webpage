require('dotenv').config();

async function testFacebookToken() {
    try {
        // Test pages_show_list permission
        const response = await fetch(
            `https://graph.facebook.com/v22.0/me/accounts?access_token=${process.env.FB_ACCESS_TOKEN}`
        );

        const data = await response.json();

        if (data.error) {
            console.error('Error testing token:', data.error.message);
            return;
        }

        console.log('Successfully retrieved pages:', data.data.length > 0 ? data.data.map(page => page.name) : 'No pages found');

        // Test business_management permission
        const businessResponse = await fetch(
            `https://graph.facebook.com/v22.0/me/businesses?access_token=${process.env.FB_ACCESS_TOKEN}`
        );

        const businessData = await businessResponse.json();

        if (businessData.error) {
            console.error('Error testing business access:', businessData.error.message);
            return;
        }

        console.log('Successfully accessed business data');

    } catch (error) {
        console.error('Network error:', error.message);
    }
}

testFacebookToken(); 