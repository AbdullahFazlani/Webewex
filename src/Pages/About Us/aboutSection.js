import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import { Col, Row } from 'reactstrap';
import styles from '../../CSS/About/aboutSection.module.css'
import image1 from '../../Images/aboutSectionImage.png'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';


const AboutSection = () => {
  return <div >
            <div className={styles.main}>
            <Zoom>
                <Row>
                
                    <Col xs={12} sm={12} md={6}>
                        <div className={styles.aboutHeader}>
                            About <span className={styles.color}>Webewox</span>
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
            <Zoom>
            <div className={styles.gradient}>
                <Row>
                    
                    <Col md={6}>
                        <div>
                            <BsFillStarFill className={styles.starIcon}/>
                          <span className={styles.gradientPoints}>  
                            Website Designer 
                            </span>
                        </div>
                        <div>
                        <BsFillStarFill className={styles.starIcon}/>
                        <span className={styles.gradientPoints}>
                               Business and Company Logo Designer
                         </span>
                        </div>
                    </Col>
                   
                    <Col md={6}>
                    <div>
                    <BsFillStarFill className={styles.starIcon}/>
                    <span className={styles.gradientPoints}> 
                     Graphics, banner, stationery and business card designers
                     </span>
                        </div>
                        <div>
                        <BsFillStarFill className={styles.starIcon}/>
                        <span className={styles.gradientPoints}> 
                        Corporate identity designers
                        </span>
                        </div>
                    </Col>
                </Row>
            </div>
            </Zoom> 
            
         </div>;
};

export default AboutSection;
