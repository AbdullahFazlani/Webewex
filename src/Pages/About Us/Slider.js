import React from 'react';
import Slider from "react-slick";
import slide1 from '../../Images/aboutSlideImage1.png'
import slide2 from '../../Images/aboutSlideImage2.png'
import slide3 from '../../Images/aboutSlideImage3.png'
import slide4 from '../../Images/aboutSlideImage4.png'
import slide5 from '../../Images/aboutSlideImage5.png'
import slide6 from '../../Images/aboutSlideImage6.png'
import slide7 from '../../Images/aboutSlideImage7.png'
import styles from '../../CSS/About/Slider.module.css'


const Slider1 = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
      
        cssEase: "linear",responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
      };
  return <div style={{overflowX:"hidden"}}>
        <Slider {...settings}>
            {[slide1,slide2,slide3,slide4,slide5,slide6,slide7].map((image)=>{
                return(
                <div>
                    <img src={image} className={styles.image}/>
                </div>
                )
            })}  
                   
        </Slider>
    </div>;
};

export default Slider1;
