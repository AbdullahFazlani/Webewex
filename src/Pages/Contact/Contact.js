import React from 'react';
import { Footer } from '../Components/Footer/Footer';
import { Topbar } from '../Components/TopBar/topbar';
import AboutContact from './AboutContact';
import ContactForm from './ContactForm';
import { Header } from './Header';
import Map1 from './Map';
import styles from '../../CSS/Contact/ContactForm.module.css'



const Contact = () => {
  return <div>
      <Topbar/>
      <Header/>
      <AboutContact/>
      <ContactForm/>
      <Map1/>
      <div className={styles.footer}> 
      <Footer/>
      </div>
  </div>;
};

export default Contact;
