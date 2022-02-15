import React from 'react'
import { Carousel, Col, Container, Row } from 'reactstrap'
import styles from '../../../CSS/Homepage/Review.module.css'

import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import { ReviewCard } from './ReviewCard';

export const Review = () => {
    // const Container = styled.span`
    //             border: 1px solid red;
    //             position: relative;
    //             float: right;
    //             overflow: hidden;
    //             width: 300px;
    //             height: 150px;
    //             `;
    const CarouselUI = ({ children }) => <div className={styles.slider}>{children}</div>;
    const Carousel = makeCarousel(CarouselUI);

    return (
        <div className={styles.main}>
          
               <Row>
               
                   <Col xs={12} sm={12} md={5}>
                       <div className={styles.heading}>
                           What Our Clients
                           <div style={{color:"#bc1e2d"}}>
                             Are Saying
                                <div> About Us </div>
                           </div>
                       </div>
                   </Col>
                
                  
                   <Col xs={12} sm={12} md={7}>
                   <div className={styles.carousel}>
                    
                   <Carousel defaultWait={2000} /*wait for 1000 milliseconds*/ >
                      <Slide right>
                        <div>
                            <ReviewCard/>
                        </div>
                        </Slide>
                        <Slide right>
                        <div>
                            <ReviewCard/>
                        </div>
                        </Slide>
                   
                    </Carousel>
                    </div>
                   </Col>
                  
               </Row>
          
        </div>
    )
}
 