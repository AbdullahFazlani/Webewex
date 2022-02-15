import React from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { BsCheck2Circle } from 'react-icons/bs';
import { IoIosChatbubbles } from 'react-icons/io';
// import { IoChatbubbles } from 'react-icons/io';
import { Col, Row } from 'reactstrap';
import styles from '../../CSS/About/Map.module.css'
import Zoom from 'react-reveal/Zoom';


const Map = () => {
  return <div className={styles.mapBackground}>
      <Zoom>
      <Row>
          <Col md={12}>
              <div className={styles.mapHeading}>
                  Ready To Place Your Order?
              </div>
              <div className={styles.mapTitle}>
                  Or Get In Touch With Our Design Consultant!
              </div>
              <div className={styles.buttonSection}>
                    <button className={styles.buttonSelect}>
                        <BsCheck2Circle/>
                       &nbsp; Select Package
                        </button>
                    <button className={styles.buttonChat}>
                  <IoIosChatbubbles/>
                  &nbsp;Live Chat</button>
              </div>
              <div className={styles.call}>
                  or call us at <BiPhoneCall className={styles.color}/> +1-209-921-6581
              </div>
          </Col>
      </Row>
      </Zoom>
  </div>;
};

export default Map;
