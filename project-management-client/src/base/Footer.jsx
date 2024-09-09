import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const Footer = () => {
    return (
        <motion.footer
            className="bg-gray-800 text-white py-8 px-4"
            variants={footerVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <h2 className="text-2xl font-bold">Projexis</h2>
                        <p className="text-sm">
                            Your ultimate project management tool. Streamline your workflows and keep your team aligned.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
                        <div className="flex flex-col items-center md:items-start space-y-2">
                            <h3 className="text-lg font-semibold">Links</h3>
                            <a href="#features" className="hover:text-yellow-300">Features</a>
                            <a href="#pricing" className="hover:text-yellow-300">Pricing</a>
                            <a href="#contact" className="hover:text-yellow-300">Contact</a>
                        </div>
                        <div className="flex flex-col items-center md:items-start space-y-2">
                            <h3 className="text-lg font-semibold">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="https://facebook.com" className="text-xl hover:text-yellow-300">
                                    <FaFacebook />
                                </a>
                                <a href="https://twitter.com" className="text-xl hover:text-yellow-300">
                                    <FaTwitter />
                                </a>
                                <a href="https://linkedin.com" className="text-xl hover:text-yellow-300">
                                    <FaLinkedin />
                                </a>
                                <a href="https://instagram.com" className="text-xl hover:text-yellow-300">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-sm">© {new Date().getFullYear()} Projexis. All rights reserved.</p>
                </div>
            </div>
        </motion.footer>
    );
}

export default Footer;
