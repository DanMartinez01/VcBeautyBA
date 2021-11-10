import Image from 'next/dist/client/image';
import { Carousel } from 'react-bootstrap';
import CarImg1 from '../Assets/CarImg1.jpg';
// import CarImg5 from '../Assets/CarImg5.jpg';


export const Carrousel = () => {
    return (
        <Carousel controls={false} indicators={false} >
            <Carousel.Item align="center">
                <Image
                    className="d-block w-100 responsive"
                    src={CarImg1}
                    alt="First slide"

                    fluid

                />
            </Carousel.Item>
            <Carousel.Item align="center" >
                <Image
                    className="d-block w-100"
                    src={CarImg1}
                    alt="Second slide"

                    fluid
                />
            </Carousel.Item>
            <Carousel.Item align="center" >
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