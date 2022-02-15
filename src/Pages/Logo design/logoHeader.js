import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import { Col, Container, Row } from 'reactstrap';
import styles from '../../CSS/Logo/LogoHeader.module.css'
import Fade from 'react-reveal/Fade';


export const LogoHeader = () => {
  return <div>
       <div className={styles.topsmallbg}></div>
       <div className={styles.bannerBackground} >
        
       <Fade right>

            <Row>
                <Col xs={12} sm={12} md={6}>
                    <div className={styles.bannerHeading}>
                        Get Logo Design
                    </div>
                    <div className={styles.bannerPoints}>
                    <ul className={styles.bannerPointsType}>
                           <li className={styles.bannerPointsSize}>
                               <GoPrimitiveDot className={styles.bannerPointsIcon}/>
                               Inoovative Concepts Guaranteed
                            </li>
                           <li className={styles.bannerPointsSize}>
                               <GoPrimitiveDot className={styles.bannerPointsIcon}/>
                               24/7 Chat Support
                            </li>
                           <li className={styles.bannerPointsSize}>
                               <GoPrimitiveDot className={styles.bannerPointsIcon}/>
                               100% Satisfaction Guarantee
                            </li>
                           <li className={styles.bannerPointsSize}>
                               <GoPrimitiveDot className={styles.bannerPointsIcon}/>
                               Fastest Turnaround Time
                            </li>
                    </ul>
                    </div>
                </Col>
            </Row>            
            </Fade>
        </div>
  </div>;
};
