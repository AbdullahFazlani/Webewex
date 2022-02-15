import React from 'react'
import { Col, Row } from 'reactstrap'
import styles from '../../../CSS/Component/header.module.css'
import Slide from 'react-reveal/Slide';
import {GoPrimitiveDot} from 'react-icons/go'
export const Header = () => {
    return (
        <div className={styles.bannerBackground} >
           <div className={styles.topsmallbg}></div>
           <Slide right>
           <Row>
               <Col xs={12} sm={12} md={7}>
                   <div>
                      <div className={styles.bannerHeading}>Let's Start Together</div> 
                   </div>
               </Col>
          
               <Col xs={12} sm={12} md={7}>
                   <div className={styles.bannerPoints}>
                       <ul className={styles.bannerPointsType}>
                           <li className={styles.bannerPointsSize}>
                               <GoPrimitiveDot className={styles.bannerPointsIcon}/>
                               Innovative Concepts Guaranteed
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
                       <button className={styles.bannerButton}>Get Start</button>
                   </div>
               </Col>
           </Row>
         </Slide>
        </div>
    )
}
