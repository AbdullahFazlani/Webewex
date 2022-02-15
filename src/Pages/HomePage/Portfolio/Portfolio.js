import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap';
import styles from '../../../CSS/Homepage/Portfolio.module.css'
import image1 from '../../../Images/PortfolioImage1.png'
import image2 from '../../../Images/PortfolioImage2.png'
import image3 from '../../../Images/PortfolioImage3.png'
import image4 from '../../../Images/PortfolioImage4.png'
import image5 from '../../../Images/PortfolioImage5.png'
import image6 from '../../../Images/PortfolioImage6.png'

import logoImage1 from '../../../Images/logoImage1.png'
import logoImage2 from '../../../Images/logoImage2.png'
import logoImage3 from '../../../Images/logoImage3.png'
import logoImage4 from '../../../Images/logoImage4.png'
import logoImage5 from '../../../Images/logoImage5.png'
import logoImage6 from '../../../Images/logoImage6.png'


import {AiOutlineReload} from 'react-icons/ai'
import {BsDot} from 'react-icons/bs'
import { Spinner } from 'react-bootstrap';



export const Portfolio = () => {
    const [website,setWebsite]=useState(true);
    const [app,setApp]=useState(false);
    const [stationary,setStationary]=useState(false);
    const [blog,setBlog]=useState(false);

    const ShowWebsite=()=>{
        setWebsite(true);
        setApp(false)
        setBlog(false)
        setStationary(false)
    }
    const ShowApp=()=>{
        setWebsite(false);
        setApp(true)
        setBlog(false)
        setStationary(false)
    }
    const ShowStationary=()=>{
        setWebsite(false);
        setApp(false)
        setBlog(false)
        setStationary(true)
    }
    const ShowBlog=()=>{
        setWebsite(false);
        setApp(false)
        setBlog(true)
        setStationary(false)
    }

    const ShowMore=()=>{
      
    }
    return (
        <div className={styles.portfolioFont}>
            <Row>
                 <div className={styles.PortFolioMenu} >
                    
                        <button className={styles.MenuButton} onClick={ShowWebsite}>
                            
                           {website ? 
                           <span className={styles.PortListItemColor}><BsDot className={styles.PortListItemIcon}/><span className={styles.PortListItemBorder}>Website</span></span>
                           :<span><BsDot className={styles.PortListItemIcon}/>Website</span>} 
                            </button>
                        <button className={styles.MenuButton} onClick={ShowApp}>
                        {app ? 
                           <span className={styles.PortListItemColor}><BsDot className={styles.PortListItemIcon}/><span className={styles.PortListItemBorder}>Mobile Apps</span></span>
                           :<span><BsDot className={styles.PortListItemIcon}/>Mobile Apps</span>} 
                         </button>  
                        <button className={styles.MenuButton} onClick={ShowStationary}>
                        {stationary ? 
                           <span className={styles.PortListItemColor}><BsDot className={styles.PortListItemIcon}/><span className={styles.PortListItemBorder}>Stationary</span></span>
                           :<span><BsDot className={styles.PortListItemIcon}/>Stationary</span>} 
                            </button>
                        <button className={styles.MenuButton} onClick={ShowBlog}>
                        {blog ? 
                           <span className={styles.PortListItemColor}><BsDot className={styles.PortListItemIcon}/><span className={styles.PortListItemBorder}>Logos</span></span>
                           :<span><BsDot className={styles.PortListItemIcon}/>Logos </span>} 
                            </button>
                   
                 </div>
            </Row>
            <div>
                {website&& <Website/>}
                {app&& <Application/>}
                {stationary&& <Stationary/>}
                {blog&& <Blog/>}
                <div className={styles.loadButton}>   
                <button onClick={ShowMore} className={styles.MenuButton}><Spinner animation='grow'/>Load More...</button>
                </div>
               
            </div>
        </div>
    )
}

const Website=()=>{
    return(
        <div>
           <Container>
               <Row>
                   
                   <Col xs={6} sm={6} md={4} className={styles.pSection}>
                       <img src={image1} className={styles.img}/>
                       <span className={styles.singlespan}>-</span>
                   </Col>
                   <Col xs={6} sm={6} md={4} className={styles.pSection}>
                       <img src={image2} className={styles.img}/>
                       <span className={styles.singlespan}>-</span>
                   </Col>
                   <Col xs={6} sm={6} md={4} className={styles.pSection}>
                       <img src={image3} className={styles.img}/>
                       <span className={styles.singlespan}>-</span>
                   </Col>
                   <Col xs={6} sm={6} md={4} className={styles.pSection}>
                       <img src={image4} className={styles.img}/>
                       <span className={styles.singlespan}>-</span>
                   </Col>
                   <Col xs={6} sm={6} md={4} className={styles.pSection}>
                       <img src={image5} className={styles.img}/>
                       <span className={styles.singlespan}>-</span>
                   </Col>
                   <Col xs={6} sm={6} md={4} className={styles.pSection}>
                       <img src={image6} className={styles.img}/>
                       <span className={styles.singlespan}>-</span>
                   </Col>
                  
               </Row>
               </Container>
        </div>
    )
}
const Application=()=>{
    return(
        <div>
           <Container>
               <Row>
               <Col xs={6}  sm={6}  md={4} className={styles.pSection}>
                       <img src={image2} className={styles.img}/>
                       <span className={styles.singlespan}>-</span>
                   </Col>
                   <Col xs={6}  sm={6} md={4} className={styles.pSection}>
                       <img src={image1} className={styles.img}/>
                       <span className={styles.singlespan}>-</span>
                   </Col>
                   <Col xs={6}  sm={6} md={4} className={styles.pSection}>
                       <img src={image4} className={styles.img}/>
                       <span className={styles.singlespan}>-</span>
                   </Col>
                   <Col xs={6}  sm={6} md={4} className={styles.pSection}>
                       <img src={image3} className={styles.img}/>
                       <span className={styles.singlespan}>-</span>
                   </Col>
                   <Col xs={6}  sm={6} md={4} className={styles.pSection}>
                       <img src={image6} className={styles.img}/>
                       <span className={styles.singlespan}>-</span>
                   </Col>
                   <Col xs={6} sm={6}  md={4} className={styles.pSection}>
                       <img src={image5} className={styles.img}/>
                       <span className={styles.singlespan}>-</span>
                   </Col>
                   
               </Row>
               </Container>
        </div>
    )
}
const Stationary=()=>{
    return(
        <div>
           <Container>
               <Row>

               <Col xs={6} sm={6}  md={4} className={styles.pSection}>
                       <img src={image5} className={styles.img}/>
                       <span className={styles.singlespan}>-</span>
                   </Col>
                   <Col  xs={6}  sm={6} md={4} className={styles.pSection}>
                       <img src={image6} className={styles.img}/>
                       <span className={styles.singlespan}>-</span>
                   </Col>
                   <Col  xs={6}  sm={6} md={4} className={styles.pSection}>
                       <img src={image2} className={styles.img}/>
                       <span className={styles.singlespan}>-</span>
                   </Col>
                   <Col  xs={6}  sm={6} md={4} className={styles.pSection}>
                       <img src={image1} className={styles.img}/>
                       <span className={styles.singlespan}>-</span>
                   </Col>
                   <Col  xs={6}  sm={6}  sm={6} md={4} className={styles.pSection}>
                       <img src={image4} className={styles.img}/>
                       <span className={styles.singlespan}>-</span>
                   </Col>
                   <Col xs={6}  sm={6}  md={4} className={styles.pSection}>
                       <img src={image3} className={styles.img}/>
                       <span className={styles.singlespan}>-</span>
                   </Col>   
                   
               </Row>
               </Container>
        </div>
    )
}
const Blog=()=>{
    return(
        <div>
           <Container>
               <Row>
               <Col xs={6}  sm={6} md={4} className={styles.pSection}>
                       <img src={logoImage1} className={styles.img}/>
                       <span className={styles.singlespan}>-</span>
                   </Col>
                   <Col  xs={6} sm={6} md={4} className={styles.pSection}>
                       <img src={logoImage2} className={styles.img}/>
                       <span className={styles.singlespan}>-</span>
                   </Col>
                   <Col  xs={6} sm={6} md={4} className={styles.pSection}>
                       <img src={logoImage3} className={styles.img}/>
                       <span className={styles.singlespan}>-</span>
                   </Col>
                   <Col xs={6}  sm={6} md={4} className={styles.pSection}>
                       <img src={logoImage4} className={styles.img}/>
                       <span className={styles.singlespan}>-</span>
                   </Col>
                   <Col  xs={6} sm={6} md={4} className={styles.pSection}>
                       <img src={logoImage5} className={styles.img}/>
                       <span className={styles.singlespan}>-</span>
                   </Col>
                   <Col  xs={6} sm={6} md={4} className={styles.pSection}>
                       <img src={logoImage6} className={styles.img}/>
                       <span className={styles.singlespan}>-</span>
                   </Col>
                   
               </Row>
               </Container>
        </div>
    )
} 