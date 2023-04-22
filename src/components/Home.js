import { Carousel } from "react-bootstrap";
import taxiLogo from '../assets/logo.jpg'
import taxi2 from '../assets/taxi2.jpg'
import taxi1 from '../assets/taxi1.jpg'


const Home = () => {
    return(
      // <Container style={{marginTop: '100px'}}>
        <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={taxiLogo}
          height='500px'
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome to speed taxi</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src={taxi2}
          height='500px'
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src={taxi1}
          height='500px'
          alt="Third slide"
          style={{float: 'right'}}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    // </Container>
    )
}

export default Home;