import { useState } from "react";
import { Navbar, Nav, Container, Offcanvas, Button } from "react-bootstrap";
import logo1 from "../assets/Logo/music.svg";

export default function MyNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md" className="py-2">
        <Container fluid>
          <Button variant="dark" onClick={handleShow} className="border-0 p-0">
            <i className="bi bi-list fs-3">≡</i>
          </Button>
          <Navbar.Brand className="mx-auto position-absolute start-50 translate-middle-x">
            <img src={logo1} alt="Logo Music" style={{ height: "30px" }} />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#" className="text-white fw-semibold px-2">
              Accedi
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose} placement="start" className="bg-dark text-white">
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#" className="text-white">Home</Nav.Link>
            <Nav.Link href="#" className="text-white">Esplora</Nav.Link>
            <Nav.Link href="#" className="text-white">Profilo</Nav.Link>
          
            <hr className="text-white" />
            <Nav.Link href="#" className="text-white">Impostazioni</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
