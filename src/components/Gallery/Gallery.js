import React, { useEffect, useState } from 'react';
import GalleryImage from '../GalleryImage/GalleryImage';

const Gallery = () => {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setPhotos(data))
    }, [])
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2  mx-4 gap-6">
            {
                photos.map(photo => <GalleryImage
                    photo={photo}></GalleryImage>)
            }
        </div>
    );
};

export default Gallery;