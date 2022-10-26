import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Modal from '../Modal/Modal';

const CheckOut = () => {
    const courses = useLoaderData();
    console.log(courses._id);
    return (
        <div>
            <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">

            </div>
            <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">

                <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
                    <p className="text-xl font-medium">Your Details</p>
                    <p className="text-gray-400">Complete your purchase by providing your details.</p>
                    <div className="">
                        <label for="email" className="mt-4 mb-2 block text-sm font-medium">Email</label>
                        <div className="relative">
                            <input type="text" id="email" name="email" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-slate-500 focus:ring-slate-500" placeholder="your.email@gmail.com" />
                            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                            </div>
                        </div>
                        <label for="card-holder" className="mt-4 mb-2 block text-sm font-medium">Your Full Name</label>
                        <div className="relative">
                            <input type="text" id="card-holder" name="card-holder" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-slate-500 focus:ring-slate-500" placeholder="Your full name here" />
                            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="relative w-7/12 flex-shrink-0">
                                <label for="card-no" className="mt-4 mb-2 block text-sm font-medium">Course Name</label>
                                <h1 className='w-full rounded-md border border-gray-200 px-2 shadow-sm outline-none focus:z-10 focus:border-slate-500 focus:ring-slate-500 text-md font-semibold" '>{courses.title}</h1>
                            </div>

                            <div>
                                <label for="card-no" className="mt-4 mb-2 block text-sm font-medium"> Category No.</label>
                                <h1 className="w-full rounded-md border border-gray-200 px-2 shadow-sm outline-none focus:z-10 focus:border-slate-500 focus:ring-slate-500 text-md font-semibold"  >
                                    {courses.category_id}
                                </h1>
                            </div>
                        </div>
                            <div>
                                <label for="card-no" className="mt-4 mb-2 block text-sm font-medium">Course Id</label>
                                <h1 className="w-full rounded-md border border-gray-200 px-2 shadow-sm outline-none focus:z-10 focus:border-slate-500 focus:ring-slate-500 text-md font-semibold"  >
                                    {courses._id}
                                </h1>
                            </div>
                    </div>

                    <Modal></Modal>
                </div>
            </div>

        </div>
    );
};

export default CheckOut;