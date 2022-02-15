import React from 'react';
import Branding from '../About Us/Branding';
import Map from '../About Us/Map';
import { Footer } from '../Components/Footer/Footer';
import { Topbar } from '../Components/TopBar/topbar';
import { Review } from '../HomePage/Client Reviews/Review';
import { Demonstrate } from '../HomePage/Demonstrated Skills/demonstrate';
import { Packages } from '../HomePage/Packages/Packages';
import { Portfolio } from '../HomePage/Portfolio/Portfolio';
import { Services } from '../HomePage/Services/Service';
import AboutService from './AboutService';
import ServiceHeader from './ServiceHeader';

const Service = () => {
  return <div>
      <Topbar/>
      <ServiceHeader/>
      <AboutService/>
      <Services/>
      <Map/>
      <div style={{marginTop:"-7%",marginBottom:"5%"}}>
      <Portfolio/>
      </div>
      <Packages/>
    <div style={{marginTop:"7%",marginBottom:"7%"}}>
      <Branding/>
      </div>
      <Demonstrate/>
      <Review/>
      <Footer/>
  </div>;
};

export default Service;
