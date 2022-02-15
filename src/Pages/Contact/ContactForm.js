import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import styles from '../../CSS/Contact/ContactForm.module.css'
import logo1 from '../../Images/phoneIcon.png'
import logo2 from '../../Images/EmailIcon.png'
import logo3 from '../../Images/LocationIcon.png'
import Zoom from 'react-reveal/Zoom'

const ContactForm = () => {

  return <div style={{overflow:"hidden"}}>
      
      <Zoom>
      <Row >
          <Col md={5}>
        <Contact 
        name="Phone"
        desc="Have a question? We are available 24/7 to answer your queries."
        address="+1-209-921-6581"
        logo={logo1}
        />
        
          <Contact 
        name="Email"
        desc="Our support team will get back to within 48 hours
        during standard business hours."
        address="info@webewox.com.pk"
        logo={logo2}/>

          <Contact 
        name="Address"
        desc="We are located at the following address:"
        address="340 S LEMON AVE #8097 WALNUT,
        CA 91789"
        logo={logo3}
        />

          </Col>
          
          <Col md={7}>
              <div className={styles.formBg}>

                    <div >
                    <span className={styles.formHeader}>
                    Contact Us
                    </span>
                    </div>

                    <div className={styles.formTitle}>
                    Please feel free to contact us by filling in the form below and our support
                    team will handle the rest.
                    </div>

                <form className={styles.form}>
                  
                       <Row>
                           <Col md={6}>
                            <input type="text" placeholder="First Name *" className={styles.input}/>
                            <input type="text" placeholder="Phone Number *" className={styles.input}/>
                            <input type="text" placeholder="Email Address *" className={styles.input}/>
                           </Col>
                           <Col md={6}>
                               <textarea className={styles.textarea} >Your message goes here *</textarea>
                           </Col>
                       </Row>
                  <div className={styles.check}>
                      <span style={{display:"inline-block"}} >  <input type="checkbox" name='contactForm'/></span>
                     <span className={styles.checkText}  >  Yes, I would like to receive news, promotional offers, and information
                        regarding Logo Influx products and services electronically at any time.
                    </span>
                </div>
                </form>

                <input type="submit" value='Submit Now' className={styles.button}/>
              </div>
          </Col>
      </Row>
      </Zoom>
        </div>;
};

export default ContactForm;

const Contact=(props)=>{
return(
    <div className={styles.contact}>
        <div className={styles.contactName}><img src={props.logo} height={50}/> {props.name}</div>
        <div className={styles.contactDesc}>{props.desc}</div>
        <div className={styles.contactAddress}>{props.address}</div>
    </div>
)
}