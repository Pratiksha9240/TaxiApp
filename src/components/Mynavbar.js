import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Mynavbar.css";
import { useState } from "react";
import MyForm from "./Form";
import taxiLogo from '../assets/logo.jpg'

const Mynavbar = () => {
  const [showModel, setShowModel] = useState(false);

  const showModelHandler = () => {
    setShowModel(true);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/"><img src={taxiLogo} alt="logo" height='50px'/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/aboutUs" className="nav-link">
                About Us
              </NavLink>
              <NavLink to="/contactUs" className="nav-link">
                Contact Us
              </NavLink>
              <NavLink to="/faqs" className="nav-link">
                FAQs
              </NavLink>
            </Nav>
            <Button variant="outline-success" onClick={showModelHandler}>
              Book Now
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <MyForm show={showModel} onHide={() => setShowModel(false)} />
    </>
  );
};

export default Mynavbar;
