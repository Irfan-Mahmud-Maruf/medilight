import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../images/404.jpg';

const PageNotFound = () => {
    return (
        <div className='d-flex justify-content-center
        align-items-center flex-column'>
            <img src={img} alt="" />
            <button className='btn btn-outline-primary mb-5'><NavLink to="/home"> Back to Home</NavLink></button>
        </div>
    );
};

export default PageNotFound;