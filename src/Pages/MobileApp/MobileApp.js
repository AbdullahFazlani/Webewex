import React from 'react';
import Branding from '../About Us/Branding';
import Map from '../About Us/Map';
import { Footer } from '../Components/Footer/Footer';
import { Topbar } from '../Components/TopBar/topbar';
import { Review } from '../HomePage/Client Reviews/Review';
import { Demonstrate } from '../HomePage/Demonstrated Skills/demonstrate';
import AboutMobile from './AboutMobile';
import MobileDevelopment from './MobileDevelopment';
import MobileExpertise from './MobileExpertise';
import { MobileHeader } from './MobileHeader';
import { MobilePackage } from './MobilePackage';

const MobileApp = () => {
  return <div>
      <Topbar/>
      <MobileHeader/>
      <AboutMobile/>
      <MobileExpertise/>
      <Map/>
      <MobileDevelopment/>
      <MobilePackage/>
      <div style={{marginTop:"10%",marginBottom:"10%"}}>
      <Branding/>
      </div>
      <Demonstrate/>
      <Review/>
      <Footer/>
  </div>;
};

export default MobileApp;
