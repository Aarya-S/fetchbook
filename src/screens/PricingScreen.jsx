import React from 'react'
import '../css/Pricing.css'

// Components Import
import Navbar2 from '../components/Navbar2'
import { Card, Container, Row, Col } from 'react-bootstrap'
import Footer from '../components/Footer'


const PricingScreen = () => {
    return (
        <>
            <Navbar2 />
            <br />
            <center>
                <text className="head-text">JOIN US TODAY</text>
                <text className="sub-text">and grow your bookselling business</text><br /><br />
            
                <text style={{fontSize: "large" }}>With our reasonable membership plans for every type of business, we are confident that we will boost profits, build an online presence, and improve your brand!</text>
            </center>
            <Container fluid>
                <Row>
                    <Col className="card-col">
                        <Card border="dark" style={{height: "450px", margin: "40px 12px 20px 12px", padding: "25px 18px 10px 18px"}}>
                            <Card.Title align="center" className="plan-name">BRONZE PLAN 🥉</Card.Title>

                            <br />
                            <hr width="85%" style={{ margin:"0px 7% 25px 7%" }} />
                            <Card.Text className="perks">
                                <h5>Perks of the plan</h5>
                                <ul>
                                    <li style={{color: "black"}}> <b>1 month</b> membership</li>
                                    <li style={{color: "black"}}> Get <b>5 days free</b></li>
                                </ul>
                            </Card.Text>
                            <br />
                            <Card.Text align="center" style={{marginTop: "101px"}}>
                                <h3><i className="fa fa-inr"></i><span style={{marginLeft: "8px"}}>100 /-</span></h3>
                            </Card.Text>
                        </Card>
                    </Col>

                    <Col className="card-col">
                        <Card border="dark" style={{height: "450px", margin: "40px 12px 20px 12px", padding: "25px 18px 10px 18px"}}>
                            <Card.Title align="center" className="plan-name">SILVER PLAN 🥈</Card.Title>
                            <br />
                            <hr width="85%" style={{ margin:"0px 7% 25px 7%" }} />
                            <Card.Text className="perks">
                                <h5>Perks of the plan</h5>
                                <ul>
                                    <li style={{color: "black"}}> <b>3 months</b> membership</li>
                                    <li style={{color: "black"}}> Get <b>15 days free</b></li>
                                </ul>
                            </Card.Text>
                            <br />
                            <Card.Text align="center" style={{marginTop: "100px"}}>
                                <h3><i className="fa fa-inr"></i><span style={{marginLeft: "8px"}}>270 /-</span></h3>
                            </Card.Text>
                        </Card>
                    </Col>

                    <Col className="card-col">
                        <Card border="dark" style={{height: "450px", margin: "40px 12px 20px 12px", padding: "25px 18px 10px 18px"}}>
                            <Card.Title align="center" className="plan-name">GOLD PLAN 🥇</Card.Title>
                            <br />
                            <hr width="85%" style={{ margin:"0px 7% 25px 7%" }} />
                            <Card.Text className="perks">
                                <h5>Perks of the plan</h5>
                                <ul>
                                    <li style={{color: "black"}}> <b>6 months</b> membership</li>
                                    <li style={{color: "black"}}> Get <b>30 days free</b></li>
                                    <li> <b>Sales & Advertising Priority</b></li>
                                    <li> <b>Priority Problem Solving</b></li>
                                </ul>
                            </Card.Text>
                            <br />
                            <Card.Text align="center" style={{marginTop: "34px"}}>
                                <h3><i className="fa fa-inr"></i><span style={{marginLeft: "8px"}}>550 /-</span></h3>
                            </Card.Text>
                        </Card>
                    </Col>

                    <Col className="card-col">
                        <Card border="dark" style={{height: "450px", margin: "40px 12px 20px 12px", padding: "25px 18px 10px 18px"}}>
                            <Card.Title align="center" className="plan-name">PLATINUM PLAN 💎</Card.Title>
                            <br />
                            <hr width="85%" style={{ margin:"0px 7% 25px 7%" }} />
                            <Card.Text className="perks">
                                <h5>Perks of the plan</h5>
                                <ul>
                                    <li style={{color: "black"}}> <b>1 year</b> membership</li>
                                    <li style={{color: "black"}}> Get <b>60 days free</b></li>
                                    <li> <b>Sales/Advertising Priority</b></li>
                                    <li> <b>Priority Problem Solving</b></li>
                                    <li> <b>Access to future events/conferences</b></li>
                                </ul>
                            </Card.Text>
                            <br />
                            <Card.Text align="center" style={{marginTop: "0px"}}>
                                <h3><i className="fa fa-inr"></i><span style={{marginLeft: "8px"}}>1000 /-</span></h3>
                            </Card.Text>
                        </Card>
                    </Col>

                </Row>
                <Row>
                    <Col style={{ margin: "20px 4% 10px 4%" }}>
                        These plans and pricing are subject to change with current market and prices. We also give out discounts in special cases where we see potential in the market. To get sponsored, or to share your success stories with us, write to us at <b>fetchbook@gmail.com</b>
                    </Col>
                </Row>
            </Container>
            <br /><br />
            <Footer />
        </>
    )
}

export default PricingScreen
