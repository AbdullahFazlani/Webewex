import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import styles from '../../CSS/About/Branding.module.css'
import image1 from '../../Images/branding.png'
import Zoom from 'react-reveal/Zoom';

const Branding = () => {
  return <div style={{fontFamily:"Poppins",overflow:"hidden"}} > 
      <Zoom>
        <Row>
          
           <Col md={2} className='d-none d-md-block'>
            <div className={styles.bottom}>
                <div className={styles.complete}>
                Complete
                </div>
               
                <div className={styles.header}>
                Branding Solution
            </div>
            </div>
            </Col>
           
            <div className={styles.bottom1}>
                <div className={styles.complete}>
                Complete
                </div>
                <div className={styles.header}>
                Branding Solution
            </div>
            </div>
            

           <Col md={10}>
               <div className={styles.gradient}>
                    <Row>
                        <Col sm={12} md={3} className={styles.col1}>
                           <div >
                              <span className={styles.heading}>Website</span> 
                           </div>
                           <div className={styles.points}>
                               
                               2 Concepts<br/>
                              
                               Unlimited Pages
                              
                           </div>
                           <div >
                              <span className={styles.heading}>Logo</span> 
                           </div>
                           <div className={styles.points}>
                               
                           Unlimited Concepts<br/>
                            Unlimited Revisions
                              
                           </div>
                           <div >
                              <span className={styles.heading}>Stationary</span> 
                           </div>
                           <div className={styles.points}>
                               
                           3 Concepts<br/>
                            Unlimited Revisions    
                           </div>
                           <div >
                              <span className={styles.heading}>logo</span> 
                           </div>
                           <div className={styles.points}>
                               
                           2 Concepts of any Standard Size <br/>
                            Unlimited Revisions
                           </div>
                        </Col>
                        <Col sm={12} md={4} className={styles.col2}>
                        <div >
                              <span className={styles.heading2}>brochure</span> 
                           </div>
                           <div className={styles.points2}>
                               
                           3 Concepts with Unlimited Color Options<br/>
                            Unlimited Revisions
                           </div>
                       
                           <div >
                              <span className={styles.heading2}>social media design</span> 
                           </div>
                           <div className={styles.points2}>
                               
                           Any 3 of Your Choice (Facebook, LinkedIn,
Twitter, YouTube)
                           </div>
                            <div>
                                <button className={styles.button}>
                                    StarT PROject
                                </button>
                            </div>
                        </Col>
                        <Col sm={12} md={4}>
                            <img src={image1} height={650}/>
                        </Col>
                    </Row>
               </div>
           </Col>

            </Row>
            </Zoom>
    </div>;
};

export default Branding;
