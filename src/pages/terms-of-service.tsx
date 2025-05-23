import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';

export default function TermsOfService() {
    useEffect(() => {
        console.log('Terms of Service page mounted');
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
            <Head>
                <title>Terms of Service - HotelDropBot</title>
                <meta name="description" content="Terms of Service for HotelDropBot - Your automated hotel price tracking assistant" />
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
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 via-orange-400 to-green-500 bg-clip-text text-transparent mb-8">Terms of Service</h1>

                    <div className="space-y-6 text-gray-600">
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                            <p>By accessing and using HotelDropBot, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Service Description</h2>
                            <p className="mb-4">HotelDropBot is a Telegram-based service that:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Tracks hotel prices</li>
                                <li>Sends notifications about price drops</li>
                                <li>Helps users find the best hotel deals</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
                            <p className="mb-4">You agree to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Provide accurate information when using the service</li>
                                <li>Not misuse or attempt to exploit the service</li>
                                <li>Not use the service for any illegal purposes</li>
                                <li>Maintain the security of your account</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Service Limitations</h2>
                            <p className="mb-4">Please understand that:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Hotel prices and availability are subject to change</li>
                                <li>We cannot guarantee specific price drops</li>
                                <li>Service availability may vary</li>
                                <li>Some features may be modified or discontinued</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
                            <p>All content, features, and functionality of HotelDropBot are owned by us and are protected by international copyright, trademark, and other intellectual property laws.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Disclaimer of Warranties</h2>
                            <p>The service is provided "as is" without any warranties, expressed or implied. We do not guarantee the accuracy of hotel prices or availability information.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
                            <p>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Changes to Terms</h2>
                            <p>We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
                            <p>For any questions about these Terms of Service, please contact us at:</p>
                            <p className="mt-2">Email: nxtwave.ventures@gmail.com</p>
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