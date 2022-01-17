import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import FirstSlider from '../../images/banner/banner-1.jpg';
import SecondSlider from '../../images/banner/banner-2.jpg';
import ThirdSlider from '../../images/banner/banner-3.jpg';
import Doctors from '../Doctor/Doctors';
import HomeServices from '../HomeServices/HomeServices';



const Home = () => {
    const [image, setImage] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setImage(data))
    }, [])
    return (
        <div>
            <div>
                <Carousel>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block carouselImg"
                            src={FirstSlider}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3 className="text-primary font-bold md:text-5xl sm:text-3xl">We provide best services </h3>
                            <p className="text-primary mb-3 text-white">We can help you conquer a wide range of psychological and emotional problems.</p>
                            <NavLink to="/services" className="btn btn-outline-primary text-white">Our services</NavLink>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block img-fluid"
                            src={SecondSlider}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h3 className="text-primary font-bold md:text-5xl sm:text-3xl">Best Hospitality</h3>
                            <p className="text-primary mb-3 text-white">Every patient is Our responsibility. So we planed a flexible service.  </p>
                            <NavLink to='/contact' className="btn btn-outline-primary text-white">Our Doctors</NavLink>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block img-fluid"
                            src={ThirdSlider}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3 className="text-primary font-bold md:text-5xl sm:text-3xl">24/7 health service</h3>
                            <p className="text-primary mb-3 text-white">We are open 24 hours 7 days service in time.</p>
                            <NavLink to='/gallery' className="btn btn-outline-primary text-white">Visit Gallery</NavLink>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </div>
            <div>
                <h2 className="text-center text-5xl mx-8 my-5">Our Services</h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2  mx-4 gap-6">
                    {
                        image.map(img => <HomeServices
                            img={img}></HomeServices>)
                    }
                </div>
            </div>
            <div className='mb-5'>
                <Doctors></Doctors>
            </div>
        </div>
    );
};

export default Home;