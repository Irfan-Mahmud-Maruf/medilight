import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, singOut } = useAuth();
    const { displayName, email } = user;

    return (

        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="#"><img className="w-50" src={logo} alt="" /></Navbar.Brand>
                {/* <Navbar.Brand className="flex items-center"><img className="w-50 me-3" src={logo} alt="" /></Navbar.Brand> */}
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className='ml-auto'
                    navbarScroll>
                        
                        <NavLink to="/home"><span className='mr-4 '>Home</span></NavLink>
                        <NavLink to="/about"><span  className='mr-4 '>About Us</span></NavLink>
                        <NavLink to="/services"><span className='mr-4 '>Services</span></NavLink>
                        <NavLink to="/gallery"><span className='mr-4 '>Gallery</span></NavLink>
                        <NavLink to="/contact"><span  className='mr-4 '>Contact</span></NavLink>
                        {!email ? <> <NavLink to="/login"><span className='mr-4 '>Log In</span></NavLink>
                            <NavLink to="/signup"><span className='mr-4 '>Sign Up</span></NavLink></> :
                            <>  <p className="pt-2  className='mr-4 '">{displayName}</p>
                                <button onClick={singOut} className="btn btn-primary">Sing out</button>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;