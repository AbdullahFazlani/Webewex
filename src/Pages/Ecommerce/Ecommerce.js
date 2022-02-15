import React from 'react';
import Branding from '../About Us/Branding';
import Map from '../About Us/Map';
import { Footer } from '../Components/Footer/Footer';
import { Topbar } from '../Components/TopBar/topbar';
import Expertise from '../Custom/Expertise';
import { Review } from '../HomePage/Client Reviews/Review';
import { Demonstrate } from '../HomePage/Demonstrated Skills/demonstrate';
import { Packages } from '../HomePage/Packages/Packages';
import { Portfolio } from '../HomePage/Portfolio/Portfolio';
import AboutEcommerce from './AboutEcommerce';
import EcommerceDevelopment from './EcommerceDevelopment';
import { EcommerceHeader } from './EcommerceHeader';
import { EcommercePackage } from './EcommercePackage';

const Ecommerce = () => {
  return <div>
      <Topbar/>
      <EcommerceHeader/>
      <AboutEcommerce/>
      <Expertise/>
      <Map/>
      <EcommerceDevelopment/>
      <EcommercePackage/>
      <div style={{margin:"10% 0%"}}>
      <Branding/>
      </div>
      <Demonstrate/>
      <Review/>
      <Footer/>
  </div>;
};

export default Ecommerce;
