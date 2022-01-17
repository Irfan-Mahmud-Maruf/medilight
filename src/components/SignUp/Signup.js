import React from 'react';
import { Form } from 'react-bootstrap';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';

const Signup = () => {
    const {  googleSingIn, singUpWithEmail, error, getEmail, getPassword } = useAuth();
    return (
        <div>
            <h2 className="text-center">Sign up</h2>
            <p className="text-danger text-center">{error}</p>
            <Form onSubmit={singUpWithEmail} className="w-25 mx-auto my-6">

                <Form.Group onBlur={getEmail} className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Your Email" />
                </Form.Group>
                <Form.Group onBlur={getPassword} className="mb-3" controlId="exampleForm.ControlInput">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password" />
                </Form.Group>
                <button className="bg-green-400 py-2 px-5 mb-3 rounded-md text-white text-2xl">Register</button><br />
                <Link to="/login">Already have a account? Log in</Link>
            </Form>

            <div className="mx-auto w-25">
                <div> -----------You can Register With----------- </div>

                <span onClick={googleSingIn} className="text-3xl bg-gray-400 inline-block p-2 rounded-lg mt-3 ms-5 cursor-pointer">
                    <FcGoogle />
                </span>
                
            </div>
        </div>
    );
};

export default Signup;