import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  const socialLinks = [
    {
      icon: "github",
      url: "https://github.com/GourangaDasSamrat/",
    },
    {
      icon: "linkedin",
      url: "https://www.linkedin.com/in/gouranga-das-samrat/",
    },
    { icon: "facebook", url: "https://www.facebook.com/gourangadassamrat/" },
    { icon: "twitter", url: "https://x.com/Gouranga_Khulna" },
  ];

  return (
    <footer className="bg-body-tertiary py-4 mt-auto">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none mx-2"
              >
                <i className={`fab fa-${social.icon} fa-lg`}></i>
              </a>
            ))}
          </Col>
          <Col xs={12} className="text-center mt-3">
            <div className="mb-2">
              <Link
                to="/privacy-policy"
                className="text-decoration-none mx-2 text-secondary"
              >
                Privacy Policy
              </Link>
              <span className="text-secondary">•</span>
              <Link
                to="/about"
                className="text-decoration-none mx-2 text-secondary"
              >
                About
              </Link>
              <span className="text-secondary">•</span>
              <Link
                to="/contact"
                className="text-decoration-none mx-2 text-secondary"
              >
                Contact
              </Link>
            </div>
            <small>
              &copy; {new Date().getFullYear()} PDF Hero. All rights reserved.
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
