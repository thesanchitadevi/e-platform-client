import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='border text-center'>
            <h1 className='text-2xl font-bold text-center  text-slate-800 '>Total Course : {categories.length}</h1>
            <div className='m-4'>
                {
                    categories.map(category => <p className='py-2'
                        key={category.id}
                        category={category}
                    >
                        {/* <Link className='py-2 text-xl text-slate-600 font-bold' to={`/category/${category.id}`}>{category.name}</Link> */}
                        <div className="flex-1">
                            <ul className="pt-2 pb-4 text-sm">
                                <li className="rounded-sm p-0 m-0 ">
                                    <NavLink rel="noopener noreferrer" to={`/category/${category.id}`} className={({ isActive }) =>
                                        isActive
                                            ? 'flex justify-center items-center rounded text-xl text-slate-200 font-bold tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400 bg-slate-600 py-2'
                                            : 'flex justify-center items-center rounded text-xl text-slate-600 font-bold  tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400'}>
                                    
                                        <span>{category.name}</span>
                                    </NavLink>
                                </li>
                                
                            </ul>
                    </div>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;