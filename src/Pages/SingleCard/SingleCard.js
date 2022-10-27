import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SingleCard = () => {
    const singleCourse = useLoaderData();
    const { id, name, img, header, description } = singleCourse;
    return (
        <div>
            <div className="card mb-3">
                <div className='d-flex justify-content-between'>
                    <h5 className="card-title p-2">{header}</h5>
                    <button className='btn btn-primary m-2'>download pdf</button>
                </div>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h2>{name}</h2>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
                <Link to={`/get-premium/${id}`}><button className='btn btn-primary w-100'>Get Premium</button></Link>
            </div>
        </div>
    );
};

export default SingleCard;