import { marketingAutomation } from '../utils/MarketingAutomation';
import dotenv from 'dotenv';

dotenv.config();

// Sample price drops data - in production, this would come from your actual hotel price tracking system
const samplePriceDrops = [
    {
        hotelName: "Luxury Resort & Spa",
        location: "Maldives",
        originalPrice: 599,
        newPrice: 299,
        savingsPercentage: 50,
        bookingLink: "https://t.me/hoteldropbot",
        imageUrl: "https://your-cdn.com/maldives-resort.jpg"
    },
    {
        hotelName: "Grand Plaza Hotel",
        location: "New York",
        originalPrice: 450,
        newPrice: 275,
        savingsPercentage: 39,
        bookingLink: "https://t.me/hoteldropbot",
        imageUrl: "https://your-cdn.com/nyc-hotel.jpg"
    },
    {
        hotelName: "Beachfront Paradise",
        location: "Bali",
        originalPrice: 350,
        newPrice: 189,
        savingsPercentage: 46,
        bookingLink: "https://t.me/hoteldropbot",
        imageUrl: "https://your-cdn.com/bali-resort.jpg"
    }
];

async function runAutomation() {
    try {
        console.log('Starting marketing automation...');
        await marketingAutomation.scheduleDailyPosts(samplePriceDrops);
        console.log('Marketing automation scheduled successfully');
    } catch (error) {
        console.error('Error running marketing automation:', error);
    }
}

// Run automation
runAutomation(); 