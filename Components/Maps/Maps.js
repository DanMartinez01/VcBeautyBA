import React, { Component } from 'react';
import styles from './Maps.module.css';
import GoogleMapReact from 'google-map-react';
import { MdOutlineLocationOn } from 'react-icons/md';


const LocationPin = ({ text }) => (
    <div className={styles.pin}>
        <span>
            <MdOutlineLocationOn size="32px" color="red" />
            <p className={styles.pinText}>{text}</p>
        </span>
    </div >
)
const Maps = ({ location, zoomLevel }) => (
    <div>
        <hr />
        <div className={styles.mapH2}>
            {/* <Image className={styles.Image}
                src={Logo}
                width="60px"
                height="60px"
            /> */}
            Ubicación
        </div>
        {/* <hr /> */}
        <div className={styles.map}>
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
    </div>
)
export default Maps
