import React from 'react'
import { Button, Col, Row } from 'reactstrap'
import styles from '../../../CSS/Component/CardPackage1.module.css'
import {IoIosChatbubbles} from 'react-icons/io'
import {FiPhoneCall} from 'react-icons/fi'

export const CardPackage1 = (props) => {
    return (
        <div className={styles.card}>
            < div ><img src={props.img} className={styles.cardImage}/></div>
            <div className={styles.content}>
                <h1 className={styles.cardHeader}>{props.heading}</h1>
                <div className={styles.cardPoints}>
                    Free GrayScale Format
                </div>
               
                <div className={styles.cardPoints}>
                    Free Icon
                </div>
               
                <div className={styles.cardPoints}>
                    24 to 48 Hours TAT
                </div>
               
                <div className={styles.cardPoints}>
                    All Files Format
                </div>
              
                <div className={styles.cardPoints}>
                    100% Ownershidiv Rights
                </div>
               
                <div className={styles.cardPointsLast}>
                    100% Money Back Guarantee
                </div>
               
               <Row>
                   <Col xs={6} sm={6} md={6} className={styles.priceCol}>
                      <div className={styles.dollar}>$</div> 
                       <span className={styles.price}>
                           {props.price}
                       </span>
                   </Col>
                   <Col xs={6} sm={6} md={6} className={styles.discount}>
                       <div><strike > $175</strike></div>
                       <div className={styles.off}>60% Off</div>
                   </Col>
               </Row>
                
                <button className={styles.orderButton}>
                    Order Now
                </button>
               <div className={styles.contact}>
                <span className={styles.chat}>
                <IoIosChatbubbles className={styles.contactIconColor}/>
                Live Chat
                </span>
                <span className={styles.chat}>
                    
                    <FiPhoneCall className={styles.contactIconColor}/>
                    +1-209-921-6581
                </span>
                </div>
            </div>
        </div>
    )
}
