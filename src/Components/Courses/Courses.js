import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LeftNav from '../Shared/LeftNav/LeftNav';
import Pdf from "react-to-pdf";
import { useRef } from 'react';


const ref = React.createRef();

const Courses = () => {
    const exampleRef = useRef();

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://e-platform-server.vercel.app/course-category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='grid lg:grid-cols-3 sm:grid-rows-1 my-10'>
            <div ref={exampleRef}>
                <LeftNav></LeftNav>
            </div>
            <div className='lg:col-span-2 text-center '>
                <div className='grid lg:grid-cols-2 gap-4 w-10/12 mx-auto pt-5'>
                    {
                        categories.map(category => <p className='py-2'
                            key={category.id}
                            category={category}

                        >
                            {/* Each Course name with image */}
                            <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto shadow-lg">
                                <div className="w-full h-60 bg-slate-300 bg-center bg-cover rounded-lg shadow-md" ><img src={category.image_url} alt="" className='h-60 w-full' /></div>

                                <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-slate-800">

                                    <Link className='py-2 text-xl text-slate-800 font-bold' to={`/category/${category.id}`}
                                    >
                                        <span className="py-2 font-bold tracking-wide text-center text-slate-800 uppercase dark:text-white">{category.name}</span>
                                        <div>
                                            <button className="flex items-center justify-center px-4 py-2 bg-slate-200 w-full">
                                                <p className="px-2 py-1 text-xs font-semibold text-slate-900 uppercase transition-colors duration-300 transform">Visit Course Details
                                                </p>
                                                
                                            </button>

                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </p>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Courses;