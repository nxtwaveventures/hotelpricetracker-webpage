import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface FacebookPage {
    id: string;
    name: string;
    category: string;
    accessToken: string;
}

interface Business {
    id: string;
    name: string;
    primaryPage: string;
    verificationStatus: string;
    createdTime: string;
}

interface FacebookDashboardProps {
    initialData: {
        pages: FacebookPage[];
        businesses: Business[];
        error?: string;
    };
}

export default function FacebookDashboard({ initialData }: FacebookDashboardProps) {
    const [pages, setPages] = useState<FacebookPage[]>(initialData.pages);
    const [businesses, setBusinesses] = useState<Business[]>(initialData.businesses);
    const [error, setError] = useState<string | null>(initialData.error || null);
    const [postContent, setPostContent] = useState('');
    const [selectedPageId, setSelectedPageId] = useState('');

    if (error) {
        return (
            <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-red-600">Error: {error}</h2>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">Facebook Dashboard</h2>
                    <p className="mt-4 text-lg text-gray-500">Manage your Facebook pages and business information</p>
                </div>

                <div className="mt-12 grid gap-8 md:grid-cols-2">
                    {/* Facebook Pages Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white overflow-hidden shadow rounded-lg"
                    >
                        <div className="px-4 py-5 sm:p-6">
                            <h3 className="text-lg font-medium text-gray-900">Your Facebook Pages</h3>
                            <div className="mt-4 space-y-4">
                                {pages.map((page) => (
                                    <div key={page.id} className="border-t border-gray-200 pt-4">
                                        <p className="text-lg font-semibold">{page.name}</p>
                                        <p className="text-sm text-gray-500">Category: {page.category}</p>
                                        <p className="text-sm text-gray-500">ID: {page.id}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Business Information Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white overflow-hidden shadow rounded-lg"
                    >
                        <div className="px-4 py-5 sm:p-6">
                            <h3 className="text-lg font-medium text-gray-900">Business Information</h3>
                            <div className="mt-4 space-y-4">
                                {businesses.map((business) => (
                                    <div key={business.id} className="border-t border-gray-200 pt-4">
                                        <p className="text-lg font-semibold">{business.name}</p>
                                        <p className="text-sm text-gray-500">
                                            Verification Status: {business.verificationStatus}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Created: {new Date(business.createdTime).toLocaleDateString()}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Post to Facebook Section (Restricted) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="md:col-span-2 bg-white overflow-hidden shadow rounded-lg opacity-75"
                    >
                        <div className="px-4 py-5 sm:p-6">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-medium text-gray-900">Post to Facebook</h3>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-yellow-100 text-yellow-800">
                                    Requires Additional Permissions
                                </span>
                            </div>
                            <div className="mt-4 space-y-4">
                                <div>
                                    <label htmlFor="page" className="block text-sm font-medium text-gray-700">
                                        Select Page
                                    </label>
                                    <select
                                        id="page"
                                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-gray-100"
                                        value={selectedPageId}
                                        onChange={(e) => setSelectedPageId(e.target.value)}
                                        disabled
                                    >
                                        <option value="">Select a page</option>
                                        {pages.map((page) => (
                                            <option key={page.id} value={page.id}>
                                                {page.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="post" className="block text-sm font-medium text-gray-700">
                                        Post Content
                                    </label>
                                    <textarea
                                        id="post"
                                        rows={4}
                                        className="mt-1 block w-full sm:text-sm border-gray-300 rounded-md bg-gray-100"
                                        placeholder="This feature requires the pages_manage_posts permission"
                                        value={postContent}
                                        onChange={(e) => setPostContent(e.target.value)}
                                        disabled
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        type="button"
                                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-400 cursor-not-allowed"
                                        disabled
                                    >
                                        Post to Facebook
                                    </button>
                                </div>
                                <div className="mt-2 text-sm text-gray-500">
                                    <p>To enable posting, you need to:</p>
                                    <ol className="list-decimal list-inside mt-2">
                                        <li>Submit your app for Facebook Review</li>
                                        <li>Request the pages_manage_posts permission</li>
                                        <li>Provide documentation on how you'll use the permission</li>
                                        <li>Wait for Facebook's approval</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
} 