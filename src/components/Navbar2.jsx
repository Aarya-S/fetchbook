import React,{useEffect, useState} from 'react'
import { Navbar, Container, Form, Button, FormControl, Nav, NavDropdown} from 'react-bootstrap'
import LogoWhite from "../assets/FetchBookWhite.svg"
import { auth,logout } from '../firebaseconfig'
import '../css/Navbar2.css'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import sellerAction from '../actions/sellerAction'
import { SELLER_DETAILS_REQUEST } from '../constant/sellerconstant'


function Navbar2() {
    const [loginicon, setloginicon] = useState('Login')
    const [search, setSearch] = useState('')
    const [checkSeller, setCheckSeller] = useState(false)
    const history = useHistory()
    const check = async ()=>{
        try{if(auth.currentUser){
            await logout()
            setloginicon('Login')
            setCheckSeller(false)
            history.push('/')
        }}
        catch(e){
            alert(e)
        }
    }
    const searchHandle = ()=>{
        history.push(`/search/${search}`)
    }
    useEffect(() => {
     if(auth.currentUser){
         checkSellerfunc()
     }  
    })
    
    const checkSellerfunc = ()=>{
        if(checkSeller === false){
        sellerAction(SELLER_DETAILS_REQUEST,auth.currentUser.email).then((result)=>{
            if(result === null){
                setCheckSeller(false)
            }else{
                setCheckSeller(result)
            }
        }).catch((e)=>{
            console.log(e)
            setCheckSeller(false)
        })}
    }
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
                            onChange={(e)=>{setSearch(e.target.value)}}
                        />
                        {search===''?'':
                        <Button onClick={searchHandle} variant="outline-light" className="btn-md searchbutton"><nobr><i className="fa fa-search"></i> Search</nobr></Button>}
                    </Form>
                </Container>
                

                <Nav>
                    <LinkContainer to="/pricing"><Nav.Link className="nav-links-custom">Pricing</Nav.Link></LinkContainer>
                    <LinkContainer to="/offers"><Nav.Link className="nav-links-custom">Offers</Nav.Link></LinkContainer>
                    <LinkContainer to="/about"><Nav.Link className="nav-links-custom">About</Nav.Link></LinkContainer>
                    <LinkContainer to="/cart"><Nav.Link  className="nav-links-custom"><nobr><i className="fa fa-shopping-cart"></i> Cart</nobr></Nav.Link></LinkContainer>
                {auth.currentUser?
                <NavDropdown title={auth.currentUser.displayName || auth.currentUser.email} className="nav-links-custom">
                    
                    {checkSeller?
                    <NavDropdown.Item><Link to={{pathname : `/sellerui`,state :checkSeller}} >Dashboard</Link></NavDropdown.Item>
                    // <NavDropdown.Item><Link to={{pathname : `/sellerui`,state : checkSeller()}}>Dashboard</Link></NavDropdown.Item>
                    :
                    <NavDropdown.Item><Link to='/userdashboard'>Dashboard</Link></NavDropdown.Item>}
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={check}>Logout</NavDropdown.Item>
                </NavDropdown>
                :<LinkContainer to="/Login" ><Nav.Link className="nav-links-custom"><nobr><i className="fa fa-user"></i>{" "}{loginicon}</nobr></Nav.Link></LinkContainer>}
                </Nav>
            </Navbar>
        </>
    )
}

export default Navbar2
