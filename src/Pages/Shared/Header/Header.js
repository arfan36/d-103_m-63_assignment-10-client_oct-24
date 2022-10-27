import React, { useContext, useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUser } from "react-icons/fa";
import { MdNightlight, MdOutlineLightMode } from "react-icons/md";
import './Header.css';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [lightTheme, setLightTheme] = useState(true);

    const handleTheme = () => {
        setLightTheme(!lightTheme);
    };

    const handleLogOut = () => {
        logOut().then(() => {
        }).catch((err) => {
            console.error('err', err);
        });
    };

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand>
                    <Link to={'/'}>
                        <img
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt=""
                        />
                        <> Learn Web Development</>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <div className='d-flex align-items-center me-2'>
                            <Link to={'/courses'}>Courses</Link>
                        </div>
                        <div className='d-flex align-items-center me-2'>
                            <Link to={'/faq'}>FAQ</Link>
                        </div>
                        <div className='d-flex align-items-center me-2'>
                            <Link to={'/blog'}>Blog</Link>
                        </div>
                    </Nav>
                    <Nav>
                        <div onClick={handleTheme} >
                            {
                                lightTheme ?
                                    <Button variant="outline-secondary"><MdOutlineLightMode /> Light</Button>
                                    :
                                    <Button variant="dark"> <MdNightlight /> dark</Button>
                            }
                        </div>
                        <div className='d-flex align-items-center mx-2'>
                            {
                                user?.uid ?
                                    <>
                                        <span>{user.displayName}</span>
                                        <Button variant='light' onClick={handleLogOut} className="ms-1">Log Out</Button>
                                    </>
                                    :
                                    <>
                                        <Link to={'/login'} className="me-2">Login</Link>
                                        <Link to={'/register'} className="me-2">Register</Link>
                                    </>
                            }
                        </div>
                        <div className='d-flex align-items-center'>
                            <Link to={'/profile'}>
                                {
                                    user?.photoURL ?
                                        <Image
                                            style={{ height: '30px' }}
                                            roundedCircle
                                            src={user?.photoURL}
                                        ></Image>
                                        :
                                        <FaUser></FaUser>
                                }
                            </Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;