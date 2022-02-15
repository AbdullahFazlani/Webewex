import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'reactstrap'
import { Footer } from '../Components/Footer/Footer'
import { Header } from '../Components/Header/Header'
import { Topbar } from '../Components/TopBar/topbar'
import { About } from './About Section/about'
import { Review } from './Client Reviews/Review'
import { Combo } from './Combo Package/Combo'
import { Demonstrate } from './Demonstrated Skills/demonstrate'
import { Packages } from './Packages/Packages'
import { Portfolio } from './Portfolio/Portfolio'
import { Services } from './Services/Service'


export const Homepage = () => {
  

    return (
        <div style={{overflowY:"visible"}}>
           
            <Topbar/>
            <Header/>
          <About/>
             <Services/>
          
               <Portfolio/>
          <Packages/>
             <Combo/>
            <Demonstrate/>
              <Review/>
            <Footer/> 
        </div>
    )
}
