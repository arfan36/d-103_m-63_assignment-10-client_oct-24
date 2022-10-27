import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to
                <br />
                <b className='text-warning'>Web Development</b>
                <br />
                Course</h1>
            <p><Link className='btn btn-primary' to={'/courses'}>All Courses</Link></p>
        </div>
    );
};

export default Home;