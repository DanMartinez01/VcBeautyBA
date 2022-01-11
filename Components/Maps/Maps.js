import React, { Component } from 'react';
import styles from './Maps.module.css';
import GoogleMapReact from 'google-map-react';
import { MdOutlineLocationOn } from 'react-icons/Md';


const LocationPin = ({ text }) => (
    <div className={styles.pin}>
        <span>
            <p className={styles.pinText}>{text}</p>
            <MdOutlineLocationOn size="32px" color="red" />
        </span>
    </div >
)
const Maps = ({ location, zoomLevel }) => (

    <div className={styles.map}>
        <h1 className={styles.mapH2}>Ubicación</h1>
        <hr />
        <div className={styles.googleMap}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY }}
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
