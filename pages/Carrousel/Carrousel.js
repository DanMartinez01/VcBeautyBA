import Image from 'next/dist/client/image';
import styles from './Carrousel.module.css';
import { Carousel } from 'react-bootstrap';
import CarImg1 from '../Assets/1.jpg';
// import CarImg2 from '../Assets/2.jpg';
// import CarImg3 from '../Assets/3.jpg';


export const Carrousel = () => {
    return (
        <Carousel controls={false} indicators={false}>
            <Carousel.Item align="center">
                <Image
                    className="d-block w-100"
                    src={CarImg1}
                    alt="First slide"
                    fluid
                />
            </Carousel.Item >
            <Carousel.Item align="center">
                <Image
                    className="d-block w-100"
                    src={CarImg1}
                    alt="Second slide"
                    fluid
                />
            </Carousel.Item>
            <Carousel.Item align="center">
                <Image
                    className="d-block w-100"
                    src={CarImg1}
                    alt="Third slide"
                    fluid
                />
            </Carousel.Item>
        </Carousel>


    )
}
export default Carrousel