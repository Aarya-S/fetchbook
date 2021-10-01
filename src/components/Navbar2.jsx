import React,{useState} from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Container, Form, Button, FormControl, Nav, NavDropdown} from 'react-bootstrap'
import LogoWhite from "../assets/FetchBookWhite.svg"
import { auth,logout } from '../firebaseconfig'

import '../css/Navbar2.css'



function Navbar2() {
    const [loginicon, setloginicon] = useState('Login')
    const user = auth.currentUser
    if(user){setloginicon(user.displayName)}
    
    const check = ()=>{
        if(user){
            logout()
        }
    }
    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
            
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
                <NavDropdown title="Username" className="nav-links-custom">
                    <NavDropdown.Item href="/">Dashboard</NavDropdown.Item>
                    <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/">Logout</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/login" onClick={check} className="nav-links-custom"><nobr><i className="fa fa-user"></i> {loginicon}</nobr></Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}

export default Navbar2
