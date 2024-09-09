import React from 'react';
import { motion } from 'framer-motion';

const GetStarted = () => {
    return (
        <div className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 py-12 px-4 text-center flex flex-col items-center justify-center space-y-8">
            <motion.h1
                className="text-white text-3xl md:text-4xl font-bold leading-tight"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                Get started with <span className="text-yellow-200">Projexis</span> today
            </motion.h1>
            <motion.div
                className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 w-full max-w-md"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full md:w-auto p-3 rounded-lg border-none text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                    whileFocus={{ scale: 1.05 }}
                />
                <motion.button
                    className="bg-yellow-300 hover:bg-yellow-400 text-gray-800 font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out"
                    whileHover={{ scale: 1.05, backgroundColor: '#fbbf24', color: '#1f2937' }}
                    whileTap={{ scale: 0.95 }}
                >
                    Sign up
                </motion.button>
            </motion.div>
        </div>
    );
}

export default GetStarted;
