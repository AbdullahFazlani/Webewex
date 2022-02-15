import React, { useState } from 'react'
import {Container,Row,Col, Button, Offcanvas, Dropdown, Popover, OverlayTrigger} from 'react-bootstrap'
import Logo from '../../../Images/logo.png'
import styles from '../../../CSS/Component/topbar.module.css'
import {IoIosChatbubbles} from 'react-icons/io'
import {FiMenu, FiPhoneCall} from 'react-icons/fi'
import Bounce from 'react-reveal/Bounce';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { Homepage } from '../../HomePage/homepage'
import { AiFillCaretDown, AiFillCaretRight } from 'react-icons/ai'
import { RiAccountCircleLine } from 'react-icons/ri'


export const Topbar = () => {
  const [showService,setShowService]=useState(false);
    function Example() {
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return (
          <>
            <span className={styles.buttonMenuAlign}>
                               <button className={styles.buttonMenu} onClick={handleShow}><FiMenu /></button>
            </span>
      
            <Offcanvas show={show} onHide={handleClose} style={{width:"50%"}}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title> <img src={Logo} width={100} /></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body >
                <div >
                <Link to="/" className={styles.hideLinkUnderline}>
                  Home Page
                  </Link>
                  </div>
                <hr/>
                
                <div >
                <Link to="/about" className={styles.hideLinkUnderline}>
                About Us
                  </Link>
                  </div>
                <hr/>
                <div >
                <Link to="/services" className={styles.hideLinkUnderline}>
                Services
                </Link>
                <span style={{float:"right"}}> <AiFillCaretDown/> </span>
                 {
                   window.location.pathname=="/services" ||
                   window.location.pathname=="/custom" ||
                    window.location.pathname=="/ecommerce" || 
                    window.location.pathname=="/logo"  ||
                    window.location.pathname=="/mobile" ?
                   <div>
                   <Link to="/custom" className={styles.hideLinkUnderline1}><AiFillCaretRight/> Custom Development</Link>
                  
                   <Link to="/ecommerce" className={styles.hideLinkUnderline1}><AiFillCaretRight/> E-Commerce</Link>
                   
                   <Link to="/logo"className={styles.hideLinkUnderline1} ><AiFillCaretRight/>Logo</Link>
                   
                   <Link to="/mobile" className={styles.hideLinkUnderline1}><AiFillCaretRight/> Mobile Apps</Link>
                   </div>

                   :null
                 }

                 
                  </div>
                <hr/>
                <div >
                <Link to="/blogs" className={styles.hideLinkUnderline}>
               Blogs
                  </Link>
                  </div>
                <hr/>
                <div >
                <Link to="/contact" className={styles.hideLinkUnderline}>
               Contact Us
                  
                  </Link>
                  </div>
                <hr/>
                <div >
                <Link to="/signin" className={styles.hideLinkUnderline}>
                  My Account
                  </Link>
                  </div>

                <div style={{position:"absolute",bottom:"20px"}}>
                <div className={styles.contactLogo1}>
                            <IoIosChatbubbles className={styles.color} />
                                Live Chat
                            </div>
                            <hr/>
                            <div className={styles.contactLogo1}>
                            <FiPhoneCall className={styles.color} />
                                +1-209-921-658
                            </div>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          </>
        );
      }
      
      const popover = (
        <Popover id="popover-contained">
         
          <Popover.Body style={{width:"100%"}}>
           {/* <ul>
             <li className={styles.menuItem1}> */}
              <Link to="/custom" className={styles.hideLinkUnderline}> Custom Development</Link>
              <hr/>
              <Link to="/ecommerce" className={styles.hideLinkUnderline}> E-Commerce</Link>
              <hr/>
              <Link to="/logo"className={styles.hideLinkUnderline} >Logo</Link>
              <hr/>
              <Link to="/mobile" className={styles.hideLinkUnderline}> Mobile Apps</Link>

             
          </Popover.Body>
        </Popover>
      );

    return (
       <div className={styles.font}>
          <Row style={{backgroundColor:"#ffffff"}}>
                    <Col xs={6} sm={6} md={3} className={styles.logoCol}>
                        <Link to="/ ">
                        <img src={Logo} className={styles.logo}/>
                        </Link>
                    </Col>
                    <Col md={9} lg={9} className="d-none d-md-block d-lg-block">
                        <div className={styles.contact} >
                        <span className={styles.contactLogo}>
                            <IoIosChatbubbles className={styles.color} />
                                Live Chat
                            </span>
                            <span className={styles.contactLogo}>
                            <FiPhoneCall className={styles.color} />
                                +1-209-921-658
                            </span>
                            <span className={styles.contactLogo}>
                            <RiAccountCircleLine className={styles.color} />
                               <Link to="/signin" className={styles.hideLinkUnderline}>My Account</Link>
                            </span>
                            
                 
                        </div>
                        <Bounce>
                        <div className={styles.menuAlign}>
                          
                            <ul>
                            <li className={styles.menuItem}>
                              <Link to="/" className={styles.hideLinkUnderline}>
                                {window.location.pathname=="/" ? <span className={styles.active}>Home Page</span> : <span>Home Page</span> }
                                </Link>
                              </li>
                            <li className={styles.menuItem}>|</li>
                            <li className={styles.menuItem}><Link to="/about" className={styles.hideLinkUnderline}>
                            {window.location.pathname=="/about" ? <span className={styles.active}>About</span> : <span>About</span> }
                              </Link></li>
                            <li className={styles.menuItem}>|</li>
                            <li className={styles.menuItem}>
                            <OverlayTrigger trigger={["hover",'focus','click']} delay={{show:200, hide:4000}} placement="bottom" overlay={popover}>
                            <button className={styles.dropdown} >
                            {window.location.pathname=="/services" ||
                             window.location.pathname=="/custom" ||
                              window.location.pathname=="/ecommerce" || 
                              window.location.pathname=="/logo"  ||
                              window.location.pathname=="/mobile" ? <span className={styles.active}> Services <AiFillCaretDown/></span> : 
                              <Link to="/services" className={styles.hideLinkUnderline}> 
                              <span>Services<AiFillCaretDown/></span> 
                              </Link>}
                              </button>
                          </OverlayTrigger>
                                
                            </li>
                            {/* <li className={styles.menuItem}>|</li>
                            <li className={styles.menuItem}><Link to="/blogs" className={styles.hideLinkUnderline}>Blogs</Link></li> */}
                            <li className={styles.menuItem}>|</li>
                            <li className={styles.menuItem}><Link to="/contact" className={styles.hideLinkUnderline}>
                            {window.location.pathname=="/contact" ? <span className={styles.active}>Contact Us</span> : <span>Contact Us</span> } 
                              </Link></li>
                            </ul>
                             
                        </div>
                        </Bounce>
                      
                    </Col>
                    <Col xs={6} sm={6}>
                        <Example/>
                    </Col>

                </Row>
            
       </div>
    )
}
