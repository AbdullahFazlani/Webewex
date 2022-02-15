import React from 'react';
import { BsCheck2Square } from 'react-icons/bs';
import { Col, Container, Row } from 'reactstrap';
import styles from '../../CSS/Signup/SignupModal.module.css'
import image1 from '../../Images/signUpImg1.png'

const SignupModal = () => {
  return <div>
      <Container>
          <Row className='mt-3 g-0' >
              <Col md={6} className={styles.col}>
                <div className={styles.background}>
                   {/* <div className={styles.image1}> */}
                    <img src={image1} className={styles.image1}/>
                    {/* </div> */}
                    <div className={styles.content}>
                    <div className={styles.heading}>
                        <h4> Why You'll love <span className={styles.color}>our Design</span></h4>
                     </div>
                  
                    <p><BsCheck2Square className={styles.check}/> UNLIMITED Pages Website</p>
                    <p><BsCheck2Square className={styles.check}/> Content Management System (CMS)</p>
                    <p><BsCheck2Square className={styles.check}/> Mobile Responsive</p>
                    <p><BsCheck2Square className={styles.check}/> The easiest, most powerful logo</p>
                    <p><BsCheck2Square className={styles.check}/> Any 3 Social Media Platforms</p>
                    <p><BsCheck2Square className={styles.check}/> Complete W3C Certified HTML</p>
                    <p><BsCheck2Square className={styles.check}/> Complete Deployment</p>
                </div>
                </div>
                
                

              </Col>
              <Col md={6} className={styles.col}>
                    <div className={styles.background1}>
                        <h2 className={styles.heading1}>
                            Welcome to <span className={styles.color}> Webewox</span>
                        </h2>
                        <div className={styles.title}>
                        Complete our form and we'll get right back to you.
                        </div>

                        <div>
                            <form>
                                <input type="text" placeholder='First Name *' className={styles.input}/>
                                <input type="text" placeholder='Last Name *' className={styles.input}/>
                                <input type="email" placeholder='Email *' className={styles.input}/>
                                <input type="number" placeholder='Phone Number *' className={styles.input}/>
                                <input type="password" placeholder='Password *' className={styles.input}/>
                                <button className={styles.button}>SIGN UP</button>
                            </form>
                        </div>
                        <div className={styles.account}>
                            Already have an Account ? <span className={styles.color}>Sign in</span>
                        </div>
                    </div>
                    
              </Col>
          </Row>
      </Container>
  </div>;
};

export default SignupModal;
