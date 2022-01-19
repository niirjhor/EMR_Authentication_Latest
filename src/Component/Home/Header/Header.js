import React from 'react';
import { Container, Button, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"> <span className='text-warning'>EMR</span> DApp</Navbar.Brand>

                    <NavLink
                        to="/home"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                    >
                        Home
                    </NavLink>
                   

                    {user.email ?
                    <>
                    <NavLink
                        to="/register"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                    >
                        Verfication
                    </NavLink>
                    <Button className='ms-5' onClick={logOut} variant="light">Logout</Button>
                    <Navbar.Text className='ms-5'>
                        Signed in as: <a href="#login">{user?.displayName}</a>
                    </Navbar.Text>
                    </> :
                   
                    <>
                    
                     
                        <NavLink
                            to="/login"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                        >
                            Register/Login
                        </NavLink>
                    </>
                   
                    }
                
                    
                </Container>

            </Navbar>
        </div >
    );
};

export default Header;