import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import styles from '../../../CSS/Homepage/About.module.css'
import Aboutimg from '../../../Images/about.png'
import Slide from 'react-reveal/Slide';


export const About = () => {
    return (
        <div styles={{overflowX:"hidden"}} >
           <Container>
                <Row  >
                  
                    <Col xs={12} sm={12} md={6} >
                    <Slide left>
                   <div className={styles.aboutTextSection}>
                       <h1 className={styles.aboutHeader}>
                           About <span className={styles.aboutHeaderColor}>Webewex</span>
                        </h1>
                       
                       <p className={styles.aboutParagraph}>
                       Start working with an company that can provide everything you need
                        to generate awareness, drive traffic, connect with 
                        customers, and increase sales.
                       </p>

                       <p className={styles.aboutParagraph}>
                       We will create your identity and name in the marketing and business world.
                        Check our portfolio and decide your future with us.
                         Creativity is an inevitable flair.
                       </p>
                   </div>

                   </Slide>
                  
                    </Col >
        
                    <Col xs={12} sm={12} md={6}  >
                        
                    <Slide right>
                    <div className={styles.aboutImageSection}>
                        <img src={Aboutimg} className={styles.aboutImage}/>
                    </div>
                    </Slide>    
                    </Col>
                   
                </Row>
                </Container>
        </div>
    )
}
