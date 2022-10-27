import React from 'react';
import { Link } from 'react-router-dom';
import ReactToPdf from "react-to-pdf";


const ref = React.createRef();

const CourseCard = ({ course, exampleRef }) => {
    // console.log(course);

    const { _id, details, image_url, rating, title } = course;

    return (
        <div>
            <div className="max-w-xs overflow-hidden bg-slate-200 rounded-lg shadow-lg dark:bg-gray-800">
                <div ref={ref} className="px-4 py-2">
                    <h1 className="text-xl font-bold text-slate-800 uppercase dark:text-white" >{title}</h1>
                    <div className="mt-1 text-sm text-slate-600 dark:text-gray-400">
                        
                            <p  > {details}</p>
                        
                    </div>
                </div>
                <img className="object-cover w-full h-40 mt-2 " src={image_url} alt="---" />
                <div className="flex items-center justify-between px-4 py-1.5 bg-slate-700">
                    <ReactToPdf targetRef={ref} filename="course.pdf">
                        {({ toPdf }) => (

                            <button onClick={toPdf} className='flex space-x-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>

                            </button>

                        )}
                    </ReactToPdf>
                    

                    <Link  to={`/checkout/${_id}`} className="text-lg font-medium text-slate-200 transition-colors duration-300 transform"
                    >Premium</Link>

                </div>
            </div>
        </div >
    );
};

export default CourseCard;