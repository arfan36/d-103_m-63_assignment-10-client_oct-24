import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const { setLoading, signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log('email, password :>> ', email, password);

        signIn(email, password).then((result) => {
            const user = result.user;
            console.log("🚀 ~ user", user);
            form.reset();
            setError('');
            if (user.emailVerified) {
                navigate(from, { replace: true });
            }
            else {
                toast.error('Your email is not verified. Please verify your email address');
            }
        }).catch((err) => {
            console.error('err', err);
            setError(err);
        }).finally(() => {
            setLoading(false);
        });
    };

    return (
        <>
            <Form onSubmit={handleLoginSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Form.Text className='text-danger ms-3'>
                    {error}
                </Form.Text>
            </Form>
        </>
    );
};

export default Login;