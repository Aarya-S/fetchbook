import React,{useState} from 'react'
import { Navbar, Container, Form, Button, FormControl, Nav, NavDropdown} from 'react-bootstrap'
import LogoWhite from "../assets/FetchBookWhite.svg"
import { auth,logout } from '../firebaseconfig'
import '../css/Navbar2.css'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'


function Navbar2() {
    const [loginicon, setloginicon] = useState('Login')
    //if(auth.currentUser!=null){setloginicon(auth.currentUser.displayName)}
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
                    <Link to='/'><Navbar.Brand className="float-start" style={{marginLeft: "30px"}}>
                    <img
                        src={LogoWhite}
                        height="70px"
                        className="d-inline-block align-top"
                        alt="FetchBook Logo"
                    />
                    </Navbar.Brand></Link>
                    
                
                
                    <Navbar.Text style={{color: "rgba(255,255,255, 0.6)", marginRight:"50px", fontSize: "medium"}}><nobr>A platform for the book lover</nobr></Navbar.Text>
                {/* searach bar */}
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
                <Link to='/offers' className="nav-links-custom">Offers</Link>
                <Link to="/about" className="nav-links-custom">About</Link>
                <Link to="/cart" className="nav-links-custom"><nobr><i className="fa fa-shopping-cart"></i>    Cart</nobr></Link>
                {auth.currentUser!=null?
                <NavDropdown title={auth.currentUser.displayName} className="nav-links-custom">
                    <NavDropdown.Item><Link to='/userdashboard'>Dashboard</Link></NavDropdown.Item>
                    <Link><NavDropdown.Item >About Us</NavDropdown.Item></Link>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={check}>Logout</NavDropdown.Item>
                </NavDropdown>
                :<Nav.Link href="/login" className="nav-links-custom"><nobr><i className="fa fa-user"></i> {loginicon}</nobr></Nav.Link>}
                </Nav>
            </Navbar>
        </>
    )
}

export default Navbar2
