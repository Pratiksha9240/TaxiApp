import { Card, Button, Container, Col, Row } from "react-bootstrap";
import { Chat, TelephoneFill,Instagram,Headphones } from "react-bootstrap-icons";

const ContactUs = () => {
  return (
    <Container style={{ marginTop: "200px" }}>
      <Row>
        <Col className="col-3">
          <Card style={{ width: "18rem" }}>
            <Card.Title>
              <Chat></Chat>
            </Card.Title>
            <Card.Body>
              <Card.Title>Quick Answers</Card.Title>
              <Card.Text>
                Find brief answers to your short questions here.
              </Card.Text>
              <Button variant="outline-secondary">Read more</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col className="col-3">
          <Card style={{ width: "18rem" }}>
            <Card.Title>
              <TelephoneFill></TelephoneFill>
            </Card.Title>
            <Card.Body>
              <Card.Title>Let's Talk</Card.Title>
              <Card.Text>
                Pick up the phone to chat with a member of our team.
              </Card.Text>
              <Button variant="outline-secondary">Call Us</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col className="col-3">
          <Card style={{ width: "18rem" }}>
            <Card.Title>
              <Instagram></Instagram>
            </Card.Title>
            <Card.Body>
              <Card.Title>We are Social</Card.Title>
              <Card.Text>
              Get Connected with us on Instagram!
              </Card.Text>
              <Button variant="outline-secondary">Follow on Instagram</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col className="col-3">
          <Card style={{ width: "18rem" }}>
            <Card.Title>
              <Headphones></Headphones>
            </Card.Title>
            <Card.Body>
              <Card.Title>Support</Card.Title>
              <Card.Text>
              Email us so we can help with any questions or queries.
              </Card.Text>
              <Button variant="outline-secondary">Support and Help</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
