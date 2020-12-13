import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav"

const Header = (props) => {

    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/signup">Signup</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
        </Navbar>
    )

}

export default Header