import React from 'react';
import Branding from '../About Us/Branding';
import Map from '../About Us/Map';
import { Footer } from '../Components/Footer/Footer';
import { Topbar } from '../Components/TopBar/topbar';
import { Review } from '../HomePage/Client Reviews/Review';
import { Demonstrate } from '../HomePage/Demonstrated Skills/demonstrate';
import { Packages } from '../HomePage/Packages/Packages';
import { Portfolio } from '../HomePage/Portfolio/Portfolio';
import AboutCustom from './aboutCustom';

import CustomHeader from './CustomHeader';
import { CustomPackages } from './CustomPackages';


import Expertise from './Expertise';
import WebsiteDevelopment from './WebsiteDevelopment';

const Custom = () => {
  return <div>
      <Topbar/>
      <CustomHeader/>
      <AboutCustom/>
      <Expertise/>
      <Map/>
      <WebsiteDevelopment/>
      <CustomPackages/>
     <div style={{marginTop:"10%",marginBottom:"10%"}}>
      <Branding/>
      </div>
      <Demonstrate/>
      <Review/>
      <Footer/>
  </div>;
};

export default Custom;
