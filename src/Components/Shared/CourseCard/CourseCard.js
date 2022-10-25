import React from 'react';

const CourseCard = ({ course }) => {
    console.log(course);
    const { details, image_url, rating, title, total_download } = course;
    return (
        <div>
            <div className="max-w-xs overflow-hidden bg-slate-200 rounded-lg shadow-lg dark:bg-gray-800">
                <div className="px-4 py-2">
                    <h1 className="text-xl font-bold text-amber-800 uppercase dark:text-white">{title}</h1>
                    <div className="mt-1 text-sm text-slate-600 dark:text-gray-400">
                        {details.length > 200 ?
                            <p>{details.slice(0, 100) + '...'} </p> :
                            <p> {details}</p>
                        }
                    </div>
                </div>

                <img className="object-cover w-full h-48 mt-2" src={image_url} alt="---" />

                <div className="flex items-center justify-between px-4 py-2 bg-amber-900">
                    <h1 className="text-lg font-bold text-white">$129</h1>
                    <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Check Out</button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;