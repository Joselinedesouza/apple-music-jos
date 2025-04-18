import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-4 pb-3 border-top border-secondary small">
      <Container>
        <Row className="text-center mb-2">
          <Col>
            <p className="mb-2">
              © 2024 Apple-Music — created by <strong>Joseline De Souza</strong>
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center text-center">
          <Col xs="auto" className="mb-1">
            <a href="#" className="text-white text-decoration-none">
              Condizioni
            </a>
          </Col>
          <Col xs="auto" className="mb-1">
            <a href="#" className="text-white text-decoration-none">
              Privacy
            </a>
          </Col>
          <Col xs="auto" className="mb-1">
            <a href="#" className="text-white text-decoration-none">
              Cookie
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
