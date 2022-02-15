import React from 'react'
import background from '../../../Images/ServiceBg.png'
import styles from '../../../CSS/Homepage/Service.module.css'
import { Col, Container, Row } from 'reactstrap'
import custom1 from '../../../Images/custom1.png'

import custom2 from '../../../Images/custom2.png'
import custom3 from '../../../Images/custom3.png'
import custom4 from '../../../Images/custom4.png'
import Bounce from 'react-reveal/Bounce'

export const Services = () => {
    return (
        <div className={styles.ServiceBackground}>
            <div className={styles.ServiceHeading}>
                Our <span className={styles.ServiceHeadingColor}> Services </span>
            </div>
           
                <Row className={styles.ServiceRow}>
                
                    <Col sm={12} md={3} className={styles.ServiceCol}>
                    <Bounce bottom>
                   <ServicesTile1/>
                    </Bounce>
                    </Col>
                    
               
                    <Col sm={12}  md={3} className={styles.ServiceCol}>
                    <Bounce bottom>
                    <ServicesTile2/>
                     </Bounce>
                    </Col>
                    
                
                    <Col sm={12} md={3} className={styles.ServiceCol}>
                    <Bounce bottom>
                        <ServicesTile3/>
                    </Bounce>
                    </Col>
                    
               
                    <Col sm={12} md={3} className={styles.ServiceCol}>
                    <Bounce bottom>  
                        <ServicesTile4/>
                    </Bounce>
                    </Col>
                    
                </Row>
           
        </div>
    )
}


export const ServicesTile1 = () => {
    return (
        <div>
           <div className={styles.ServiceNum}>
               01
            </div>
            <div className={styles.ServiceTrapizoid1}>
            </div>
            <div className={styles.OuterContainer1}>
                <div className={styles.InnerContainer1}>
                  
                    <div className={styles.ServiceTileHeader1}>
                     CUSTOM DEVELOPMENT
                    </div>
                    
                    <div className={styles.ServiceTileContent} >
                        At Webewox, our team of social media marketing experts remain active 24/7
                      
                    </div>
                    <div className={styles.round}>
                        <img src={custom1} className={styles.ServiceTileImage1}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const ServicesTile2 = () => {
    return (
        <div>
           <div className={styles.ServiceNum}>
               02
            </div>
            <div className={styles.ServiceTrapizoid2}>

            </div>
            <div className={styles.OuterContainer2}>
                <div className={styles.InnerContainer2}>
                    
                    <div className={styles.ServiceTileHeader2}>
                       <div >E-COMMERCE</div>
                    </div>
                    <div className={styles.ServiceTileContent}>
                        At Webewox, our team of social media marketing experts remain active 24/7
                    </div>
                    <div className={styles.round1}>
                        <img src={custom2} className={styles.ServiceTileImage2}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const ServicesTile3 = () => {
    return (
        <div>
           <div className={styles.ServiceNum}>
               03
            </div>
            <div className={styles.ServiceTrapizoid3}>

            </div>
            <div className={styles.OuterContainer3}>
                <div className={styles.InnerContainer3}>
                    
                    <div className={styles.ServiceTileHeader3}>
                       LOGO DESIGNING
                    </div>
                    <div className={styles.ServiceTileContent}>
                        At Webewox, our team of social media marketing experts remain active 24/7
                    </div>
                    <div className={styles.round2}>
                        <img src={custom3} className={styles.ServiceTileImage3}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const ServicesTile4 = () => {
    return (
        <div>
           <div className={styles.ServiceNum}>
               04
            </div>
            <div className={styles.ServiceTrapizoid4}>

            </div>
            <div className={styles.OuterContainer4}>
                <div className={styles.InnerContainer4}>
                    
                    <div className={styles.ServiceTileHeader4}>
                       MOBILE APP
                    </div>
                    <div className={styles.ServiceTileContent}>
                        At Webewox, our team of social media marketing experts remain active 24/7
                    </div>
                    <div className={styles.round3}>
                        <img src={custom4} className={styles.ServiceTileImage4}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
