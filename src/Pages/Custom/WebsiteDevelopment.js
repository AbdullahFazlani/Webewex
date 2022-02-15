import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import styles from '../../CSS/Custom/websiteDevelopment.module.css'
import image1 from '../../Images/PortfolioImage1.png'
import image2 from '../../Images/PortfolioImage2.png'
import image3 from '../../Images/PortfolioImage3.png'
import image4 from '../../Images/PortfolioImage4.png'
import image5 from '../../Images/PortfolioImage5.png'
import image6 from '../../Images/PortfolioImage6.png'

const WebsiteDevelopment = () => {
  return <div>
      <h1 className={styles.header}>Custom <span className={styles.color}>Website Development</span></h1>
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

export default WebsiteDevelopment;
