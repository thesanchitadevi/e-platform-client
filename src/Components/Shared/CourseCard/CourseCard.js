import React from 'react';
import { Link } from 'react-router-dom';


const CourseCard = ({ course, exampleRef }) => {
    // console.log(course);

    const { details, image_url, rating, title } = course;

    return (
        <div>
            <div className="max-w-xs overflow-hidden bg-slate-200 rounded-lg shadow-lg dark:bg-gray-800">
                <div className="px-4 py-2">
                    <h1 className="text-xl font-bold text-slate-800 uppercase dark:text-white">{title}</h1>
                    <div ref={exampleRef} className="mt-1 text-sm text-slate-600 dark:text-gray-400">
                        {details.length > 200 ?
                            <p>{details.slice(0, 120) + '...'} </p> :
                            <p > {details}</p>
                        }
                    </div>
                </div>

                <img className="object-cover w-full h-40 mt-2" src={image_url} alt="---" />

                <div className="flex items-center justify-between px-4 py-2 bg-slate-900">
                    <div className='flex space-x-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6.5  text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                        <h1 className="text-xl font-bold text-white"
                        >
                            {rating.number}
                        </h1>
                    </div>
                    <Link to='/checkout'  className="text-lg font-medium text-slate-200 transition-colors duration-300 transform"
                    >Purchase</Link>

                </div>
            </div>
        </div>
    );
};

export default CourseCard;