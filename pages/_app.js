import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Carousel } from 'react-bootstrap';
import NavComponent from './NavComponent';
import Footer from '../pages/Footer/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavComponent />
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/photos/woman-in-mask-on-face-in-spa-beauty-salon-picture-id921797424?k=20&m=921797424&s=612x612&w=0&h=-oKjXqOjxamu9dcOtcF-WggUrXE8mB1DDTmTbCuACrc="
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://thumbs.dreamstime.com/b/face-peeling-mask-spa-beauty-treatment-skincare-woman-getting-facial-care-beautician-spa-salon-close-up-spa-clay-mask-o-face-145250762.jpg"

            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.heavenlyblissbeauty.com.au/uploads/126/facials.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Component {...pageProps} />
      <Footer />
    </>
  )

}

export default MyApp
