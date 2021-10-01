import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Container, Form, Button, FormControl, Nav} from 'react-bootstrap'
import LogoWhite from "../assets/FetchBookWhite.svg"

import '../css/Navbar2.css'



function Navbar2() {
    return (
        <header>
            <Navbar bg="dark" expand="lg" variant="dark">
            
                    <Navbar.Brand className="float-start" href="/" style={{marginLeft: "30px"}}>
                    <img
                        src={LogoWhite}
                        height="70px"
                        className="d-inline-block align-top"
                        alt="FetchBook Logo"
                    />
                    </Navbar.Brand>
                    
                
                
                    <Navbar.Text style={{color: "rgba(255,255,255, 0.6)", marginRight:"50px", fontSize: "large"}}><nobr>A platform for the book lover</nobr></Navbar.Text>
                
                <Container>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="a book name.."
                            className="mr-2 searchbox"
                            aria-label="Search"
                        />
                        
                        <Button variant="outline-primary" className="btn-lg searchbutton"><nobr><i className="fa fa-search"></i> Search</nobr></Button>
                    </Form>
                </Container>
                <Nav>
                <Nav.Link href="/offers" className="nav-links-custom">Offers</Nav.Link>
                <Nav.Link href="/about" className="nav-links-custom">About</Nav.Link>
                <Nav.Link href="/cart" className="nav-links-custom"><nobr><i className="fa fa-shopping-cart"></i>    Cart</nobr></Nav.Link>
                <Nav.Link href="/login" className="nav-links-custom"><nobr><i className="fa fa-user"></i>    Login</nobr></Nav.Link>
                </Nav>
            </Navbar>
        </header>
    )
}

export default Navbar2
