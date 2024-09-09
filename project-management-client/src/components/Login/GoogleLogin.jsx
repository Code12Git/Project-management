import React from 'react';
import { motion } from 'framer-motion';
import { useGoogleLogin } from '@react-oauth/google';
import { FcGoogle } from 'react-icons/fc';
import { googleAuth } from '../../providers/authProvider';
const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)", transition: { duration: 0.3 } },
    tap: { scale: 0.95 }
};

const GoogleLogin = () => {
    const responseGoogle = async (authResult) => {
        try {
            if (authResult['code']) {
                const result = await googleAuth(authResult['code'])
                const { email, name, image } = result.data.user
                console.log(result.data.user)
            }
        } catch (err) {
            console.error('Error while requesting Google login:', err);
        }
    };

    const googleLogin = useGoogleLogin({
        onSuccess: responseGoogle,
        onError: responseGoogle,
        flow: 'auth-code'
    });

    return (
        <div className='mt-4'>
            <motion.button
                onClick={googleLogin}
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className=" flex bg-white text-white font-semibold py-3 px-6 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-300"
            >
                <FcGoogle className="text-2xl mr-3" />
                <span className='text-black'>Login with Google</span>
            </motion.button>
        </div>
    );
};

export default GoogleLogin;
