import React,{useState} from 'react'
import { Navbar, Container, Form, Button, FormControl, Nav, NavDropdown} from 'react-bootstrap'
import LogoWhite from "../assets/FetchBookWhite.svg"
import { auth,logout } from '../firebaseconfig'
import '../css/Navbar2.css'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'


function Navbar2() {
    const [loginicon, setloginicon] = useState('Login')
    const history = useHistory()
    const check = async ()=>{
        try{if(auth.currentUser){
            console.log(auth.currentUser.displayName)
            await logout()
            setloginicon('login')
            alert('u are logged out')
        }}
        catch(e){
            alert(e)
        }
    }
    const search = ()=>{
        history.push('/search')
    }
    console.log(auth+'hii')
    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
                    {/* logo */}
                    <LinkContainer to="/">
                    <Navbar.Brand className="float-start" style={{marginLeft: "30px"}}>
                    <img
                        src={LogoWhite}
                        height="50px"
                        className="align-top"
                        alt="FetchBook Logo"
                    />
                    </Navbar.Brand></LinkContainer>
                    
                
                
                    <text style={{color: "rgba(255,255,255, 0.6)", marginRight: "35px", fontSize: "medium"}}><nobr>A platform for the book lover</nobr></text>
                {/* search bar */}
                <Container>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="a book name.."
                            className="mr-2 searchbox"
                            aria-label="Search"
                        />
                        
                        <Button onClick={search} variant="outline-primary" className="btn-md searchbutton"><nobr><i className="fa fa-search"></i> Search</nobr></Button>
                    </Form>
                </Container>
                

                <Nav>
                <LinkContainer to=""><Nav.Link className="nav-links-custom">Home</Nav.Link></LinkContainer>    
                <LinkContainer to="/offers"><Nav.Link className="nav-links-custom">Offers</Nav.Link></LinkContainer>
                <LinkContainer to="/about"><Nav.Link className="nav-links-custom">About</Nav.Link></LinkContainer>
                {/* <LinkContainer to="/membersignup"><Nav.Link className="nav-links-custom">Become Seller</Nav.Link></LinkContainer> */}
                <LinkContainer to="/cart"><Nav.Link  className="nav-links-custom"><nobr><i className="fa fa-shopping-cart"></i> Cart</nobr></Nav.Link></LinkContainer>
                {auth.currentUser!=null?
                <NavDropdown title={auth.currentUser.displayName} className="nav-links-custom">
                    <NavDropdown.Item><Link to='/userdashboard'>Dashboard</Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={check}>Logout</NavDropdown.Item>
                </NavDropdown>
                :<LinkContainer to="/login" ><Nav.Link className="nav-links-custom"><nobr><i className="fa fa-user"></i>{" "}{loginicon}</nobr></Nav.Link></LinkContainer>}
                </Nav>
            </Navbar>
        </>
    )
}

export default Navbar2
