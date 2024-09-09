import React from 'react';
import { motion } from 'framer-motion';
import infoImage from '../../assets/image/info.png';

const Info = () => {
    return (
        <div className='relative overflow-hidden'>
            <div className='absolute inset-0 -z-10 clip-your-needful-style bg-gradient-to-r from-blue-400 via-red-400 to-purple-300'></div>

            <div className='container mx-auto py-8 px-4'>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className='flex flex-col lg:flex-row items-center gap-8'
                >
                    <div className='flex-1'>
                        <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4 text-center lg:text-left'>
                            Bring together your tasks, teammates, and tools with Projexis
                        </h1>
                        <p className='text-md md:text-lg lg:text-xl text-white mb-6 text-center lg:text-left'>
                            Keep everything in the same place—even if your team isn't.
                        </p>

                        <div className='flex flex-col lg:flex-row items-center gap-4 lg:gap-6'>
                            <div className='flex w-full flex-col md:flex-row gap-2'>
                                <input
                                    type='email'
                                    placeholder='Enter your email'
                                    className='p-2 rounded-lg border border-gray-300 w-full sm:w-auto focus:outline-none focus:border-blue-500'
                                />
                                <button className='bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-100'>
                                    Subscribe
                                </button>
                            </div>
                            <button className='bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-100 w-full lg:w-auto'>
                                Sign up - it's free!
                            </button>
                        </div>
                    </div>

                    <motion.img
                        src={infoImage}
                        alt='Info'
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className='w-full max-w-sm lg:max-w-md mx-auto'
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Info;
