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
        fetch('http://localhost:5000/course-category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='grid lg:grid-cols-3 sm:grid-rows-1 my-10'>
            <div>
                <LeftNav></LeftNav>
            </div>
            <div className='lg:col-span-2 text-center '>
                <div className='grid lg:grid-cols-2 gap-4 w-10/12 mx-auto pt-5'>
                    {
                        categories.map(category => <p className='py-2'
                            key={category.id}
                        >
                            {/* Each Course name with image */}
                            <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto shadow-lg">
                                <div  className="w-full h-60 bg-slate-300 bg-center bg-cover rounded-lg shadow-md" ><img src={category.image_url} alt="" className='h-60 w-full' /></div>

                                <div  className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-slate-800">

                                    <Link className='py-2 text-xl text-slate-800 font-bold' to={`/category/${category.id}`}
                                    
                                        ref={exampleRef}
                                    >
                                        <span  className="py-2 font-bold tracking-wide text-center text-slate-800 uppercase dark:text-white">{category.name}</span>
                                    </Link>
                                    <div>
                                        <Pdf targetRef={exampleRef} filename="example.pdf">
                                            {({ toPdf }) =>
                                                <button onClick={toPdf} className="flex items-center justify-between px-4 py-2 bg-slate-200 w-full">
                                                    <p className="px-2 py-1 text-xs font-semibold text-slate-900 uppercase transition-colors duration-300 transform">Download Course Details
                                                    </p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                                    </svg>
                                                </button>}
                                        </Pdf>
                                        
                                    </div>



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