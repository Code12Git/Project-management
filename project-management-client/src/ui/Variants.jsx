import React from 'react';
import { motion } from "framer-motion";

const Variants = () => {
    const container = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }

    const item = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 50
            }
        }
    }

    return (
        <div className="flex items-center  justify-around  bg-gradient-to-r ">
            <motion.div
                className="container max-w-6xl bg-white rounded-xl p-8  "
                variants={container}
                initial="hidden"
                animate="visible"
            >
                <motion.div className='item' variants={item}>
                    <motion.div className='flex flex-col md:flex-row justify-between items-center mb-6'>
                        <motion.h1
                            className='text-3xl md:text-4xl text-blue-600 font-extrabold text-center md:text-left mb-4 md:mb-0'
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Projexis
                        </motion.h1>
                        <div className='flex flex-col md:flex-row items-center gap-4 md:gap-6'>
                            <motion.button
                                whileHover={{ scale: 1.1, backgroundColor: '#3b82f6', color: '#fff' }}
                                className='text-lg font-semibold text-blue-600 px-4 py-2 border border-blue-600 rounded-lg transition duration-300 w-full md:w-auto'
                            >
                                Log in
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                className='bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300 w-full md:w-auto'
                            >
                                Get Projexis for free
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Variants;
