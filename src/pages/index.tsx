import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const howItWorksSteps = [
        {
            number: "01",
            title: "Start the Bot",
            description: "Open Telegram and search for @hoteldropbot. Click 'Start' to begin tracking hotel prices.",
            icon: "🤖"
        },
        {
            number: "02",
            title: "Enter Hotel Details",
            description: "Type in your destination, dates, and preferred hotels you want to track.",
            icon: "🏨"
        },
        {
            number: "03",
            title: "Get Price Alerts",
            description: "Receive instant notifications when prices drop for your selected hotels.",
            icon: "📱"
        },
        {
            number: "04",
            title: "Book & Save",
            description: "Book your hotel at the best price and save up to 70% on your stay.",
            icon: "💰"
        }
    ];

    const testimonials = [
        {
            name: "Sarah Thompson",
            role: "Business Traveler",
            comment: "HotelDropBot saved me over $200 on my last business trip to New York. The price alerts are incredibly helpful!",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
        },
        {
            name: "Michael Chen",
            role: "Frequent Traveler",
            comment: "I've been using this bot for 6 months now, and it's amazing how much money I've saved. The notifications are always timely.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
        },
        {
            name: "Emily Rodriguez",
            role: "Travel Blogger",
            comment: "As a travel blogger, I'm always booking hotels. This bot has become my secret weapon for finding the best deals!",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
            <Head>
                <title>HotelDropBot - Never Overpay for Hotel Rooms Again</title>
                <meta name="description" content="Track hotel prices and get instant alerts when prices drop. Save up to 70% on your hotel bookings with our Telegram bot." />
                <meta name="keywords" content="hotel price tracker, hotel deals, price drop alerts, telegram bot, travel savings" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Navbar */}
            <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                HotelDropBot
                            </h1>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a href="#features" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Features</a>
                                <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">How it Works</a>
                                <a href="#testimonials" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Testimonials</a>
                                <a href="https://t.me/hoteldropbot" className="bg-gradient-to-r from-orange-500 via-orange-400 to-green-500 text-white px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                                    Try Hotel Drop Bot
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
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
                                Never Overpay for Hotel Rooms
                            </span>
                            <br />
                            <span>Ever Again</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                            Track hotel prices and get instant alerts when they drop. Save up to 70% on your stays with our intelligent price tracking bot.
                        </p>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <a
                                href="https://t.me/hoteldropbot"
                                className="inline-block bg-gradient-to-r from-orange-500 via-orange-400 to-green-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
                            >
                                <span className="relative z-10">Start Saving Now</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-white/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <h3 className="text-4xl font-bold text-gray-900">Thousands</h3>
                            <p className="text-gray-600">of Happy Users</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <h3 className="text-4xl font-bold text-gray-900">Millions</h3>
                            <p className="text-gray-600">in Potential Savings</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <h3 className="text-4xl font-bold text-gray-900">Up to 70%</h3>
                            <p className="text-gray-600">Possible Savings*</p>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-8 text-sm text-gray-500"
                    >
                        <p>*Actual savings may vary based on seasonality, availability, and market conditions.</p>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose HotelDropBot?</h2>
                        <p className="text-xl text-gray-600">Powerful features to help you save on every booking</p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white p-6 rounded-xl shadow-lg"
                        >
                            <h3 className="text-xl font-semibold mb-4">Real-time Price Alerts</h3>
                            <p className="text-gray-600">Get instant notifications when hotel prices drop for your desired dates.</p>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white p-6 rounded-xl shadow-lg"
                        >
                            <h3 className="text-xl font-semibold mb-4">Multiple Hotels Tracking</h3>
                            <p className="text-gray-600">Track prices for multiple hotels simultaneously.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="py-20 bg-white/80">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
                        <p className="text-xl text-gray-600">Get started in just a few simple steps</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {howItWorksSteps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
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

            {/* Testimonials Section */}
            <section id="testimonials" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
                        <p className="text-xl text-gray-600">Join thousands of happy travelers saving money with HotelDropBot</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="flex items-center mb-4">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={48}
                                        height={48}
                                        className="rounded-full object-cover mr-4"
                                    />
                                    <div>
                                        <h4 className="font-semibold">{testimonial.name}</h4>
                                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-700">{testimonial.comment}</p>
                                <div className="mt-4 text-yellow-400">★★★★★</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-8">
                            Start Saving on Your Hotel Bookings Today
                        </h2>
                        <a
                            href="https://t.me/hoteldropbot"
                            className="inline-block bg-gradient-to-r from-orange-500 via-orange-400 to-green-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
                        >
                            <span className="relative z-10">Try HotelDropBot Now</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">HotelDropBot</h3>
                            <p className="text-gray-400">Your personal hotel price tracking assistant.</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
                                <li><a href="#how-it-works" className="text-gray-400 hover:text-white">How it Works</a></li>
                                <li><a href="#testimonials" className="text-gray-400 hover:text-white">Testimonials</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Legal</h4>
                            <ul className="space-y-2">
                                <li><a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                                <li><a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Connect</h4>
                            <ul className="space-y-2">
                                <li><a href="https://t.me/hoteldropbot" className="text-gray-400 hover:text-white">Telegram</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-gray-800 text-center">
                        <p className="text-gray-400">&copy; {new Date().getFullYear()} HotelDropBot. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
} 