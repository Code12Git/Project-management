import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
const PageNotFound = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/')

        }, 3000)
        return () => clearTimeout(timer)
    }, [navigate])
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex items-center justify-center min-h-screen bg-gray-100"
        >
            <div className="text-center">
                <motion.h1
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-6xl font-bold text-gray-800"
                >
                    404
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-xl text-gray-500 mt-4"
                >
                    Oops! The page you're looking for doesn't exist.
                </motion.p>
            </div>
        </motion.div>
    );
}

export default PageNotFound;
