import { Modal, Button, Form,Col, Row } from "react-bootstrap";
import { useState } from "react";

const MyForm = (props) => {
    
    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
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
        <Form noValidate validated={validated}>
            <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control required type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control required type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="formBasicNumber">
            <Form.Label>Contact No</Form.Label>
            <Form.Control required type="number" placeholder="contact no" />
          </Form.Group>
          </Row>

          <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="formBasicPlocation">
            <Form.Label>Pickup Location</Form.Label>
            <Form.Control required type="text" placeholder="Enter location" />
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="formBasicDlocation">
            <Form.Label>Drop-off Location</Form.Label>
            <Form.Control required type="text" placeholder="Enter location" />
          </Form.Group>
          </Row>

          <Row className="mb-3">

          <Form.Group as={Col} md="6" controlId="formBasicDate">
            <Form.Label>Date</Form.Label>
            <Form.Control required type="date" placeholder="Enter date" />
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="formBasicTime">
            <Form.Label>Time</Form.Label>
            <Form.Control required type="time" placeholder="Enter Time" />
          </Form.Group>
          </Row>

          <Row className="mb-3">

          <Form.Group as={Col} md="12" controlId="formBasicArea">
            <Form.Label>Additional Requirements</Form.Label>
            <Form.Control as="textarea" rows='3' placeholder="Enter additional information if any" />
          </Form.Group>

          </Row>

          <Button variant="success" onClick={handleSubmit}>
          Book
        </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default MyForm;
