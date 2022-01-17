import React from 'react';
import { Form } from 'react-bootstrap';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { googleSingIn, singInWithEmail, getEmail, getPassword, error } = useAuth();


    return (
        <div>
            <h3 className="text-center mr-9 pt-2">Please log in first</h3>
            <p className="text-danger text-center">{error}</p>
            <Form onSubmit={singInWithEmail} className="w-25 mx-auto my-6">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInpu">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        onBlur={getEmail} type="email" placeholder="Enter Your Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ContrlInput1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        onBlur={getPassword} type="password" placeholder="Enter Your Password" />
                </Form.Group>
                <button className="bg-green-400 py-2 px-5 mb-3 rounded-md text-white text-2xl">Log in</button><br />
                <Link to="/singup">Don't have a account?Sing up</Link>
            </Form>
            <div className="mx-auto w-25">
                <div>----------You can Sing in With-----------</div>

                <span onClick={googleSingIn} className="text-3xl bg-gray-400 inline-block p-2 rounded-lg mt-3 ms-5 cursor-pointer">
                    <FcGoogle />
                </span>
            </div>

        </div>
    );
};

export default Login;