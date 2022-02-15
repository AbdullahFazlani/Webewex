import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import { Col, Container, Row } from 'reactstrap';
import styles from '../../CSS/About/Header.module.css'
import Fade from 'react-reveal/Fade';


export const Header = () => {
  return <div>
       <div className={styles.topsmallbg}></div>
       <div className={styles.bannerBackground} >
        
       <Fade right>

            <Row>
                <Col xs={12} sm={12} md={6}>
                    <div className={styles.bannerHeading}>
                        The Name Synonymous With Excellence
                    </div>
                    <div className={styles.bannerTitle}>
                    Committed To Providing Quality Services Making Your Brand The Highlight Of Your Business Industry.
                    </div>
                    <div className={styles.bannerPoints}>
                    <ul className={styles.bannerPointsType}>
                           <li className={styles.bannerPointsSize}>
                               <GoPrimitiveDot className={styles.bannerPointsIcon}/>
                               Skilled &#38; Creative Team
                            </li>
                           <li className={styles.bannerPointsSize}>
                               <GoPrimitiveDot className={styles.bannerPointsIcon}/>
                               Unmatched Services
                            </li>
                           <li className={styles.bannerPointsSize}>
                               <GoPrimitiveDot className={styles.bannerPointsIcon}/>
                               100% Satisfaction Guarantee
                            </li>
                    </ul>
                    </div>
                </Col>
            </Row>            
            </Fade>
        </div>
  </div>;
};
