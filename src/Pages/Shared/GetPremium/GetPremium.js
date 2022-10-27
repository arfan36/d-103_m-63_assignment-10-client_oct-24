import React from 'react';
import { useLoaderData } from 'react-router-dom';

const GetPremium = () => {
    const courses = useLoaderData();
    const { name, img, header, description } = courses;

    return (
        <div>
            <h2>Thank you for getting our <span className='text-warning'>premium Access</span></h2>
            <div className="card mb-3">
                <div className='d-flex justify-content-between'>
                    <h5 className="card-title p-2">{header}</h5>
                </div>
                <img src={img} className="card-img-top w-25" alt="..." />
                <div className="card-body">
                    <h2>{name}</h2>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default GetPremium;