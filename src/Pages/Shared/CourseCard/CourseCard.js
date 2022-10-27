import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const { id, name, img } = course;

    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                </div>
                <h2 className="card-title text-center">{name}</h2>
                <div className="card-footer">
                    <Link to={id}>
                        <button className='btn btn-outline-primary w-100'>Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;