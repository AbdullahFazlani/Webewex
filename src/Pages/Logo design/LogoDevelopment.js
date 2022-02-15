import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import styles from '../../CSS/Logo/LogoDevelopment.module.css'
import image1 from '../../Images/logoImage1.png'
import image2 from '../../Images/logoImage2.png'
import image3 from '../../Images/logoImage3.png'
import image4 from '../../Images/logoImage4.png'
import image5 from '../../Images/logoImage5.png'
import image6 from '../../Images/logoImage6.png'




const LogoDevelopment = () => {
  return <div>
      <h1 className={styles.header}>Logo <span className={styles.color}> Design Development</span></h1>
      <Container>
          <Row>
              {[image1,image2,image3,image4,image5,image6].map((image)=>{
                   return(
                    <Col md={4}>
                    <div className={styles.space}>
                        <img src={image} className={styles.image}/>
                    </div>
                   
                </Col>
                   )
              })}
            
          </Row>
      </Container>
  </div>;
};

export default LogoDevelopment;
