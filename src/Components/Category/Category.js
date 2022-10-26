import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../Shared/CourseCard/CourseCard';
import LeftNav from '../Shared/LeftNav/LeftNav';

const Category = () => {
    const courses = useLoaderData();
    // console.log(courses.length);
    
    return (
        <div className='grid lg:grid-cols-3 sm:grid-rows-1 my-10'>
            <div>
                <LeftNav></LeftNav>
            </div>
            <div className='lg:col-span-2 text-center '>

                <div className='grid lg:grid-cols-2 gap-4 w-10/12 mx-auto pt-5'>
                    {

                        courses.map(course => <CourseCard
                            key={course._id}
                            course={course}
                        >
                        </CourseCard>)
                    }
                </div>

            </div>


        </div>
    );
};

export default Category;