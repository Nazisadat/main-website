import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Banner.scss'

export default function Banner() {
    return (
           <div className="banner">
                    <Container>
                        <Row>
                    <Col  sm={12} md={6} >
                        <div className="over-img">
                            <h3 className="banner-title"> Welcome to the digital market website, we are glad you <b>trusted</b> us.</h3>
                            <div className="banner-subtitle">Lorem ipsum dolor sit amet consectetur, officia! Deleniti voluptate sed nesciunt reiciendis.</div>
                        </div>
                        
                        <button className="button-header">LOGIN NOW</button>
                    </Col>
                    </Row>
                    </Container>
            </div>
    )
}
