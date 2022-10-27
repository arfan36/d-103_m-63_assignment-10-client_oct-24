import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://d-103-m-63-assignment-10-server-oct-24.vercel.app/courses-categories')
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