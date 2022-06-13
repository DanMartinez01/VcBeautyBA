import Image from 'next/dist/client/image';
import styles from './Carrousel.module.css';
import { Carousel } from 'react-bootstrap';
import Img15 from '../../Assets/15.jpg';
import Img16 from '../../Assets/16.jpg';
import React, { Component } from 'react';


export const Carrousel = () => {
    return (
        <div className={styles.container}>
            <Carousel controls={false} indicators={false}>
                <Carousel.Item align="center" className={styles.CarouselItem}>
                    <Image
                        className={styles.carouselImg}
                        src={Img15}
                        alt="First slide"
                    />
                </Carousel.Item >
                <Carousel.Item align="center" className={styles.CarouselItem}>
                    <Image
                        className={styles.carouselImg}
                        src={Img16}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>

    )
}
export default Carrousel