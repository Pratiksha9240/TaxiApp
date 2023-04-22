import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookActions } from "../store/book-slice";
import Detail from "./Detail";
import emailjs from '@emailjs/browser';

const MyForm = (props) => {
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();
  const bookings = useSelector(state => state.book.bookings)
  console.log(bookings)

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

    console.log(new Date().toLocaleString().split(', ')[1])
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

    emailjs
    .send(
      "default_service",
      'template_0glikfl',
      {
        senderEmail: 'fromEmail',
        receiverEmail: emailInputRef.current.value,
        email: emailInputRef.current.value,
        pickup: pInputRef.current.value,
        dropoff: dInputRef.current.value,
        date: dateInputRef.current.value,
        time: timeInputRef.current.value,
        additional: adInputRef.current.value 
      },
      'WbbruxmY311pDsfhL'
    )
    .then(res => {
      if (res.status === 200) {
        // setFormSubmitSuccessful(true)
      }
    })
    // Handle errors here however you like
    .catch(err => console.error("Failed to send feedback. Error: ", err))
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
                <Form.Control required type="tel" placeholder="contact no" pattern="[0-9]{10}"/>
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
                <Form.Control required type="date" min={new Date().toISOString().split('T')[0]} placeholder="Enter date" ref={dateInputRef}/>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="formBasicTime">
                <Form.Label>Time</Form.Label>
                <Form.Control required type="time" min={new Date().toLocaleString().split(', ')[1]} placeholder="Enter Time" ref={timeInputRef}/>
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
            Booking Successfull. Please check your email!!!
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
