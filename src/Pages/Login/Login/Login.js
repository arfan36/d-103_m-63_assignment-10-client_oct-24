import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const { setLoading, signIn, ProviderLogin, verifyEmail } = useContext(AuthContext);
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
                toast.success('Successfully logged in.');
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

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        ProviderLogin(googleProvider).then((result) => {
            const user = result.user;
            console.log("🚀 ~ user", user);
            if (user?.emailVerified) {
                navigate(from, { replace: true });
                toast.success('Successfully logged in.');
            }
            else {
                toast.error('Your email is not verified. Please verify your email address');
            }
        }).catch((err) => {
            console.error('err', err);
            setError(err);
        });
    };

    const gitHubProvider = new GithubAuthProvider();
    const handleGithubSignIn = () => {
        ProviderLogin(gitHubProvider).then((result) => {
            const user = result.user;
            console.log("🚀 ~ user", user);
            if (user?.emailVerified) {
                navigate(from, { replace: true });
                toast.success('Successfully logged in.');
            }
            else {
                handleEmailVerification();
                toast.success('Please verify your email address. If needed check spam folder');
            }
        }).catch((err) => {
            console.error('err', err);
            setError(err);
        });
    };

    const handleEmailVerification = () => {
        verifyEmail().then(() => {
        }).catch((err) => {
            console.error('err', err);
            setError(err);
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
                    {error.message}
                </Form.Text>
                <p>New to here <Link to={'/register'}>Register</Link></p>
            </Form>
            <ButtonGroup vertical className='mt-2'>
                <Button onClick={handleGoogleSignIn} variant='outline-primary' className='mb-2'><FaGoogle /> Login with Google</Button>
                <Button onClick={handleGithubSignIn} variant='outline-primary'><FaGithub /> Login with Github</Button>
            </ButtonGroup>
        </>
    );
};

export default Login;