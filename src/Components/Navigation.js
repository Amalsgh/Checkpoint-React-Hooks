import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './Movie.css';



const Navigation = () => {

return (
    <div>
    <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">
            <img
            alt="logo"
            src="https://cdn-icons-png.flaticon.com/512/3820/3820338.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            />{' '}
            Movie App
        </Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href='/AboutUs'>About Us</Nav.Link>
            <Nav.Link href ="/Moremovies"> More Movies </Nav.Link>
        </Nav>
        </Container>
    </Navbar> 

    </div>
)
}

export default Navigation