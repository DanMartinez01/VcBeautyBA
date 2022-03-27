import Image from 'next/dist/client/image';
import styles from './Carrousel.module.css';
import { Carousel } from 'react-bootstrap';
import CarImg1 from '../../Assets/banner1.png';
import CarImg2 from '../../Assets/banner2.png';
import CarImg3 from '../../Assets/banner3.png';
import React, { Component } from 'react';


export const Carrousel = () => {
    return (
        <div className={styles.container}>
            <Carousel controls={false} indicators={false}>
                <Carousel.Item align="center" className={styles.CarouselItem}>
                    <Image
                        className={styles.carouselImg}
                        src={CarImg3}
                        alt="First slide"
                        width="1200px"
                        height="600px"
                    />
                </Carousel.Item >
                <Carousel.Item align="center" className={styles.CarouselItem}>
                    <Image
                        className={styles.carouselImg}
                        src={CarImg2}
                        alt="Second slide"
                        width="1200px"
                        height="600px"
                    />
                </Carousel.Item>
                <Carousel.Item align="center" className={styles.CarouselItem}>
                    <Image
                        className={styles.carouselImg}
                        src={CarImg3}
                        alt="Third slide"
                        width="1200px"
                        height="600px"
                    />
                </Carousel.Item>
            </Carousel>
        </div>

    )
}
export default Carrousel