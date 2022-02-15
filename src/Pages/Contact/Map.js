import React from 'react';
import styles from '../../CSS/Contact/Map.module.css'

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';  

const Map1 = (props) => {
 
  
  return <div >
  <Map google={props.google} zoom={14} className={styles.map}
  initialCenter={{
    lat: 34.011580,
    lng: -117.860290
  }}
  >
 
 <Marker 
         name={'Webewex'} />

 <InfoWindow >
    
 </InfoWindow>
</Map>
  </div>;
};


export default GoogleApiWrapper({
  apiKey: 'AIzaSyDUb7T6nRYise1yP93Y1RbdXESTKAqf6P4'
})(Map1);
