import Image from 'next/dist/client/image';
import styles from './Carrousel.module.css';
import { Carousel } from 'react-bootstrap';
import CarImg1 from '../Assets/2.jpg';
import CarImg4 from '../Assets/4.jpg';
import CarImg3 from '../Assets/3.jpg';


export const Carrousel = () => {
    return (
        <Carousel controls={false} indicators={false}>
            <Carousel.Item align="center">
                <Image
                    className="carouselImg"
                    src={CarImg1}
                    alt="First slide"
                    fluid
                    height="1000px"
                />
            </Carousel.Item >
            <Carousel.Item align="center">
                <Image
                    className={styles.carouselImg}
                    src={CarImg4}
                    alt="Second slide"
                    fluid
                    height="1000px"
                />
            </Carousel.Item>
            <Carousel.Item align="center">
                <Image
                    className={styles.carouselImg}
                    src={CarImg3}
                    alt="Third slide"
                    fluid
                    height="1000px"
                />
            </Carousel.Item>
        </Carousel>


    )
}
export default Carrousel