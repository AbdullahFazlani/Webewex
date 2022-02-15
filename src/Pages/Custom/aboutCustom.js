import React from 'react';
import { Col, Row } from 'reactstrap';
import styles from '../../CSS/Custom/aboutCustom.module.css'
import image1 from '../../Images/aboutCustom.png'
import Zoom from 'react-reveal/Zoom';



const aboutCustom = () => {
  return <div >
            <div className={styles.main}>
            <Zoom>
                <Row>
                
                    <Col xs={12} sm={12} md={6}>
                        <div className={styles.aboutHeader}>
                            We Make <span className={styles.color}>Custom Website Design</span>
                        </div>
                        <div className={styles.content1}>
                        We Create Highly Engaging Customized Professional Website Designs Which Become Center of Attention to Your Every Visitor Fulfilling Your Desired Goals.
                        </div>
                        <div className={styles.content1}>
                        Logo Influx is a professional website design company subjected to comprehending and creating lively 
                        and goal-driven custom website designs. Our team of professional website designers are highly committed 
                        to providing you with cheap and flawless professional website. Design Company in 100% accordance with your
                         needs.
                        </div>
                        <div className={styles.content2}>
                        We Create Highly Engaging Customized Professional Website Designs Which Become Center of Attention to Your Every Visitor Fulfilling Your Desired Goals.
                        </div>
                    </Col>
                   
                  
                    <Col xs={12} sm={12} md={6}>
                        <img src={image1} className={styles.aboutImage}/>
                    </Col>
                  
                </Row>
                </Zoom>
            </div>
            
            
         </div>;
};

export default aboutCustom;
