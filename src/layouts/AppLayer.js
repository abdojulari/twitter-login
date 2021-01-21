import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import LeftSide from '../components/LeftSide'
import UserAccount from '../components/UserAccount'
import Footer from '../components/Footer'
import styles from './appLayout.module.scss'
import ControlButton from '../components/Button'

export default function AppLayer () {
    return (
        
        <Container fluid className="px-0">
            <Row className={styles.content}>
                <Col xs={12} sm={12} md={6} className="order-1 order-md-2">
                     <UserAccount />
                </Col>
                <Col xs={12} sm={12} md={6} className="order-2 order-md-1 ">
                   <LeftSide />
                   <div className="w-100 d-block d-md-none d-sm mb-5 mt-5 d-inline-flex align-items-center">
                      <ControlButton style={{width: '180px'}} />
                   </div>
                </Col>
            </Row>
            <div className="">
              <Col xs={12} sm={12} md={12} className="">
                <Footer />
              </Col>
                
            </div>
        </Container>
  
    )
}