import { Carousel } from "react-bootstrap";
import taxiLogo from "../assets/logo.jpg";
import taxi2 from "../assets/taxi2.jpg";
import taxi1 from "../assets/taxi1.jpg";

const Home = () => {
  return (
    // <Container style={{marginTop: '100px'}}>
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={taxiLogo}
          height="500px"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome to speed taxi</h3>
          <p>
            No call-out fee: At Maxi Taxi Perth, we don’t charge a call-out fee
            (save $1.50)Meter or fixed fare: Choose meter fare or opt for a set
            price to avoid surprisesStandard taxi rates: We provide premium
            services at standard taxi rates (normal tariffs)Direct
            communication: Speak directly to the taxi driver, not just some
            phone operator.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src={taxi2}
          height="500px"
          alt="Second slide"
        />
  <br />
  <br />
  <br />
  <br />
        <Carousel.Caption>
          <h3>Additional Services we offer</h3>
          <p>
            Wheelchair taxis: Book a wheelchair accessible maxi taxi
            (TUSS vouchers accepted)Baby seats: We can send a taxi with a baby
            seat for you to use (free of charge)Reliable chauffeurs: All our
            drivers are courteous, experienced and police-clearedFully insured:
            Our taxis are fully insured and meet all government regulationsClean
            taxis: Because your satisfaction is important to us, we keep our
            taxis cleanFlexible service: Whatever your needs, ask us and we will
            try to accommodate you .
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src={taxi1}
          height="500px"
          alt="Third slide"
          style={{ float: "right" }}
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
  );
};

export default Home;
