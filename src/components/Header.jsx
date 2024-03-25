import { Container, Nav, Navbar, Row, Col, Card, Button } from "react-bootstrap";

export default function Header({ navigate }) {
  return (
    <Navbar bg="primary" data-bs-theme="dark" className="nav-bg">
      <Container>
        <Navbar.Brand
          onClick={() => {
            navigate("/");
          }}
          className="logo"
        >
          윤's SHOP
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            onClick={() => {
              navigate("/about");
            }}
          >
            About
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("/detail");
            }}
          >
            Detail
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("/event");
            }}
          >
            Event
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("/cart");
            }}
          >
            Cart
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
