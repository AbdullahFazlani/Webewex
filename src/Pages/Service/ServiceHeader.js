import React from 'react';
import styles from '../../CSS/Service/ServiceHeader.module.css'
import Fade from 'react-reveal/Fade'
import { Col, Row } from 'reactstrap';

const ServiceHeader = () => {
  return <div>
<div className={styles.topsmallbg}></div>
       <div className={styles.bannerBackground} >
        
       <Fade right>

            <Row>
                <Col xs={12} sm={12} md={6}>
                    <div className={styles.bannerHeading}>
                    Classic & Contemporary Aesthetics
                    </div>
                    <div className={styles.bannerTitle}>
                    Our enthusiastic and trendsetting designers make slick and refreshing web layouts that are visually appealing and retain customer interest. </div>
                </Col>
            </Row>            
            </Fade>
        </div>
  </div>;
};

export default ServiceHeader;
