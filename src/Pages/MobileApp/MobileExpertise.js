import React from 'react';
import { Col, Row } from 'reactstrap';
import styles from '../../CSS/Mobile/MobileExpertise.module.css'
import icon1 from '../../Images/mobileIcon1.png'
import icon2 from '../../Images/mobileIcon2.png'
import icon3 from '../../Images/mobileIcon3.png'
import icon4 from '../../Images/mobileIcon4.png'
import Zoom from 'react-reveal/Zoom'

const MobileExpertise = () => {

    const expertise=[
        {
            image:icon1,
            name:"Native Mobile App Development",
            desc:"Our mobile app developers can build high-quality native apps for both Android and iOS systems aligned with your business and security requirements."
        },
        {
            image:icon2,
            name:"Hybrid Mobile App Development",
            desc:"Our mobile app developers can build high-quality native apps for both Android and iOS systems aligned with your business and security requirements."
        },
        {
            image:icon3,
            name:"Progressive Mobile App Development",
            desc:"Our mobile app developers can build high-quality native apps for both Android and iOS systems aligned with your business and security requirements."
        },
        {
            image:icon4,
            name:"Wearables and Embedded Software",
            desc:"Our mobile app developers can build high-quality native apps for both Android and iOS systems aligned with your business and security requirements."
        },
    ]

  return <div className={styles.main}>

      <Zoom>
      <div className={styles.header}>
          Our Expertise with <span className={styles.color}>major mobile app</span>
      </div>
      <div className={styles.title}>
          Development Tecnologies
      </div>
      <div className={styles.box}>
            <Row>
            {expertise.map((expert)=>{
                return(
                    <Col md={3}>
                      <div className={styles.expertise}>
                       <div> <img src={expert.image} width={230}/> </div>
                       <span className={styles.expertTitle}> {expert.name}</span>
                       <div className={styles.expertDesc}> {expert.desc}</div>
                        </div>
                    </Col>
                )
            })}
            </Row>
      </div>
      </Zoom>
  </div>;
};

export default MobileExpertise;
