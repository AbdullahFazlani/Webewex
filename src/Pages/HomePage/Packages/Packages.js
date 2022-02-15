import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import { CardPackage } from '../../Components/CardPackage.js/CardPackage'
import { CardPackage1 } from '../../Components/CardPackage.js/CardPackage1'
import styles from '../../../CSS/Homepage/Package.module.css'
import packageImg from '../../../Images/packageImg.png'
import packageImg1 from '../../../Images/packageImg1.png'
import key1 from '../../../Images/keyFeature1.png'
import key2 from '../../../Images/keyFeature2.png'
import key3 from '../../../Images/keyFeature3.png'
import key4 from '../../../Images/keyFeature4.png'
import key5 from '../../../Images/keyFeature5.png'
import line from '../../../Images/KeyFeatureline.png'
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill, BsDot } from 'react-icons/bs'
import Slider from "react-slick";
import Pulse from 'react-reveal/Pulse';



export const Packages = () => {
    
    const settings = {
        dots: true,
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        initialSlide:1,
        
      };

      const [website,setWebsite]=useState(true)
      const [app,setApp]=useState(false)
      const [stationary,setStationary]=useState(false)


      const showWeb=()=>{
          setWebsite(true)
          setApp(false)
          setStationary(false)
      }

      const showApp=()=>{
          setWebsite(false)
          setApp(true)
          setStationary(false)
      }

      const ShowStationary=()=>{
          setWebsite(false)
          setApp(false)
          setStationary(true)
      }

    return (
        <div className={styles.packageBg}>
            <Row className={styles.packageHeader}>
                <Col>
                    We have Designed Our Packages <span className={styles.packageHeaderColor}>Thoughtfully For All Business</span>
                </Col>
            </Row>
            <Row className={styles.packageTitle}>
                <Col>
                Get Alluring And Specialized Designs Deals At Exclusive Rates And Make Your Brand Impressive

                </Col>
            </Row>

            <Row>
            <div className={styles.packageList} >
                    
                    <button className={styles.packageListItem} onClick={showWeb}>
                        {website ?
                         <span className={styles.packageItemColor}>
                         <BsDot className={styles.packageListIcon}/>
                            <span className={styles.packageItemBorder}>
                                Website
                            </span>
                     </span>:
                     <span ><BsDot className={styles.packageListIcon}/>Website</span>
                     }
                    </button>
                    
                    <button className={styles.packageListItem} onClick={showApp}>
                    {app ?
                         <span className={styles.packageItemColor}>
                         <BsDot className={styles.packageListIcon}/>
                            <span className={styles.packageItemBorder}>
                                Mobile Apps
                            </span>
                     </span>:
                     <span ><BsDot className={styles.packageListIcon}/>Mobile Apps</span>
                     }
                     </button>  
                    <button className={styles.packageListItem} onClick={ShowStationary}>
                    {stationary ?
                         <span className={styles.packageItemColor}>
                         <BsDot className={styles.packageListIcon}/>
                            <span className={styles.packageItemBorder}>
                                Stationary
                            </span>
                     </span>:
                     <span ><BsDot className={styles.packageListIcon}/>Stationary</span>
                     }
                    </button>
                   
               
             </div>

            </Row>
{website && 
    <Container>
                <Row className={styles.packageRow}>
                   
                    <Col  md={4} className="d-none d-md-block d-lg-block">
                    <Slide top>
                        <CardPackage img={packageImg} heading="Gold" price="59" />
                        </Slide>
                    </Col>
                    

                   
                    <Col  md={4} className="d-none d-md-block d-lg-block">
                    <Slide bottom>
                    <CardPackage1 img={packageImg1} heading="Platinum" price="69"/>
                    </Slide>
                    </Col>
                    
                    
                    <Col md={4} className="d-none d-md-block d-lg-block">
                    <Slide top>
                    <CardPackage img={packageImg} heading="Diamond" price="79"/>
                    </Slide>
                    </Col>

                    <Col xs={12} sm={12} className={styles.display}>
                    <Slider {...settings}>
                        <div>
                        <CardPackage img={packageImg} heading="Gold" price="59"/>
                        </div>
                        <div>
                        <CardPackage1 img={packageImg1} heading="Platinum" price="69"/>
                        </div>
                        <div>
                        <CardPackage img={packageImg} heading="Diamond" price="79"/>
                        </div>

                    </Slider>
                    </Col>
                </Row>
                </Container>
}
{app && 
    <Container>
                <Row className={styles.packageRow}>
                   
                    <Col  md={4} className="d-none d-md-block d-lg-block">
                    <Slide top>
                        <CardPackage img={packageImg} heading="Gold" price="59" /> 
                        </Slide>
                    </Col>
                    

                   
                    <Col  md={4} className="d-none d-md-block d-lg-block">
                    <Slide bottom>
                    <CardPackage1 img={packageImg1} heading="Platinum" price="69"/>
                    </Slide>
                    </Col>
                    
                    
                    <Col md={4} className="d-none d-md-block d-lg-block">
                    <Slide top>
                    <CardPackage img={packageImg} heading="Diamond" price="79"/>
                    </Slide>
                    </Col>

                    <Col xs={12} sm={12} className={styles.display}>
                    <Slider {...settings}>
                        <div>
                        <CardPackage img={packageImg} heading="Gold" price="59"/>
                        </div>
                        <div>
                        <CardPackage1 img={packageImg1} heading="Platinum" price="69"/>
                        </div>
                        <div>
                        <CardPackage img={packageImg} heading="Diamond" price="79"/>
                        </div>

                    </Slider>
                    </Col>
                </Row>
                </Container>
}
{stationary && 
    <Container>
                <Row className={styles.packageRow}>
                   
                    <Col  md={4} className="d-none d-md-block d-lg-block">
                    <Slide top>
                        <CardPackage img={packageImg} heading="Gold" price="59" />
                        </Slide>
                    </Col>
                    

                   
                    <Col  md={4} className="d-none d-md-block d-lg-block">
                    <Slide bottom>
                    <CardPackage1 img={packageImg1} heading="Platinum" price="69"/>
                    </Slide>
                    </Col>
                    
                    
                    <Col md={4} className="d-none d-md-block d-lg-block">
                    <Slide top>
                    <CardPackage img={packageImg} heading="Diamond" price="79"/>
                    </Slide>
                    </Col>

                    <Col xs={12} sm={12} className={styles.display}>
                    <Slider {...settings}>
                        <div>
                        <CardPackage img={packageImg} heading="Gold" price="59"/>
                        </div>
                        <div>
                        <CardPackage1 img={packageImg1} heading="Platinum" price="69"/>
                        </div>
                        <div>
                        <CardPackage img={packageImg} heading="Diamond" price="79"/>
                        </div>

                    </Slider>
                    </Col>
                </Row>
                </Container>
}
            
           <div style={{textAlign:"center"}}>
            <button className={styles.packageButton}>View all Packages</button>
            </div>
            <div className={styles.keyHeader}>
                Key Features
            </div>
            <Pulse>
            <div className={styles.keyFeatures}>
               <Container>
                   <Row>
                       <Col xs={4} sm={4} md={2}  >
                      <div >
                            <div className={styles.span1}>
                                <img src={key1} />
                            <div className={styles.FeatureWidth}> 100% satisfaction Guarantee</div>
                    </div>
                    </div>
                       </Col>

                       <Col xs={4} sm={4} md={2}>
                       <div className={styles.span1}>
                    <img src={key2}/>
                   <div className={styles.FeatureWidth}> Unique Design Guarantee</div>
                </div>
                
                
                       </Col>
                       <Col xs={4} sm={4} md={2}>
                       <div className={styles.span1}>
                    <img src={key3}/>
                   <div className={styles.FeatureWidth}> 100% Money Back Guarantee </div>
                </div>
                
                       </Col>
                       <Col xs={4} sm={4} md={2}>
                       <div className={styles.span1}>
                    <img src={key4}/>
                   <div className={styles.FeatureWidth}> 24/7 Design Consultancy</div>
                </div >
                
                
                       </Col>
                       <Col xs={4} sm={4} md={2}>
                       <div style={{display:"inline-block",width:"15%"}}>
                    <img src={key5}/>
                   <div className={styles.FeatureWidth}> Award Winning Designers &#38; Developers </div>
                </div>
                       </Col>
                      
                   </Row>
               </Container>
            </div>
            </Pulse>
        </div>
    )
}
