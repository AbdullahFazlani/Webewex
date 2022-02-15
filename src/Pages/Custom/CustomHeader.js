import React from 'react';
import styles from '../../CSS/Custom/CustomHeader.module.css'
import Fade from 'react-reveal/Fade'
import { Col, Row } from 'reactstrap';
import { GoPrimitiveDot } from 'react-icons/go';

const CustomHeader = () => {
  return <div>
<div className={styles.topsmallbg}></div>
       <div className={styles.bannerBackground} >
        
       <Fade right>

            <Row>
                <Col xs={12} sm={12} md={6}>
                    <div className={styles.bannerHeading}>
                    Capture The Market With Highly
Converting Websites
                    </div>
                </Col>
                
                <Col xs={12} sm={12} md={7}>
                   <div className={styles.bannerPoints}>
                       <ul className={styles.bannerPointsType}>
                           <li className={styles.bannerPointsSize}>
                               <GoPrimitiveDot className={styles.bannerPointsIcon}/>
                               Editable Content And Images
                            </li>
                           <li className={styles.bannerPointsSize}>
                               <GoPrimitiveDot className={styles.bannerPointsIcon}/>
                               Innovative & Catchy Designs
                            </li>
                           <li className={styles.bannerPointsSize}>
                               <GoPrimitiveDot className={styles.bannerPointsIcon}/>
                               Bug Free Merchant Integration
                            </li>
                           <li className={styles.bannerPointsSize}>
                               <GoPrimitiveDot className={styles.bannerPointsIcon}/>
                               Certified Ecommerce Develop
                            </li>
                       </ul>
                       
                   </div>
               </Col>
            </Row>            
            </Fade>
        </div>
  </div>;
};

export default CustomHeader;
