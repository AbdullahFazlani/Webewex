import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import { Col, Row } from 'reactstrap';
import styles from '../../CSS/Contact/AboutContact.module.css'
import image1 from '../../Images/aboutContact.png'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';


const AboutContact = () => {
  return <div >
            <div className={styles.main}>
            <Zoom>
                <Row>
                
                    <Col xs={12} sm={12} md={6}>
                        <div className={styles.aboutHeader}>
                            We Are <span className={styles.color}>At Your Service</span>
                        </div>
                        <div className={styles.content1}>
                        Logo Influx is an energetic group of professional designers who are enthusiastic 
                        with their work and make the most excellent efforts to produce premium quality design
                         solutions and make it a delightful experience for its clients.
                        </div>
                        <div className={styles.content1}>
                        Logo Influx has been founded with the intention to provide high quality and affordable
                        designing services to all the levels of business entities like startup businesses, 
                        small business organizations, companies and corporate and we have been quite successful
                         in this industry as we employ the best designers.
                        </div>
                        <div className={styles.content2}>
                        Since designing is the crux of our all services, 
                        we have made the teams of designers with specific purposes such as:   
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

export default AboutContact;
