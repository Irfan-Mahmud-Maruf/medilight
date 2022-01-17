import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setPhotos(data))
    }, [])
    return (

        <div className='mb-5'>
            <h3 className='fs-1 fw-bold text-center my-5'>Services</h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2  mx-4 gap-6">

                {
                    photos.map(photo => <Service
                        photo={photo}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;