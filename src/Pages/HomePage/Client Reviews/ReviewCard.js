import React from 'react'
import { Col, Row } from 'reactstrap'
import styles from '../../../CSS/Homepage/Review.module.css'
import {ImQuotesLeft, ImQuotesRight} from 'react-icons/im'
import {AiFillStar} from 'react-icons/ai'
import customer1 from '../../../Images/review1.png'
export const ReviewCard = () => {
    return (
        <div >
            <Row  >
                <Col sm={8} md={8} > 
                    <div className={styles.area1}>
                    <div style={{fontSize:"25px"}}><ImQuotesLeft/></div>
                    <div style={{fontSize:"18px"}}>
                        <i>
                            I have had nothing but GREAT client service.
                            I have no reservations about 
                            recommending Logo Genies to other 
                            nonprofits in my community. Their pricing is 
                            reasonable and their associates are 
                            always professional. You can expect great
                            service.
                        </i>
                    </div>
                    
                    <div style={{float:"right",fontSize:"25px"}}><ImQuotesRight/></div>
                    </div>
                </Col>
                <Col sm={4} md={4} className={styles.area2}> 
                    <div><img src={customer1} className={styles.reviewImage}/></div>
                <div className={styles.author}>   
                    <div style={{color:"#bc1e2c"}}>Steven J. Mils</div>
                    <div >CEO</div>
                    <div style={{color:"#bc1e2c"}}>
                        {[1,2,3,4,5].map((index)=>{
                            return(
                                <AiFillStar/>
                            ) 
                        })}
                        </div>
                </div>  
                </Col>
            </Row>
        </div>
    )
}
