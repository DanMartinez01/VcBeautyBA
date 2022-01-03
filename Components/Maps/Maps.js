import React, { Component } from 'react';
import styles from './Maps.module.css';
import GoogleMapReact from 'google-map-react'
import GrLocationPin from 'react-icons/gr';



const LocationPin = ({ text }) => (
    <div className={styles.pin}>
        {/* <Icon icon={GrLocationPin} className={styles.pinIcon} /> */}
        <p className={styles.pinText}>{text}</p>
    </div>
)
const Maps = ({ location, zoomLevel }) => (

    <div className={styles.map}>
        <h2 className={styles.mapH2}>Ubicacion</h2>
        <div className={styles.googleMap}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                defaultCenter={location}
                defaultZoom={zoomLevel}
            >
                <LocationPin
                    lat={location.lat}
                    lng={location.lng}
                    text={location.address}
                />
            </GoogleMapReact>
        </div>
    </div>
)
export default Maps
