import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Contact() {
    const [formState, setFormState] = useState({
        email: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle the form submission
        // For now, we'll just show the success message
        setIsSubmitted(true);
    };

    const funnyLoadingMessages = [
        "Teaching the bot to read emails... 📧",
        "Warming up the response generator... 🔥",
        "Checking if the bot is awake... 😴",
        "Preparing witty responses... 🎭",
        "Loading customer service mode... 🤖"
    ];

    const botStats = [
        { label: "Average Response Time", value: "42 seconds*", footnote: "*Because 42 is the answer to everything" },
        { label: "Bot's Mood Today", value: "😎 Super Chill", footnote: "Results may vary based on coffee intake" },
        { label: "Humor Level", value: "Over 9000", footnote: "Yes, that's a meme reference" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
            <Head>
                <title>Contact HotelDropBot - We're Here to Help! 🤖</title>
                <meta name="description" content="Need help? Want to share a meme? Our bot is ready to chat!" />
            </Head>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Let's Chat! 💬
                    </h1>
                    <p className="text-xl text-gray-600">
                        Our bot is standing by, probably doing robot pushups while waiting for your message
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-xl shadow-lg p-8"
                    >
                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Your Email (so our bot knows where to send the virtual high-fives)
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                        Your Message (bot-friendly language encouraged 🤖)
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    />
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-orange-500 via-orange-400 to-green-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-xl transition-shadow"
                                >
                                    Send Message 🚀
                                </motion.button>
                            </form>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-8"
                            >
                                <div className="text-6xl mb-4">🎉</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                                <p className="text-gray-600">
                                    Our bot is doing a happy dance and will get back to you faster than you can say "hotel deals"!
                                </p>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Fun Stats and Meme */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-8"
                    >
                        {/* Bot Stats */}
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Bot Status Report 📊</h3>
                            <div className="space-y-4">
                                {botStats.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.02 }}
                                        className="p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg"
                                    >
                                        <div className="font-medium text-gray-700">{stat.label}</div>
                                        <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                                        <div className="text-sm text-gray-500 italic">{stat.footnote}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Meme */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-white rounded-xl shadow-lg p-8 text-center"
                            onHoverStart={() => setIsHovered(true)}
                            onHoverEnd={() => setIsHovered(false)}
                        >
                            <div className="relative h-48 w-full mb-4">
                                <Image
                                    src="/contact-meme.png"
                                    alt="Fun contact meme"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                            <motion.p
                                animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                                className="text-gray-600 font-medium"
                            >
                                When someone asks how I got such a great hotel deal 😏
                            </motion.p>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Fun Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-600 mb-4">
                        PS: Our bot runs on a strict diet of clean code and dad jokes 🤖
                    </p>
                    <Link
                        href="/"
                        className="inline-block bg-white text-gray-600 px-6 py-3 rounded-full text-sm font-medium hover:shadow-lg transition-shadow"
                    >
                        ← Back to Homepage
                    </Link>
                </motion.div>
            </main>
        </div>
    );
} 