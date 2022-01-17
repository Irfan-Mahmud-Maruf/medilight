
import React from 'react';

const GalleryImage = (props) => {
    const { img } = props.photo;
    return (
        <div className='mt-5'>
            <img src={img} alt="" />
        </div>
    );
};

export default GalleryImage;