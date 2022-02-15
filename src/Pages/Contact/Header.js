import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import { Col, Container, Row } from 'reactstrap';
import styles from '../../CSS/Contact/Header.module.css'
import Fade from 'react-reveal/Fade';


export const Header = () => {
  return <div>
       <div className={styles.topsmallbg}></div>
       <div className={styles.bannerBackground} >
        
       <Fade right>

            <Row>
                <Col xs={12} sm={12} md={6}>
                    <div className={styles.bannerHeading}>
                    Fostering successful
digital relationships
                    </div>
                    <div className={styles.bannerTitle}>
                    We love taking on exciting new projects for aspiring businesses and growth-oriented clients.
                     Get in touch with us today for a free strategic consultation!
                    </div>
                </Col>
            </Row>            
            </Fade>
        </div>
  </div>;
};
