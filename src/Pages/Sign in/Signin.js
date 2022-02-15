import React from 'react';
import { AiOutlineLine, AiOutlineMinus } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import styles from '../../CSS/Signup/Signin.module.css'
import image1 from '../../Images/signInImg1.png'

const Signin = () => {
  return <div className={styles.background}>
            <Row>
                <Col xs={12} sm={12} md={4}>
                <div className={styles.header1}>
                      <span className={styles.color}><AiOutlineLine style={{fontSize:"50px"}}/></span>
                       Welcome to <span className={styles.color}> Webewox</span>
            </div>
            <h1>Member <span className={styles.color}> Login</span></h1>

            <div className={styles.form}>
                            <form>
                                <input type="email" placeholder='Email *' className={styles.input}/>
                                <input type="password" placeholder='Password *' className={styles.input}/>
                                <div className={styles.greyText}>
                                    Forget your Password?
                                </div>
                                <button className={styles.loginButton}>
                                    Login Now
                                </button>

                            </form>
            </div>
           <div className={styles.greyText}>
            New to Webewox? <span className={styles.color}> 
           <Link to="/signup" className={styles.hideLink}>&nbsp;SignUp</Link> 
            </span>
            </div>
         <div className={styles.back}> 
         <Link to="/" className={styles.back}>
          &lt; Back to Hamepage
          </Link>
          </div>
                </Col>
                <Col md={8} className='d-none d-md-block d-lg-block'>
                    <div className={styles.image1}>
                        <img src={image1} width={600}/>
                    </div>
                </Col>
            </Row>
           
        </div>;
};

export default Signin;
