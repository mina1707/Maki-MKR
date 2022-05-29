import React from 'react'
import NavBar from './NavBar'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import styles from "./TrackOrder.module.css"



const TrackOrder = (props) => {


  const { isLoaded } = useLoadScript({ googlemapsApiKey: "AIzaSyA3-Yin62_vTccxBtVqCgULihe1_ESu8_k" })
  return (
    <div>
      <NavBar />
      <h2 className={styles.textAlignm}>Order Success!!</h2>

      <div className={styles.mapDiv}>
      <Map isLoaded={isLoaded}  />

      </div>

    </div>

  )
}

export default TrackOrder


function Map({ isLoaded }) {
  const [map, setMap] = React.useState(null)
  const center = {
    lat: -3.745,
    lng: -38.523
  };

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  return (
    isLoaded ? <GoogleMap zoom={10} center={{ lat: 44, lng: -80 }} onLoad={onLoad} mapContainerClassName={styles.mapContainer}></GoogleMap> : <></>
  )
}

