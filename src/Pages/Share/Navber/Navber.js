import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navber.css'
import logo2 from '../../../images/logo2.png'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="secondary"  variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img style={{height:'40px'}} src={logo2} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="cart"><AiOutlineShoppingCart className='h2'/></Nav.Link>
                        <Nav.Link as={Link}  to="login">Login</Nav.Link>
                        <Nav.Link eventKey={2} as={Link}   to="singup">
                            <button className='buttons px-3'>Sing up</button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navber;