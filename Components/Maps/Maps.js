import React, { Component } from 'react';
import styles from './Maps.module.css';
import Image from 'next/image';
import GoogleMapReact from 'google-map-react';
import { MdOutlineLocationOn } from 'react-icons/md';
import Logo from '../../Assets/logo.png';


const LocationPin = ({ text }) => (
    <div className={styles.pin}>
        <span>
            <p className={styles.pinText}>{text}</p>
            <MdOutlineLocationOn size="32px" color="red" />
        </span>
    </div >
)
const Maps = ({ location, zoomLevel }) => (
    <div>
        <div className={styles.mapH2}>
            <Image className={styles.Image}
                src={Logo}
                width="60px"
                height="60px"
            />
            Ubicación
        </div>
        <hr />
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
