import { motion } from 'framer-motion';
import Image from 'next/image';

export default function MarketingAgent() {
    const marketingFeatures = [
        {
            title: "Automated Social Media",
            description: "24/7 content posting and engagement on Facebook, Instagram, and Twitter",
            icon: "📱"
        },
        {
            title: "Smart Analytics",
            description: "Real-time tracking of campaign performance and audience engagement",
            icon: "📊"
        },
        {
            title: "AI-Powered Content",
            description: "Automatically generates and schedules engaging posts about hotel deals",
            icon: "🤖"
        },
        {
            title: "Community Management",
            description: "Automated responses to common queries and engagement with followers",
            icon: "💬"
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-green-50 via-white to-orange-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Meet Your Digital Marketing Assistant
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our AI-powered marketing agent works 24/7 to promote HotelDropBot across social media platforms, ensuring maximum visibility and engagement.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {marketingFeatures.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-2xl shadow-xl"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">How Our Marketing Agent Works</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    <span>Monitors trending travel topics and hashtags</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    <span>Creates and schedules engaging content automatically</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    <span>Responds to user comments and messages</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    <span>Optimizes posting times for maximum engagement</span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative h-64 md:h-full">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-400 to-green-500 rounded-xl opacity-10"></div>
                            <div className="relative h-full flex items-center justify-center">
                                <div className="text-6xl">🤖</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 