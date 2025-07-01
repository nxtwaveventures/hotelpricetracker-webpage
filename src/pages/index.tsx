import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const howItWorksSteps = [
        {
            number: "01",
            title: "Connect to Bot 🤖",
            description: "Message @hoteldropbot on Telegram. It's free and takes 30 seconds.",
            icon: "🤖"
        },
        {
            number: "02",
            title: "Set Your Trip 🏨",
            description: "Tell us your destination and dates. Our bot starts tracking immediately.",
            icon: "🏨"
        },
        {
            number: "03",
            title: "Get Alerts 📱",
            description: "We notify you instantly when prices drop. No more manual checking.",
            icon: "📱"
        },
        {
            number: "04",
            title: "Book & Save 💰",
            description: "Book at the perfect time and save 40-70%. Your wallet will thank you.",
            icon: "💰"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
            <Head>
                <title>HotelDropBot - Save 70% on Hotels</title>
                <meta name="description" content="Never overpay for hotels again. Our bot tracks prices 24/7 and alerts you when rates drop. Save up to 70% effortlessly." />
                <meta name="keywords" content="hotel deals, travel savings, price alerts, telegram bot, hotel discounts" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Navbar */}
            <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <motion.div
                            className="flex-shrink-0"
                            whileHover={{ scale: 1.1 }}
                        >
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-orange-400 to-green-500 bg-clip-text text-transparent">
                                🤖 HotelDropBot
                            </h1>
                        </motion.div>
                    </div>
                </div>
            </nav>

            {/* Hero Section with MIT Principles */}
            <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Empowerment Promise */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mb-8 p-4 bg-yellow-400 text-black rounded-xl inline-block"
                        >
                            <h3 className="text-lg font-bold">🎯 By the end of this page, you'll know exactly how to save 70% on hotels</h3>
                        </motion.div>

                        {/* Symbol + Slogan */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-5xl md:text-7xl font-bold text-white mb-6"
                        >
                            🏨 HotelDropBot
                            <br />
                            <span className="text-yellow-300">Never Overpay Again</span>
                        </motion.h1>

                        {/* Salient Idea */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
                        >
                            <strong>The Question:</strong> Why pay full price when hotels drop their rates every single day?
                            <br />
                            <strong>The Answer:</strong> You shouldn't. Let our bot track prices while you sleep.
                        </motion.p>

                        {/* Surprise */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="mb-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                        >
                            <h3 className="text-2xl font-bold text-yellow-300 mb-2">🤯 Mind-Blowing Fact</h3>
                            <p className="text-white text-lg">
                                Hotels change their prices <strong>3x per day</strong> on average.
                                Most people book at the WORST time and lose hundreds of dollars.
                            </p>
                        </motion.div>

                        {/* Call to Action */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.0 }}
                        >
                            <motion.a
                                href="https://t.me/hoteldropbot"
                                className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-full text-xl font-bold transition-all transform hover:scale-105 shadow-2xl"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Start Saving Money Now - It's Free! 🚀
                            </motion.a>
                            <p className="text-white/80 mt-4">No signup required • Takes 30 seconds • Start tracking immediately</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Verbal Punctuation Break */}
            <section className="py-12 bg-gradient-to-r from-yellow-400 to-orange-400">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-black">
                        📊 Here's exactly how we'll save you money...
                    </h2>
                </div>
            </section>

            {/* The Story */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">
                                💡 The Story That Started It All
                            </h3>
                            <div className="space-y-4 text-lg text-gray-700">
                                <p>
                                    <strong>Picture this:</strong> You book a hotel for $200/night.
                                    The next day, your friend books the SAME room for $120.
                                </p>
                                <p>
                                    <strong>The frustration:</strong> You lost $80 because you didn't know
                                    the hotel was about to drop prices.
                                </p>
                                <p>
                                    <strong>The solution:</strong> What if a bot watched prices 24/7
                                    and told you the PERFECT time to book?
                                </p>
                                <p className="text-purple-600 font-bold">
                                    That's exactly what HotelDropBot does. And it's about to change your travel forever.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative w-full h-[400px] bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl p-8">
                                <div className="space-y-4">
                                    <div className="bg-red-100 p-4 rounded-lg border border-red-200">
                                        <h4 className="font-bold text-red-700">❌ Without HotelDropBot</h4>
                                        <p className="text-red-600">You: $200/night • Friend: $120/night</p>
                                        <p className="text-sm text-red-500">You lost $80 💸</p>
                                    </div>
                                    <div className="bg-green-100 p-4 rounded-lg border border-green-200">
                                        <h4 className="font-bold text-green-700">✅ With HotelDropBot</h4>
                                        <p className="text-green-600">You: $120/night • Friend: $200/night</p>
                                        <p className="text-sm text-green-500">You saved $80 🎉</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Ask Questions - Engage the audience */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">
                        🤔 Quick Question: Which Person Are You?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="p-8 bg-red-50 rounded-xl border-2 border-red-200"
                        >
                            <h3 className="text-2xl font-bold text-red-700 mb-4">😰 Person A</h3>
                            <ul className="text-left space-y-2 text-red-600">
                                <li>• Books hotels at random times</li>
                                <li>• Pays whatever price shows up</li>
                                <li>• Loses hundreds on every trip</li>
                                <li>• Complains about expensive travel</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="p-8 bg-green-50 rounded-xl border-2 border-green-200"
                        >
                            <h3 className="text-2xl font-bold text-green-700 mb-4">😎 Person B</h3>
                            <ul className="text-left space-y-2 text-green-600">
                                <li>• Uses HotelDropBot to track prices</li>
                                <li>• Books at the perfect moment</li>
                                <li>• Saves 40-70% consistently</li>
                                <li>• Travels more with saved money</li>
                            </ul>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mt-12"
                    >
                        <p className="text-xl text-gray-700 mb-6">
                            <strong>The choice is obvious.</strong> The question is: are you ready to make the switch?
                        </p>
                        <motion.a
                            href="https://t.me/hoteldropbot"
                            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-xl font-bold transition-all transform hover:scale-105 inline-block"
                            whileHover={{ scale: 1.05 }}
                        >
                            Yes, I Want To Be Person B →
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            {/* How It Works - Simplified */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
                        <p className="text-xl text-gray-600">4 simple steps to hotel savings mastery</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {howItWorksSteps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.05 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative p-6 bg-white rounded-xl shadow-lg border border-gray-100"
                            >
                                <div className="text-4xl mb-4">{step.icon}</div>
                                <div className="absolute top-4 right-4 text-purple-200 font-bold text-3xl">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                            Ready to Never Overpay for Hotels Again?
                        </h2>
                        <p className="text-xl text-white/90 mb-8">
                            Join thousands of smart travelers who save 40-70% on every trip
                        </p>
                        <motion.a
                            href="https://t.me/hoteldropbot"
                            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-bold hover:shadow-xl transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Start Saving Now - Free Forever! 🚀
                        </motion.a>
                        <p className="text-white/70 mt-4 text-sm">
                            No credit card • No signup • Just instant savings
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
} 