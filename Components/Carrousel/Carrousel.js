import Image from 'next/dist/client/image';
import styles from './Carrousel.module.css';
import { Carousel } from 'react-bootstrap';
import CarImg1 from '../../Assets/2.jpg';
import CarImg4 from '../../Assets/4.jpg';
import CarImg3 from '../../Assets/3.jpg';
import React, { Component } from 'react';


export const Carrousel = () => {
    return (
        <div className={styles.container}>
            <Carousel controls={false} indicators={false}>
                <Carousel.Item align="center">
                    <Image
                        className="carouselImg"
                        src={CarImg1}
                        alt="First slide"
                        height="1100px"
                    />
                </Carousel.Item >
                <Carousel.Item align="center">
                    <Image
                        className={styles.carouselImg}
                        src={CarImg4}
                        alt="Second slide"
                        height="1100px"
                    />
                </Carousel.Item>
                <Carousel.Item align="center">
                    <Image
                        className={styles.carouselImg}
                        src={CarImg3}
                        alt="Third slide"
                        height="1100px"
                    />
                </Carousel.Item>
            </Carousel>
            {/* <div className={styles.banner}>
                <h5 className={styles.title}> Descubrí  VC </h5>
            </div> */}
        </div>

    )
}
export default Carrousel