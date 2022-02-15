import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import { Col, Container, Row } from 'reactstrap';
import styles from '../../CSS/Ecommerce/EcommerceHeader.module.css'
import Fade from 'react-reveal/Fade';


export const EcommerceHeader = () => {
  return <div>
       <div className={styles.topsmallbg}></div>
       <div className={styles.bannerBackground} >
        
       <Fade right>

            <Row>
                <Col xs={12} sm={12} md={6}>
                    <div className={styles.bannerHeading}>
                    Our Compendious Process
                    </div>
                    <div className={styles.bannerTitle}>
                    We Believe In Delivering Succinct Results For Every Project
                    </div>
                </Col>
            </Row>            
            </Fade>
        </div>
  </div>;
};
