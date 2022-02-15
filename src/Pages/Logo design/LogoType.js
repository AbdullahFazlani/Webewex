import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import styles from '../../CSS/Logo/LogoType.module.css'
import image from '../../Images/LogoType.png'
import Zoom from 'react-reveal/Zoom'
const LogoType = () => {

    const logo=[
        {
            name:"Iconic Logo",
            desc:"Logo Genies, you can get all your branding requirements met effectively and done efficiently. Whether you are looking to revamp"
        },
        {
            name:"Typography Logo",
            desc:"Logo Genies, you can get all your branding requirements met effectively and done efficiently. Whether you are looking to revamp"
        },
        {
            name:"Illustrative Logo",
            desc:"Logo Genies, you can get all your branding requirements met effectively and done efficiently. Whether you are looking to revamp"
        },
        {
            name:"Animated Logo",
            desc:"Logo Genies, you can get all your branding requirements met effectively and done efficiently. Whether you are looking to revamp"
        }
            ]

  return <div className={styles.main}>
      <Zoom>
        <Row>
            <Col md={6}>
                <img src={image} className={styles.image}/>
            </Col>
            <Col md={6}>
                <div className={styles.box1}>
                   <div className={styles.boxTitle}>
                       Transforming Your Vision Into
                       <span className={styles.color}> Digital Reality</span>
                </div>
                <div className={styles.boxContent}>
                Logo Influx is a professional website design company subjected to comprehending and creating lively and goal-driven custom website designs. Our team of professional website designers are highly committed to providing you with cheap and flawless professional website. Design Company in 100% accordance with your needs.
                </div>

                </div>
            </Col>
        </Row>
        <div className={styles.typeMargin}>   
       <Container>
            <Row>
            {logo.map((logo)=>{
                return(
                    <Col  md={3} >
                       <div className={styles.types}>
                        <div >
                           <span className={styles.typeName}> {logo.name} </span>
                        </div>
                        <div className={styles.typeContent}>
                            {logo.desc}
                        </div>
                        </div>
                    </Col>
                )
            })}
        </Row>
        </Container>
        </div>
        </Zoom>
  </div>;
};

export default LogoType;
