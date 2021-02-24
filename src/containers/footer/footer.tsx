import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './footer.scss'


export default function Footer() {
    return (
        <div>
            <div className="footer">
                <Container>
                    <Row>
                        <Col sm={12} md={4}>
                            <h5><i></i>Location</h5>
                            <p>location1</p>
                            <p>location2</p>
                            
                        </Col >
                        <Col sm={12} md={4}>
                            <h5><i></i>Location</h5>
                            <p>location1</p>
                            <p>location2</p>
                            
                        </Col>
                        <Col sm={12} md={4}>
                            <h5><i></i>Location</h5>
                            <p>location1</p>
                            <p>location2</p>
                            
                        </Col>                    
                    </Row>
                </Container>
            </div>
        </div>
    )
}
