import React from 'react'
import NavBar from './NavBar'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import styles from "./TrackOrder.module.css"



export default function TrackOrder() {

  const {isLoaded} = useLoadScript({
    googleMapsApiKey:"AIzaSyA3-Yin62_vTccxBtVqCgULihe1_ESu8_k"
  });

  if(!isLoaded) return <div>loading...</div>;
  return ( 
  <>
  <NavBar/>

  <h1>Order Success!</h1>
  <h3>Your order is in your way.</h3>
  <div className= {styles.alignmap}>
  <Map/>
  </div>
  
  </>
  
  )

}

function Map() {
  return(
    <GoogleMap zoom={10} center={{lat : 47, lng: -122 }}
    mapContainerClassName={styles.mapContainer}
    >
    <Marker position= {{lat : 47, lng: -122 }}/>
    <Marker position= {{lat : 46, lng: -124 }}/>
    <Marker position= {{lat : 45, lng: -123 }}/>

    </GoogleMap>
  );
}
