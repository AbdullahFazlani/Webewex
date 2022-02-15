import React, { useState } from 'react'
import background from '../../../Images/demonstrateBg.png';
import styles from '../../../CSS/Homepage/Demonstrate.module.css'
import { Col, Container, Row } from 'reactstrap';
import image1 from '../../../Images/demonstrateimage1.png'
import image2 from '../../../Images/demonstrateimage2.png'
import image3 from '../../../Images/demonstrateimage3.png'
import image4 from '../../../Images/demonstrateimage4.png'
import image5 from '../../../Images/demonstrateimage5.png'
import image6 from '../../../Images/demonstrateimage6.png'
import {FaGreaterThan} from 'react-icons/fa'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import {AiFillCaretRight} from 'react-icons/ai'

export const Demonstrate = () => {

    const [show,setShow]=useState(false);
    const showContent=()=>{
            setShow(!show)
    }

    return (
        <div style={{backgroundImage:`url(${background})`,overflow:"hidden",backgroundRepeat:"no-repeat",backgroundSize:"cover",fontFamily:"Poppins"}}>
            <div className={styles.heading1}>
            We Have Demonstrated Our <span style={{color:"#bd1e2d"}}>Skills In Over 200 Industries  </span>
            </div>
            <div className={styles.title1}>
            Our Skilled Team Of Experts Have Experience Designing For A Multitude Of Industries
            </div>
        <Zoom>
            <div className={styles.shape}>
                <div>
                    <Row>
                        <Col xs={4} sm={4} md={2}>
                            <div className={styles.text1}>
                                <img src={image1} />
                                <div className={styles.text2}>Enterprise</div>
                            </div>
                        </Col>
                        <Col  xs={4} sm={4}  md={2}>
                            <div className={styles.text1}>
                                <img src={image2}/>
                                <div className={styles.text2}>B2C</div>

                            </div>
                        </Col>
                        <Col  xs={4}  sm={4} md={2}>
                            <div className={styles.text1}>
                                <img src={image3}/>
                                <div className={styles.text2}>E-Commerce</div>
                            </div>
                        </Col>
                        <Col  xs={4} sm={4}  md={2}>
                            <div className={styles.text1}>
                                <img src={image4}/>
                                <div className={styles.text2}>Education</div>
                            </div>
                        </Col>
                        <Col  xs={4}  sm={4} md={2}>
                            <div className={styles.text1}>
                                <img src={image5}/>
                                <div className={styles.text2}>Non-Profit</div>
                            </div>
                        </Col>
                        <Col  xs={4}  sm={4} md={2}>
                            <div className={styles.text1}>
                                <img src={image6}/>
                                <div className={styles.text2}>Startup</div>
                            </div>
                        </Col>
                    </Row>
                    {show && <div className={styles.show}>
                       <Fade>
                        <Container>
                            <Row>
                                <Col xs={6} sm={6} md={4} >
                                  <div className={styles.col1}>
                                  <AiFillCaretRight/>  Automotive
                                  </div>
                                </Col>
                                <Col xs={6} sm={6} md={4} >
                                
                                  <div className={styles.col1}>
                                  <AiFillCaretRight/> Food &#38; Beverages
                                  </div>
                                
                                </Col>
                                <Col xs={6} sm={6} md={4} >
                                
                                  <div className={styles.col1}>
                                  <AiFillCaretRight/>  Real Estate
                                  </div>
                                
                                </Col>
                           
                                <Col xs={6} sm={6} md={4}  >
                                
                                  <div className={styles.col1}>
                                  <AiFillCaretRight/>  B2B
                                  </div>
                                
                                </Col>
                                <Col xs={6} sm={6} md={4}  >
                                
                                  <div className={styles.col1}>
                                  <AiFillCaretRight/>  Government
                                  </div>
                                
                                </Col>
                                <Col xs={6} sm={6} md={4} >
                                
                                  <div className={styles.col1}>
                                  <AiFillCaretRight/>  Schools &#38; Institutions
                                  </div>
                                
                                </Col>
                            
                                <Col xs={6} sm={6} md={4} >
                                
                                  <div className={styles.col1}>
                                  <AiFillCaretRight/>  Beauty &#38; Fashion
                                  </div>
                                
                                </Col>
                                <Col xs={6} sm={6} md={4} >
                                
                                  <div className={styles.col1}>
                                  <AiFillCaretRight/>  Luxury
                                  </div>
                                
                                </Col>
                                <Col xs={6} sm={6} md={4} >
                                
                                  <div className={styles.col1}>
                                  <AiFillCaretRight/>  Small Business
                                  </div>
                                
                                </Col>
                           
                                <Col xs={6} sm={6} md={4} >
                                
                                  <div className={styles.col1}>
                                  <AiFillCaretRight/>  E-Commerce
                                  </div>
                                
                                </Col>
                                <Col xs={6} sm={6} md={4} >
                                
                                  <div className={styles.col1}>
                                  <AiFillCaretRight/>  Medical &#38; Healthcare
                                  </div>
                                
                                </Col>
                                <Col xs={6} sm={6} md={4} >
                                
                                  <div className={styles.col1}>
                                  <AiFillCaretRight/>  Sports
                                  </div>
                                
                                </Col>
                           
                                <Col xs={6} sm={6} md={4} >
                                
                                  <div className={styles.col1}>
                                  <AiFillCaretRight/>  Entertainment &#38; Media
                                  </div>
                                
                                </Col>
                                <Col xs={6} sm={6} md={4} >
                                
                                  <div className={styles.col1}>
                                  <AiFillCaretRight/>  Non-Profit
                                  </div>
                                
                                </Col>
                                <Col xs={6} sm={6} md={4} >
                                
                                  <div className={styles.col1}>
                                  <AiFillCaretRight/>  Technology Services
                                  </div>
                                
                                </Col>
                           
                                <Col xs={6} sm={6} md={4} >
                                
                                  <div className={styles.col1}>
                                  <AiFillCaretRight/>  Financial
                                  </div>
                                
                                </Col>
                                <Col xs={6} sm={6} md={4} >
                                
                                  <div className={styles.col1}>
                                  <AiFillCaretRight/>  Publication
                                  </div>
                                
                                </Col>
                                <Col xs={6} sm={6} md={4} >
                                
                                  <div className={styles.col1}>
                                  <AiFillCaretRight/>  Travel
                                  </div>
                                
                                </Col>
                            </Row>
                            
                        </Container>
                        </Fade>
                        </div>}
                   
                    <div style={{textAlign:"center",marginBottom:"90px"}}>
                        <button className={styles.btn1} onClick={showContent}> 
                           {show? "Close": "Expand to view more" } 
                        </button>
                    </div>
                </div>
            </div>
            </Zoom>
        </div>
    )
}
