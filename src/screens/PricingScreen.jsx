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
                <text className="head-text">JOIN US TODAY</text><br />
                <text className="sub-text">and grow your bookselling business</text><br /><br />
            
                <text>With our reasonable membership plans for every type of business, we are confident that we will boost profits, build an online presence, and improve your brand!</text>
            </center>
            <Container fluid>
                <Row>
                    <Col className="card-col">
                        <Card border="dark" style={{height: "auto", margin: "40px 12px 20px 12px", padding: "25px 18px"}}>
                            <Card.Title align="center" className="plan-name">Plan Name</Card.Title>
                            <Card.Subtitle align="left" className="plan-desc">A brief description about the plan spanning atleast two lines aaaaaaaaaaa</Card.Subtitle>
                            <br />
                            <hr width="85%" style={{ margin:"0px 7% 25px 7%" }} />
                            <Card.Text className="perks">
                                <h5>Perks of the plan</h5>
                                <ul>
                                    <li>Perk 1 aaaaaaaa</li>
                                    <li>Perk 1 aaaaaaaaaaa</li>
                                    <li>Perk 1 aaaaaaaaaa</li>
                                    <li>Perk 1 aaaaaaaaaaaaa</li>
                                </ul>
                            </Card.Text>
                            <br />
                            <Card.Text align="center">
                                <h3><i className="fa fa-inr"></i><span style={{marginLeft: "8px"}}>Price /-</span></h3>
                            </Card.Text>
                        </Card>
                    </Col>

                    <Col className="card-col">
                        <Card border="dark" style={{height: "auto", margin: "40px 12px 20px 12px", padding: "25px 18px"}}>
                            <Card.Title align="center" className="plan-name">Plan Name</Card.Title>
                            <Card.Subtitle align="left" className="plan-desc">A brief description about the plan spanning atleast two lines aaaaaaaaaaa</Card.Subtitle>
                            <br />
                            <hr width="85%" style={{ margin:"0px 7% 25px 7%" }} />
                            <Card.Text className="perks">
                                <h5>Perks of the plan</h5>
                                <ul>
                                    <li>Perk 1 aaaaaaaa</li>
                                    <li>Perk 1 aaaaaaaaaaa</li>
                                    <li>Perk 1 aaaaaaaaaa</li>
                                    <li>Perk 1 aaaaaaaaaaaaa</li>
                                </ul>
                            </Card.Text>
                            <br />
                            <Card.Text align="center">
                                <h3><i className="fa fa-inr"></i><span style={{marginLeft: "8px"}}>Price /-</span></h3>
                            </Card.Text>
                        </Card>
                    </Col>

                    <Col className="card-col">
                        <Card border="dark" style={{height: "auto", margin: "40px 12px 20px 12px", padding: "25px 18px"}}>
                            <Card.Title align="center" className="plan-name">Plan Name</Card.Title>
                            <Card.Subtitle align="left" className="plan-desc">A brief description about the plan spanning atleast two lines aaaaaaaaaaa</Card.Subtitle>
                            <br />
                            <hr width="85%" style={{ margin:"0px 7% 25px 7%" }} />
                            <Card.Text className="perks">
                                <h5>Perks of the plan</h5>
                                <ul>
                                    <li>Perk 1 aaaaaaaa</li>
                                    <li>Perk 1 aaaaaaaaaaa</li>
                                    <li>Perk 1 aaaaaaaaaa</li>
                                    <li>Perk 1 aaaaaaaaaaaaa</li>
                                </ul>
                            </Card.Text>
                            <br />
                            <Card.Text align="center">
                                <h3><i className="fa fa-inr"></i><span style={{marginLeft: "8px"}}>Price /-</span></h3>
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
