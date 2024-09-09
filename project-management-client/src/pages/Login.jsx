import React from 'react';
import { motion } from 'framer-motion';
import GoogleLogin from '../components/Login/GoogleLogin';

const formVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 }
};

const inputVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    focus: { scale: 1.05, transition: { duration: 0.3 } }
};

const buttonVariants = {
    hover: { scale: 1.05, transition: { yoyo: Infinity, duration: 0.3 } }
};

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
            <motion.div
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="bg-white p-8  rounded-xl shadow-lg w-full max-w-md"
            >
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl font-extrabold text-gray-800 text-center mb-8"
                >
                    Sign In
                </motion.h1>
                <form>
                    <motion.div
                        variants={inputVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="mb-6"
                    >
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <motion.input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            variants={inputVariants}
                            whileFocus="focus"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </motion.div>
                    <motion.div
                        variants={inputVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="mb-8"
                    >
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <motion.input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            variants={inputVariants}
                            whileFocus="focus"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </motion.div>
                    <motion.button
                        type="submit"
                        variants={buttonVariants}
                        whileHover="hover"
                        className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition ease-in-out duration-300"
                    >
                        Sign In
                    </motion.button>
                </form>
            </motion.div>
            <GoogleLogin />
        </div>
    );
}

export default Login;
