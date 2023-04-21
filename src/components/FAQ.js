import { Accordion, Container, Card, Button } from "react-bootstrap";

const FAQ = () => {
  return (
    <Container style={{ marginTop: "20px" }}>
      <h6>Frequently Asked Questions</h6>
      <br />
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>How to book Taxi</Accordion.Header>
          <Accordion.Body>
            You can click on Book button at the top right corner and fill the
            details.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <br />
      <Accordion>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            When I will get booking confirmation
          </Accordion.Header>
          <Accordion.Body>
            As soon as we will receive your request within 5 to 10 min, we will
            send you the booking confirmation.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <br />
      <Accordion>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Can make the advance payment</Accordion.Header>
          <Accordion.Body>
            Yes, You have got the options to pay upfront before the start of
            journey or pay at the end.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <br />
      <Accordion>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Is it safe to travel with speed taxi post pandemic
          </Accordion.Header>
          <Accordion.Body>
            Yes, it’s safe. We’re are continuously working to help keep those
            who rely on our platform healthy and safe for everyone{" "}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default FAQ;
