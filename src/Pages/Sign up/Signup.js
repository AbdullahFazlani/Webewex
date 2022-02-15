import React, { useState } from 'react';
import { AiOutlineLine, AiOutlineMinus } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Button, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import styles from '../../CSS/Signup/Signup.module.css'
import image1 from '../../Images/signUpImg2.png'

  
 
const Signup = () => {
   
  return <div className={styles.background}>
  
            <Row>
                <Col md={4}>
                <div className={styles.header1}>
                      <span className={styles.color}><AiOutlineLine style={{fontSize:"50px"}}/></span>
                       Welcome to <span className={styles.color}> Webewox</span>
            </div>
            <h1 className={styles.h1}> <span className={styles.color}> SIGN UP NOW!</span></h1>

            <div className={styles.form}>
                            <form>
                                <input type="text" placeholder='Full Name *' className={styles.input}/>
                                <input type="email" placeholder='Email *' className={styles.input}/>
                                <input type="text" placeholder='Number *' className={styles.input}/>
                                <input type="password" placeholder='Password *' className={styles.input}/>
                               
                                <button className={styles.loginButton}>
                                    Sign Up
                                </button>

                            </form>
            </div>
           <div className={styles.greyText}>
          Already a Member?
          <Link to="/signin" className={styles.color}>
          <span > 
          &nbsp;SignIn
          </span>
          </Link>
          
            </div>
            <div className={styles.back}> 
         <Link to="/" className={styles.back}>
          &lt; Back to Hamepage
          </Link>
          </div>
                </Col>
                <Col md={8}  className='d-none d-md-block d-lg-block'>
                    <div className={styles.image1}>
                        <img src={image1} width={600}/>
                    </div>
                </Col>
            </Row>
           
        </div>;
};

export default Signup;
