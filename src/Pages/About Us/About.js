import React from 'react'
import { Footer } from '../Components/Footer/Footer'
import { Topbar } from '../Components/TopBar/topbar'
import { Review } from '../HomePage/Client Reviews/Review'
import { Services } from '../HomePage/Services/Service'
import AboutSection from './aboutSection'
import Branding from './Branding'
import {Header} from './Header'
import Map from './Map'
import Slider1 from './Slider'

export const About = () => {
    return (
        <div>
            <Topbar/>
            <Header/>
            <Slider1/>
            <AboutSection/>
            <Services/>
            <Map/>
            <Branding/>
            <Review/>
            <Footer/>
        </div>
    )
}
