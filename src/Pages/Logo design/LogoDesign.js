import React from 'react';
import Branding from '../About Us/Branding';
import Map from '../About Us/Map';
import { Footer } from '../Components/Footer/Footer';
import { Topbar } from '../Components/TopBar/topbar';
import { Review } from '../HomePage/Client Reviews/Review';
import { Demonstrate } from '../HomePage/Demonstrated Skills/demonstrate';
import { Packages } from '../HomePage/Packages/Packages';
import { Portfolio } from '../HomePage/Portfolio/Portfolio';
import AboutLogo from './AboutLogo';
import LogoDevelopment from './LogoDevelopment';
import { LogoHeader } from './logoHeader';
import { LogoPackage } from './LogoPackage';
import LogoType from './LogoType';

const LogoDesign = () => {
  return <div>
      <Topbar/>
      <LogoHeader/>
      <AboutLogo/>
      <LogoType/>
      <Map/>
      {/* <Portfolio/> */}
      <LogoDevelopment/>
      <LogoPackage/>
      <div style={{marginTop:"10%",marginBottom:"10%"}}>
      <Branding/>
      </div>
      <Demonstrate/>
      <Review/>
      <Footer/>
  </div>;
};

export default LogoDesign;
