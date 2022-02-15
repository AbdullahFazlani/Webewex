import React from 'react'
import { BsCheck2Square } from 'react-icons/bs'
import { Col, Container, Row } from 'reactstrap'
import styles from '../../../CSS/Homepage/Combo.module.css'
import Zoom from 'react-reveal/Zoom'
export const Combo = () => {
    return (
        <div className={styles.mainBg}>
        
        <div className={styles.combo}>
           
                All In One <span className={styles.boldHeader}>Combo Package </span>
            
        </div>
      
      
            <div className={styles.combo1}>
            <Zoom>
                <Container>
                    <Row>
                        <Col md={4}>
                           <div className={styles.heading}>Website Design</div> 
                           <div className={styles.content}>
                            <p><BsCheck2Square className={styles.color}/>&nbsp; &nbsp;&nbsp;&nbsp;UNLIMITED Pages Website</p>
                            <p><BsCheck2Square className={styles.color}/>&nbsp; &nbsp;&nbsp;&nbsp;Content Management System (CMS)</p>
                            <p><BsCheck2Square className={styles.color}/>&nbsp; &nbsp;&nbsp;&nbsp;Mobile Responsive</p>
                            <p><BsCheck2Square className={styles.color}/>&nbsp; &nbsp;&nbsp;&nbsp;5 Stock Photos + 3 Banner Designs</p>
                            <p><BsCheck2Square className={styles.color}/>&nbsp; &nbsp;&nbsp;&nbsp;Any 3 Social Media Platforms</p>
                            <p><BsCheck2Square className={styles.color}/>&nbsp; &nbsp;&nbsp;&nbsp;Complete W3C Certified HTML</p>
                            <p><BsCheck2Square className={styles.color}/>&nbsp; &nbsp;&nbsp;&nbsp;Complete Deployment</p>
                            </div>
                           


                            <div className={styles.heading}>Logo Design</div> 
                            <div className={styles.content}>
                            <p><BsCheck2Square className={styles.color}/>&nbsp; &nbsp;&nbsp;&nbsp;Unlimited Logo Design Concepts</p>
                            <p><BsCheck2Square className={styles.color}/>&nbsp; &nbsp;&nbsp;&nbsp;Unlimited Revisions</p>
                            <p><BsCheck2Square className={styles.color}/>&nbsp; &nbsp;&nbsp;&nbsp;Icon Design</p>
                            <p><BsCheck2Square className={styles.color}/>&nbsp; &nbsp;&nbsp;&nbsp;All Final File Formats</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={styles.heading}>Stationary Design</div>
                            <div className={styles.content}>
                            <p><BsCheck2Square className={styles.color}/>&nbsp; &nbsp;&nbsp;&nbsp;Unlimited Logo Design Concepts</p>
                            <p><BsCheck2Square className={styles.color}/>&nbsp; &nbsp;&nbsp;&nbsp;Unlimited Revisions</p>
                            </div>
                            <div className={styles.heading}>Value Added Services</div> 
                            <div className={styles.content}>
                            <p><BsCheck2Square className={styles.color}/>&nbsp; &nbsp;&nbsp;&nbsp;Dedicated Account Manager</p>
                            <p><BsCheck2Square className={styles.color}/>&nbsp; &nbsp;&nbsp;&nbsp;100% Ownership Rights</p>
                            <p><BsCheck2Square className={styles.color}/>&nbsp; &nbsp;&nbsp;&nbsp;100% Money Back Guarantee</p>
                            <p><BsCheck2Square className={styles.color}/>&nbsp; &nbsp;&nbsp;&nbsp;Complete Deployment</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={styles.card}>
                                
                                <div className={styles.tag}>all in One</div>
                                <div >
                                    <h1 className={styles.cardHeader}>
                                        Combo package
                                    </h1>
                                </div>
                                <div className={styles.cardDollar}>
                                    $
                                </div>
                                
                                <div className={styles.cardPrice}>
                                    1199
                                </div>
                                <div className={styles.cardDiscount}>
                                    <strike className={styles.cardStrike}>$2399</strike> Only
                                </div>
                                <div className={styles.cardOffer}>
                                    <div >
                                        LIMITED TIME OFFER
                                    </div>
                                    <div>
                                        want to discus??
                                    </div>
                                </div>
                                <div className={styles.cardLive}>
                                  Live Chat Now
                                </div>
                                <div style={{textAlign:"center"}} >
                                   <button className={styles.cardButton}>Order Now</button> 
                                </div>
                                
                            </div>
                        </Col>
                    </Row>
                </Container>
                </Zoom>
            </div>
            
        </div>
    )
}
