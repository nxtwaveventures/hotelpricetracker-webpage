import { FacebookAPI, InstagramAPI } from './socialMediaAPIs';

interface PriceDropPost {
    hotelName: string;
    location: string;
    originalPrice: number;
    newPrice: number;
    savingsPercentage: number;
    bookingLink: string;
    imageUrl?: string;
}

class MarketingAutomation {
    private static instance: MarketingAutomation;
    private fbAPI: typeof FacebookAPI;
    private instaAPI: typeof InstagramAPI;

    private constructor() {
        this.fbAPI = FacebookAPI;
        this.instaAPI = InstagramAPI;
    }

    public static getInstance(): MarketingAutomation {
        if (!MarketingAutomation.instance) {
            MarketingAutomation.instance = new MarketingAutomation();
        }
        return MarketingAutomation.instance;
    }

    private generatePostContent(priceDropData: PriceDropPost): string {
        const templates = [
            `🔥 HOT DEAL ALERT! 🔥\n\n${priceDropData.hotelName} in ${priceDropData.location} just dropped its price!\n\n💰 Was: $${priceDropData.originalPrice}\n💎 Now: $${priceDropData.newPrice}\n🎯 Save ${priceDropData.savingsPercentage}%!\n\n🤖 Spotted by @hoteldropbot\n#HotelDeals #TravelSavings #${priceDropData.location.replace(/\s+/g, '')}`,

            `✨ INCREDIBLE SAVINGS ALERT! ✨\n\nLuxury stay at ${priceDropData.hotelName} (${priceDropData.location})\n\n📉 Price Drop Details:\n- Original: $${priceDropData.originalPrice}\n- Current: $${priceDropData.newPrice}\n- Savings: ${priceDropData.savingsPercentage}%\n\n🎯 Track more deals with @hoteldropbot\n#TravelDeals #HotelSavings`,

            `💎 EXCLUSIVE PRICE DROP 💎\n\n${priceDropData.location} Getaway:\n${priceDropData.hotelName}\n\n🏷️ Was $${priceDropData.originalPrice}\n💫 Now only $${priceDropData.newPrice}!\n\n🤖 Deal found by @hoteldropbot - Your automated hotel savings assistant\n#TravelDeals #HotelDiscounts`
        ];

        return templates[Math.floor(Math.random() * templates.length)];
    }

    private async postToSocialMedia(content: string, imageUrl?: string) {
        try {
            // Post to Facebook
            await this.fbAPI.createPost({
                message: content,
                image: imageUrl,
                pageId: process.env.FB_PAGE_ID!,
                accessToken: process.env.FB_ACCESS_TOKEN!
            });

            // Post to Instagram
            await this.instaAPI.createPost({
                caption: content,
                image: imageUrl,
                accessToken: process.env.INSTAGRAM_ACCESS_TOKEN!
            });

            console.log('Successfully posted to social media platforms');
        } catch (error) {
            console.error('Error posting to social media:', error);
        }
    }

    public async scheduleDailyPosts(priceDrops: PriceDropPost[]) {
        // Schedule 2-3 posts per day
        const postsPerDay = Math.floor(Math.random() * 2) + 2; // Random number between 2-3

        for (let i = 0; i < postsPerDay; i++) {
            const randomDrop = priceDrops[Math.floor(Math.random() * priceDrops.length)];
            const content = this.generatePostContent(randomDrop);

            // Schedule posts at different times throughout the day
            const delay = (i + 1) * (24 / (postsPerDay + 1)) * 3600000; // Convert hours to milliseconds

            setTimeout(async () => {
                await this.postToSocialMedia(content, randomDrop.imageUrl);
            }, delay);
        }
    }
}

export const marketingAutomation = MarketingAutomation.getInstance(); 