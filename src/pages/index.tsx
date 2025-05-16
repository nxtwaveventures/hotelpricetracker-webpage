import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hoveredFeature, setHoveredFeature] = useState('');

    const memeSlogans = [
        "When hotels say 'best price'... 😂",
        "Me waiting for hotel prices to drop 👀",
        "Found a cheap hotel room! 🎉",
        "*Hotel prices go up* Me: Hold my bot 🤖"
    ];

    const howItWorksSteps = [
        {
            number: "01",
            title: "Wake Up the Bot 🤖",
            description: "Slide into @hoteldropbot's DMs on Telegram. It's like having a personal hotel price stalker (the good kind!).",
            icon: "🤖",
            memeText: "Bot: *exists* Hotel prices: *chuckles* I'm in danger"
        },
        {
            number: "02",
            title: "Tell Us Your Dreams ✨",
            description: "Drop your dream destination and dates. Our bot will start its mission like a detective on a case!",
            icon: "🏨",
            memeText: "Me: I want a 5-star hotel at 1-star prices\nBot: Say less fam"
        },
        {
            number: "03",
            title: "Spy Mode Activated 🕵️",
            description: "Sit back while our bot goes all ninja on those hotel prices. We'll ping you faster than you can say 'discount'!",
            icon: "📱",
            memeText: "Hotel prices: *changes by $1*\nBot: REAL STUFF IS HAPPENING HERE!"
        },
        {
            number: "04",
            title: "Secure The Bag 💰",
            description: "When prices drop, you drop everything and book that sweet deal. Your wallet will thank you later!",
            icon: "💰",
            memeText: "My bank account after using HotelDropBot: Is this financial freedom?"
        }
    ];

    const testimonials = [
        {
            name: "Sarah 'Money Saver' Thompson",
            role: "Professional Deal Hunter",
            comment: "This bot is like having a best friend who's obsessed with finding you hotel deals! Saved me $200 and my sanity 😅",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
        },
        {
            name: "Michael 'Always Traveling' Chen",
            role: "Digital Nomad",
            comment: "Me before HotelDropBot: 😭\nMe after HotelDropBot: 😎\nMy wallet: 🙏",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
        },
        {
            name: "Emily 'Deal Queen' Rodriguez",
            role: "Travel Influencer",
            comment: "Imagine having a robot friend who's sole purpose is to save you money. That's HotelDropBot! 🤖❤️",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150"
        }
    ];

    const memeSituations = [
        {
            emoji: "😤",
            title: "Hotel: 'Best Price Guaranteed'",
            setup: "Me: *Checks HotelDropBot*",
            punchline: "Also Me: 'You have no power here! 😎'"
        },
        {
            emoji: "🕵️‍♂️",
            title: "Price Tracking Mode",
            setup: "Other people: Refreshing pages manually",
            punchline: "Me with HotelDropBot: 'I'm something of a scientist myself'"
        },
        {
            emoji: "💸",
            title: "When Prices Drop",
            setup: "My wallet: 'Please, no more hotels'",
            punchline: "HotelDropBot: '70% OFF! Take my money!'"
        },
        {
            emoji: "🎯",
            title: "Booking Success",
            setup: "Friends: 'How do you always get the best deals?'",
            punchline: "Me: 'I know a guy... well, a bot actually 🤖'"
        },
        {
            emoji: "🎭",
            title: "The Plot Twist",
            setup: "Hotels: 'Nobody will notice if we raise prices'",
            punchline: "HotelDropBot: 'Hold my algorithms'"
        },
        {
            emoji: "🦸‍♂️",
            title: "The Hero We Need",
            setup: "Me: 'I want a 5-star experience'",
            punchline: "HotelDropBot: 'Best I can do is 5-star at 2-star price'"
        }
    ];

    const botActivities = [
        {
            emoji: "⏰",
            time: "5:00 AM",
            description: "Early bird gets the hotel deals! Starting the day by scanning thousands of hotel prices.",
            botThought: "Time to catch those sneaky price drops before anyone else! 🕵️‍♂️"
        },
        {
            emoji: "📊",
            time: "9:00 AM",
            description: "Crunching numbers and analyzing price patterns like a mathematical genius.",
            botThought: "Look at all these patterns... I should've been a data scientist! 🤓"
        },
        {
            emoji: "🏃‍♂️",
            time: "2:00 PM",
            description: "Racing to notify users about sudden price drops before they disappear.",
            botThought: "I am speed. I am savings. I am inevitable. 💨"
        },
        {
            emoji: "🎯",
            time: "7:00 PM",
            description: "Hunting down the best deals for tomorrow's early birds.",
            botThought: "These prices don't stand a chance against my algorithms! 🎯"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
            <Head>
                <title>HotelDropBot - Your Hotel Price Guardian Angel 😇</title>
                <meta name="description" content="Let our bot do the price stalking while you do the vacation planning! Save up to 70% on hotels with zero effort." />
                <meta name="keywords" content="hotel deals, travel savings, price alerts, telegram bot, travel hacks, hotel discounts" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Fun Navbar */}
            <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <motion.div
                            className="flex-shrink-0"
                            whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
                        >
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-orange-400 to-green-500 bg-clip-text text-transparent">
                                🤖 HotelDropBot
                            </h1>
                        </motion.div>
                    </div>
                </div>
            </nav>

            {/* Hero Section with Meme Energy */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-8">
                            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                Hotel Prices Too High?
                            </span>
                            <br />
                            <motion.span
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, -5, 5, -5, 0]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatDelay: 3
                                }}
                            >
                                Hold My Bot! 🤖
                            </motion.span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                            Let our AI-powered bot do the price stalking while you plan the fun stuff!
                            Save up to 70% on hotels with zero effort.
                            <span className="block mt-2 text-sm">(Because manually checking prices is so 2023 😉)</span>
                        </p>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <a
                                href="https://t.me/hoteldropbot"
                                className="inline-block bg-gradient-to-r from-orange-500 via-orange-400 to-green-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-xl relative overflow-hidden group"
                            >
                                <span className="relative z-10">Start Saving Now! 🚀</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Meme Stats Section */}
            <section className="py-20 bg-white/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="text-center p-6 bg-white rounded-xl shadow-lg"
                        >
                            <h3 className="text-4xl font-bold text-gray-900">Thousands</h3>
                            <p className="text-gray-600">of Happy Users</p>
                            <p className="text-sm text-gray-500 mt-2">*Not counting the happy wallets 😉</p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="text-center p-6 bg-white rounded-xl shadow-lg"
                        >
                            <h3 className="text-4xl font-bold text-gray-900">Millions</h3>
                            <p className="text-gray-600">in Potential Savings</p>
                            <p className="text-sm text-gray-500 mt-2">That's a lot of coffee ☕</p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="text-center p-6 bg-white rounded-xl shadow-lg"
                        >
                            <h3 className="text-4xl font-bold text-gray-900">Up to 70%</h3>
                            <p className="text-gray-600">Possible Savings*</p>
                            <p className="text-sm text-gray-500 mt-2">*Your mileage may vary, but your smile won't! 😊</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* How It Works Section with Memes */}
            <section id="how-it-works" className="py-20 bg-white/80">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
                        <p className="text-xl text-gray-600">No rocket science here, just pure hotel-price-dropping magic! 🎩✨</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {howItWorksSteps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.2 }
                                }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative p-6 bg-white rounded-xl shadow-lg"
                                onHoverStart={() => setHoveredFeature(step.number)}
                                onHoverEnd={() => setHoveredFeature('')}
                            >
                                <div className="text-4xl mb-4">{step.icon}</div>
                                <div className="absolute top-4 right-4 text-purple-200 font-bold text-3xl">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                                {hoveredFeature === step.number && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-4 p-3 bg-purple-50 rounded-lg text-sm text-gray-700"
                                    >
                                        {step.memeText}
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meme Gallery Section */}
            <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Hotel Life Be Like...</h2>
                        <p className="text-xl text-gray-600">Some relatable moments that make HotelDropBot your BFF 😎</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {memeSituations.map((situation, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.05 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-xl shadow-lg overflow-hidden"
                            >
                                <div className="text-4xl mb-4">{situation.emoji}</div>
                                <h3 className="text-xl font-bold mb-3">{situation.title}</h3>
                                <div className="space-y-2">
                                    <p className="text-gray-600">{situation.setup}</p>
                                    <p className="text-purple-600 font-semibold">{situation.punchline}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bot Life Section */}
            <section className="py-20 bg-white/80">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">A Day in the Life of HotelDropBot</h2>
                        <p className="text-xl text-gray-600">What your favorite price-stalking bot does all day 🤖</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {botActivities.map((activity, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                whileHover={{ scale: 1.02 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-white to-purple-50 p-6 rounded-xl shadow-lg"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="text-4xl">{activity.emoji}</div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-2">{activity.time}</h3>
                                        <p className="text-gray-600">{activity.description}</p>
                                        <p className="text-sm text-purple-600 mt-2 italic">{activity.botThought}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fun CTA Section */}
            <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-8">
                            Ready to Never Overpay for Hotels Again?
                            <br />
                            <span className="text-yellow-300">Your Wallet Will Thank You Later! 💸</span>
                        </h2>
                        <motion.a
                            href="https://t.me/hoteldropbot"
                            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-bold hover:shadow-xl transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Let's Save Some Money! 🚀
                        </motion.a>
                        <p className="mt-4 text-white/80 text-sm">
                            *No hotels were harmed in the making of these savings 😉
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Footer with Fun Elements */}
            <footer className="bg-white/90 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <p className="text-gray-600">Made with 💖 by hotel price stalking experts</p>
                        <p className="text-sm text-gray-500 mt-2">© 2024 HotelDropBot - Your favorite money-saving robot 🤖</p>
                    </div>
                </div>
            </footer>
        </div>
    );
} 