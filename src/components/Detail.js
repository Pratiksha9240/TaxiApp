import { Container, Form, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Detail = (props) => {
  const book = useSelector((state) => state.book.bookings);

  return (
    <Container style={props.style}>
        <>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="formBasicName">
                <Form.Label>email</Form.Label>
                <Form.Control value={book.email} type="text" disabled />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="formBasicPlocation">
                <Form.Label>Pickup Location</Form.Label>
                <Form.Control type="text" value={book.pickup} disabled />
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="formBasicDlocation">
                <Form.Label>Drop-off Location</Form.Label>
                <Form.Control type="text" value={book.dropoff} disabled />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="formBasicDate">
                <Form.Label>Date</Form.Label>
                <Form.Control required type="date" value={book.date} disabled />
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="formBasicTime">
                <Form.Label>Time</Form.Label>
                <Form.Control required type="time" value={book.time} disabled />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="formBasicArea">
                <Form.Label>Additional Requirements</Form.Label>
                <Form.Control
                  type="text"
                  value={book.additional}
                  disabled
                />
              </Form.Group>
            </Row>
          </Form>
        </>
    </Container>
  );
};

export default Detail;
