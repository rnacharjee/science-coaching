import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Navbar
      className="top-navigation"
      collapseOnSelect
      expand="lg"
      variant="dark"
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Science Coaching</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Subjects" id="collapsible-nav-dropdown">
              <LinkContainer to="/subjects/physics">
                <NavDropdown.Item>Physics</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/subjects/chemistry">
                <NavDropdown.Item>Chemistry</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/subjects/biology">
                <NavDropdown.Item>Biology</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/subjects/computer">
                <NavDropdown.Item>Computer Science</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-info">Search</Button>
          </Form>
          <Nav>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
