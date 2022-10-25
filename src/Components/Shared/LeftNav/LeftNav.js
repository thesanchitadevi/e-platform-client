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
        <div className='text-center'>
            <h1 className='mb-2 text-xl font-semibold'>All Category : {categories.length}</h1>
            {
                categories.map(category => <p
                    key={category.id}
                >               
                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftNav;