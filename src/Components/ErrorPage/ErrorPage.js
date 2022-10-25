import React from 'react';
import Lottie from "lottie-react";
import Error from "../../assests/36395-lonely-404.json"
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div >
            <div className='w-50 lg:w-4/5 lg:mx-auto h-40 '>
                <Lottie animationData={Error} loop={true}></Lottie>
                <Link to='/' className=' mx-3 text-xl text-white font-semibold px-3 py-1 bg-slate-700 rounded'>Go Back Home</Link>
            </div>
            
        </div>
    );
};

export default ErrorPage;