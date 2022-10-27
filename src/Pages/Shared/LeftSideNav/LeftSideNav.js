import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    return (
        <div>
            <h2>All Courses</h2>
            <>
                {
                    categories.map(category => <p
                        key={category.id}
                    >
                        <Link
                            to={`/single-course/${category.id}`}
                        >{category.name}</Link>
                    </p>)
                }
            </>
        </div>
    );
};

export default LeftSideNav;