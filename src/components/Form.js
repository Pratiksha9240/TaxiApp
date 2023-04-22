import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { bookActions } from "../store/book-slice";
import Detail from "./Detail";

const MyForm = (props) => {
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const pInputRef = useRef();
  const dInputRef = useRef();
  const adInputRef = useRef();
  const dateInputRef = useRef();
  const timeInputRef = useRef();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
    dispatch(
      bookActions.book({
        email: emailInputRef.current.value,
        pickup: pInputRef.current.value,
        dropoff: dInputRef.current.value,
        date: dateInputRef.current.value,
        time: timeInputRef.current.value,
        additional: adInputRef.current.value || "No requirements given",
      })
    );
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Enter below Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter your name"
                  ref={nameInputRef}
                />
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter email"
                  ref={emailInputRef}
                />
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="formBasicNumber">
                <Form.Label>Contact No</Form.Label>
                <Form.Control required type="number" placeholder="contact no" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="formBasicPlocation">
                <Form.Label>Pickup Location</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter location"
                  ref={pInputRef}
                />
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="formBasicDlocation">
                <Form.Label>Drop-off Location</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter location"
                  ref={dInputRef}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="formBasicDate">
                <Form.Label>Date</Form.Label>
                <Form.Control required type="date" placeholder="Enter date" ref={dateInputRef}/>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="formBasicTime">
                <Form.Label>Time</Form.Label>
                <Form.Control required type="time" placeholder="Enter Time" ref={timeInputRef}/>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="formBasicArea">
                <Form.Label>Additional Requirements</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  placeholder="Enter additional information if any"
                  ref={adInputRef}
                />
              </Form.Group>
            </Row>

            <Button variant="success" type="submit">
              Book
            </Button>

            {validated && (
        <Modal
        {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header style={{ color: "green" ,backgroundColor: 'lightGrey' }}>
            Booking Successfull!!!
            Below are the details
          </Modal.Header>
          <Detail style={{backgroundColor: 'lightGrey'}}/>
          <Modal.Footer>
            <Button variant="success" onClick={() => setValidated(false)}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      )}

          </Form>
        </Modal.Body>
      </Modal>
      
    </>
  );
};

export default MyForm;
