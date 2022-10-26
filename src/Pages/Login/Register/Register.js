import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log('name, photoURL, email, password :>> ', name, photoURL, email, password);

        createUser(email, password).then((result) => {
            const user = result.user;
            console.log("🚀 ~ user", user);
            setError('');
            form.reset();
            handleUpdateUserProfile(name, photoURL);
            handleEmailVerification();
            toast.success('Please verify your email address. If needed check spam folder');
        }).catch((err) => {
            console.error('err', err);
            setError(err.message);
        });
    };

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        };
        updateUserProfile(profile).then(() => {
        }).catch((err) => {
            console.error('err', err);
        });
    };

    const handleEmailVerification = () => {
        verifyEmail().then(() => {
        }).catch((err) => {
            console.error('err', err);
        });
    };

    const handleAccepted = (event) => {
        setAccepted(event.target.checked);
    };

    return (
        <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3">
                <Form.Label>Your Full Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="your full name" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name='photoURL' type="text" placeholder="photoURL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Create Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox"
                    onClick={handleAccepted}
                    label={<>Accept <Link to={'/terms'}>Terms And Conditions</Link></>}
                />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>
            <Form.Text className="text-danger ms-3">
                {error}
            </Form.Text>
        </Form>
    );
};

export default Register;