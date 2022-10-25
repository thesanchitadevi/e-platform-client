import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
            <div className='m-5'>
                {
                    categories.map(category => <p className='py-2'
                        key={category.id}
                        category={category}
                    >
                        <Link className='py-2 text-xl text-slate-600 font-bold' to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;