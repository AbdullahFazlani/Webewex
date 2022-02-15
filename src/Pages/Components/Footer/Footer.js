import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import styles from '../../../CSS/Component/Footer.module.css'
import logo1 from '../../../Images/masterCard.png'
import logo2 from '../../../Images/visaCard.png'
import logo3 from '../../../Images/americanExpress.png'
import logo4 from '../../../Images/discoverCard.png'
import {BiPhoneCall} from 'react-icons/bi'
import {BsEnvelope} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'
import { FiPhoneCall } from 'react-icons/fi'
import Zoom from 'react-reveal/Zoom'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <div className={styles.footerBg}>
            <Zoom>
            <Row className={styles.row1}>
                <Col xs={12} sm={12} md={4}>
                   <div className={styles.heading}>
                       Contact Us
                   </div>
                   <div className={styles.footerPadding}>
                  <FiPhoneCall/> +1-209-921-6581
                   </div>
                   <div className={styles.footerPadding}>
                   <BsEnvelope/> info@webewox.com.pk
                   </div>
                   <div className={styles.footerPadding}>
                <GoLocation/> 340 S LEMON AVE #8097 WALNUT, CA 91789
                   </div>

                </Col>
                <Col xs={12} sm={12} md={3}>
                <div className={styles.heading}>
                      Services
                   </div>
                   <div className={styles.footerPadding}>
               <Link to="/custom" className={styles.hideLink}>   Custom Development </Link>
                   </div >
                   <div className={styles.footerPadding}>
                   <Link to="/ecommerce" className={styles.hideLink}>E-Commerce</Link>
                  
                   </div>
                   <div className={styles.footerPadding}>
                   <Link to="/logo" className={styles.hideLink}>Logo Designing</Link>
                  
                   </div>
                   <div className={styles.footerPadding}>
                   <Link to="/mobile" className={styles.hideLink}> Mobile App</Link>
                
                   </div>
                </Col>
                <Col xs={12} sm={12} md={2}>
                <div className={styles.heading}>
                      More Links
                   </div>
                   <div className={styles.footerPadding}>
                   <Link to="/" className={styles.hideLink}>HomePage</Link>
                  
                   </div>
                   <div className={styles.footerPadding}>
                   <Link to="/about" className={styles.hideLink}>About Us</Link>
                  
                   </div>
                   <div className={styles.footerPadding}>
                   <Link to="/services" className={styles.hideLink}>Services</Link>
                  
                   </div>
                    {/* <div className={styles.footerPadding}>
                    <Link to="/blog" className={styles.hideLink}>Blog</Link>
                        
                    </div> */}
                   <div className={styles.footerPadding}>
                   <Link to="/contact" className={styles.hideLink}>Contact Us</Link>
                    
                   </div>
                </Col>
                <Col xs={12} sm={12} md={3} >
               <div className={styles.lastCol}>
                <div className={styles.heading}>
                      Quick Links
                   </div>
                   <div className={styles.footerPadding}>
                   <Link to="/signin" className={styles.hideLink}>My Account</Link>
                
                   </div>
                   <div className={styles.footerPadding}>
                   <Link to="/signup" className={styles.hideLink}>Signup</Link>
                
                   </div>
                </div>
                </Col>
            </Row>
            <div className={styles.footerEnd}>
                Copyright @ 2022 Webewox | All Rights Reserved. Terms and Conditions | Privacy Policy | Refund Policy
                <span className={styles.footerLogo}>
                   <a href="https://www.mastercard.us/en-us.html"> <img src={logo1} width={80} /></a>
                   <a href="https://pk.visamiddleeast.com/"> <img src={logo2} width={80} /></a>
                  <a href="https://www.americanexpress.com/">  <img src={logo3} width={80} /></a>
                    <a href="https://www.discover.com/"><img src={logo4} width={80} /></a>
                    
                    </span>
            </div>
            </Zoom>
        </div>
    )
}
