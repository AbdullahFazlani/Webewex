import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import { Col, Container, Row } from 'reactstrap';
import styles from '../../CSS/Mobile/MobileHeader.module.css'
import Fade from 'react-reveal/Fade';


export const MobileHeader = () => {
  return <div>
       <div className={styles.topsmallbg}></div>
       <div className={styles.bannerBackground} >
        
       <Fade right>

            <Row>
                <Col xs={12} sm={12} md={6}>
                    <div className={styles.bannerHeading}>
                    Delivering Stellar  Mobile App
                    Development Services
                    </div>
                    <div className={styles.bannerTitle}>
                    We help global brands design and build superior digital products, enabling seamless user experiences across all modern platforms and devices.                    </div>
                </Col>
            </Row>            
            </Fade>
        </div>
  </div>;
};
