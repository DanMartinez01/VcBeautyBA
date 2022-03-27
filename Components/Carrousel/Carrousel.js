import Image from 'next/dist/client/image';
import styles from './Carrousel.module.css';
import { Carousel } from 'react-bootstrap';
import CarImg1 from '../../Assets/2.png';
import CarImg4 from '../../Assets/4.jpg';
import CarImg3 from '../../Assets/3.jpg';
import React, { Component } from 'react';


export const Carrousel = () => {
    return (
        <div className={styles.container}>
            <Carousel controls={false} indicators={false}>
                <Carousel.Item align="center" className={styles.CarouselItem}>
                    <Image
                        className={styles.carouselImg}
                        src={CarImg1}
                        alt="First slide"

                        height="600px"
                    />
                </Carousel.Item >
                <Carousel.Item align="center" className={styles.CarouselItem}>
                    <Image
                        className={styles.carouselImg}
                        src={CarImg1}
                        alt="Second slide"

                        height="600px"
                    />
                </Carousel.Item>
                <Carousel.Item align="center" className={styles.CarouselItem}>
                    <Image
                        className={styles.carouselImg}
                        src={CarImg1}
                        alt="Third slide"

                        height="600px"
                    />
                </Carousel.Item>
            </Carousel>
        </div>

    )
}
export default Carrousel