import React from 'react';
import styles from '../../CSS/Custom/Expertise.module.css'
import slide1 from '../../Images/expertSlide1.png'
import slide2 from '../../Images/expertSlide2.png'
import slide3 from '../../Images/expertSlide3.png'
import Slider from "react-slick";
import '../../App.css';
import {MdOutlineSwipe} from 'react-icons/md'
import {FaLongArrowAltLeft, FaLongArrowAltRight} from 'react-icons/fa'
import icon1 from '../../Images/iconS1.png'
import icon2 from '../../Images/iconS2.png'
import icon3 from '../../Images/iconS3.png'
import icon4 from '../../Images/iconS4.png'
import icon5 from '../../Images/iconS5.png'
import icon6 from '../../Images/iconS6.png'
import { Col, Row } from 'reactstrap';
import Zoom from 'react-reveal/Zoom'

const icon=[
    {
    image:icon1,
    desc:"Mobile Compatible"
    },
    {
    image:icon2,
    desc:"Fast Load Time"
    },
    {
    image:icon3,
    desc:"Error Free Management"
    },
    {
    image:icon4,
    desc:"Easy User Access"
    },
    {
    image:icon5,
    desc:"Smooth Navigation"
    },
    {
    image:icon6,
    desc:"Browser Consistent"
    },
]

var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

const Expertise = () => {
    
  return <div className={styles.main}>
    <Zoom>
      <div className={styles.header}>
      We’ve Expertise To Develop <span className={styles.color}>Variety Of Websites</span>
      </div>
      <div className={styles.title}>
      Portray Your Business With An Excellent Website Design
      </div>
   <div style={{marginLeft:"7%"}}>
      <Slider {...settings}>
          <div className={styles.container} >
            <img src={slide1} className={styles.image}/>
           <div className={styles.bottomText}> PHP Development</div>
          </div>
          <div className={styles.container} >
          <img src={slide2} className={styles.image}/>
          <div className={styles.bottomText}> Wordpress Development</div>
          </div>
          <div className={styles.container} >
          <img src={slide3} className={styles.image}/>
          <div className={styles.bottomText}> Laravel Development</div>
        </div>
          <div className={styles.container} >
            <img src={slide1} className={styles.image}/>
            <div className={styles.bottomText}> PHP Development</div>
          </div>
          <div className={styles.container} >
          <img src={slide2} className={styles.image}/>
          <div className={styles.bottomText}> Wordpress Development</div>
          </div>
          <div className={styles.container} >
          <img src={slide3} className={styles.image}/>
          <div className={styles.bottomText}> Laravel Development</div>
          </div>
          
        </Slider>
        </div>
      <div className={styles.drag}>
        <div><MdOutlineSwipe style={{color:"#bd1e2e"}}/></div>
        <FaLongArrowAltLeft/>Drag to Explore more
        <FaLongArrowAltRight/>
    </div>
    <div className={styles.gradient}>
            <Row>
            {icon.map((icons)=>{
                return(
                    <Col xs={6} sm={6} md={2}>
                       <div>
                        <img src={icons.image} className={styles.imageIcon}/>
                       <div className={styles.iconDesc}> {icons.desc}</div>
                       </div>
                    </Col>
                )
            })}
            </Row>
    </div>
    </Zoom>
  </div>;

};

export default Expertise;
