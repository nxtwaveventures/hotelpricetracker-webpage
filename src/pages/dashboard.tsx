import type { GetServerSideProps } from 'next';
import FacebookDashboard from '../components/FacebookDashboard';

interface DashboardProps {
    initialData: {
        pages: Array<{
            id: string;
            name: string;
            category: string;
            accessToken: string;
        }>;
        businesses: Array<{
            id: string;
            name: string;
            primaryPage: string;
            verificationStatus: string;
            createdTime: string;
        }>;
    };
}

export default function DashboardPage({ initialData }: DashboardProps) {
    return <FacebookDashboard initialData={initialData} />;
}

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        // Fetch Facebook pages
        const pagesResponse = await fetch(
            `https://graph.facebook.com/v22.0/me/accounts?access_token=${process.env.FB_ACCESS_TOKEN}`
        );
        const pagesData = await pagesResponse.json();

        // Fetch business data
        const businessResponse = await fetch(
            `https://graph.facebook.com/v22.0/me/businesses?access_token=${process.env.FB_ACCESS_TOKEN}`
        );
        const businessData = await businessResponse.json();

        // Handle potential errors
        if (pagesData.error || businessData.error) {
            throw new Error(pagesData.error?.message || businessData.error?.message);
        }

        const pages = pagesData.data?.map((page: any) => ({
            id: page.id,
            name: page.name,
            category: page.category,
            accessToken: page.access_token
        })) || [];

        const businesses = businessData.data?.map((business: any) => ({
            id: business.id,
            name: business.name,
            primaryPage: business.primary_page,
            verificationStatus: business.verification_status,
            createdTime: business.created_time
        })) || [];

        return {
            props: {
                initialData: {
                    pages,
                    businesses
                }
            }
        };
    } catch (error: any) {
        console.error('Error fetching data:', error);
        return {
            props: {
                initialData: {
                    pages: [],
                    businesses: [],
                    error: error.message
                }
            }
        };
    }
} 