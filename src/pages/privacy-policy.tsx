import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';

export default function PrivacyPolicy() {
    useEffect(() => {
        console.log('Privacy Policy page mounted');
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
            <Head>
                <title>Privacy Policy - HotelDropBot</title>
                <meta name="description" content="Privacy Policy for HotelDropBot - Your automated hotel price tracking assistant" />
            </Head>

            {/* Navbar */}
            <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="flex-shrink-0">
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-orange-400 to-green-500 bg-clip-text text-transparent">
                                HotelDropBot
                            </h1>
                        </Link>
                    </div>
                </div>
            </nav>

            <main className="max-w-4xl mx-auto px-4 pt-24 pb-16 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-orange-100">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 via-orange-400 to-green-500 bg-clip-text text-transparent mb-8">Privacy Policy</h1>

                    <div className="space-y-6 text-gray-600">
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
                            <p className="mb-4">When you use HotelDropBot, we collect:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Telegram account information you provide</li>
                                <li>Hotel search preferences and criteria</li>
                                <li>Usage data and interaction with our bot</li>
                                <li>Device and browser information</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
                            <p className="mb-4">We use your information to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Track hotel prices based on your preferences</li>
                                <li>Send price drop notifications</li>
                                <li>Improve our service and user experience</li>
                                <li>Communicate important updates about our service</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Data Security</h2>
                            <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Data Sharing</h2>
                            <p>We do not sell your personal data. We may share your information with:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Service providers who assist in operating our service</li>
                                <li>Law enforcement when required by law</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Your Rights</h2>
                            <p className="mb-4">You have the right to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Access your personal data</li>
                                <li>Correct inaccurate data</li>
                                <li>Request deletion of your data</li>
                                <li>Withdraw consent at any time</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Contact Us</h2>
                            <p>For any privacy-related questions or concerns, please contact us at:</p>
                            <p className="mt-2">Email: nxtwave.ventures@gmail.com</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Updates to This Policy</h2>
                            <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
                        </section>
                    </div>
                </div>

                <div className="text-center">
                    <Link
                        href="/"
                        className="inline-block bg-gradient-to-r from-orange-500 via-orange-400 to-green-500 text-white px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        Return to Home
                    </Link>
                </div>
            </main>
        </div>
    );
} 