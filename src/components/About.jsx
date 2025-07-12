import { Col, Container, Row } from "react-bootstrap";

export default function About() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h2 className="mb-4">About PDF Hero</h2>
          <p className="lead mb-4">
            PDF Hero is your go-to solution for quick and easy PDF merging.
            Built with modern technology and designed with user experience in
            mind, we make document management a breeze.
          </p>

          <div className="mb-5">
            <h4>Why Choose PDF Hero?</h4>
            <Row className="mt-4">
              <Col sm={6} md={3} className="mb-4">
                <i className="fas fa-bolt fa-2x mb-3 text-primary"></i>
                <h5>Fast</h5>
                <p>Merge PDFs in seconds</p>
              </Col>
              <Col sm={6} md={3} className="mb-4">
                <i className="fas fa-shield-alt fa-2x mb-3 text-primary"></i>
                <h5>Secure</h5>
                <p>Your files are processed locally</p>
              </Col>
              <Col sm={6} md={3} className="mb-4">
                <i className="fas fa-magic fa-2x mb-3 text-primary"></i>
                <h5>Easy</h5>
                <p>Simple drag and drop interface</p>
              </Col>
              <Col sm={6} md={3} className="mb-4">
                <i className="fas fa-mobile-alt fa-2x mb-3 text-primary"></i>
                <h5>Responsive</h5>
                <p>Works on all devices</p>
              </Col>
            </Row>
          </div>

          <div>
            <h4 className="mb-4">Our Mission</h4>
            <p>
              We believe that document management shouldn't be complicated or
              expensive. That's why we've created PDF Hero - to provide a
              simple, efficient, and accessible solution for everyone who needs
              to work with PDFs.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
