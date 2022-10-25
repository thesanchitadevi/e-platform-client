import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../Shared/CourseCard/CourseCard';
import LeftNav from '../Shared/LeftNav/LeftNav';

const Category = () => {
    const courses = useLoaderData();
    console.log(courses.length);
    return (
        <div className='grid lg:grid-cols-3 sm:grid-rows-1 my-10'>
            <div>
                <LeftNav></LeftNav>
            </div>
            <div className='lg:col-span-2 text-center '>


                {
                    (courses.length === 0) ?
                        <div className="px-5 pt-6 pb-5 text-center border border-gray-300 rounded lg:w-2/5">
                            <div className="mb-5 font-semibold">Create an account</div>
                            <div className="flex justify-center w-full mb-3">
                                <a
                                    href="/"
                                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                >
                                    <div className="flex items-center">
                                        <div className="mr-3 font-semibold text-slate-800">
                                            Login with Google
                                        </div>
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-4 h-4"
                                        >
                                            <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                                        </svg>
                                    </div>
                                </a>
                            </div>
                            <p className="max-w-md px-5 mb-3 text-xs text-gray-600 sm:text-sm md:mb-5">
                                To get more update about our new launch courses. Connect with us.
                            </p>
                            <div className="flex items-center w-full mb-5">
                                <hr className="flex-1 border-gray-300" />
                                <div className="px-3 text-xs text-gray-500 sm:text-sm">or</div>
                                <hr className="flex-1 border-gray-300" />
                            </div>
                            <Link
                                to='/register'
                                className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold transition duration-200 bg-white border border-gray-300 rounded md:w-auto hover:bg-gray-100 focus:shadow-outline focus:outline-none"
                            >
                                Sign Up with Email
                            </Link>
                        </div> :
                        <div className='grid lg:grid-cols-2 gap-4 w-10/12 mx-auto pt-5'>
                            {

                                courses.map(course => <CourseCard
                                    key={course._id}
                                    course={course}
                                >
                                </CourseCard>)
                            }
                        </div>
                }
            </div>


        </div>
    );
};

export default Category;