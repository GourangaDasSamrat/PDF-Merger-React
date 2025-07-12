import { motion } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import "./About.css";

const HeroSection = styled.div`
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
  color: white;
  padding: 6rem 0;
  border-radius: 0 0 3rem 3rem;
  margin-bottom: 4rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 0 0 3rem 3rem;
  }

  h1 {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    position: relative;
    letter-spacing: -0.5px;
  }

  p {
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    position: relative;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.8;
  }

  .container {
    position: relative;
    z-index: 1;
  }
`;

const FeatureCard = styled(motion.div)`
  background: var(--bs-body-bg, white);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  height: 100%;
  transition: all 0.3s ease;
  color: var(--bs-body-color);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }
`;

const IconWrapper = styled.div`
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
`;

const MissionSection = styled.div`
  background: var(--bs-tertiary-bg, #f8fafc);
  padding: 4rem 0;
  border-radius: 2rem;
  margin-top: 4rem;
  color: var(--bs-body-color);
`;

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <>
      <Helmet>
        <title>About Us - PDF Merger Tool</title>
        <meta
          name="description"
          content="Learn more about our PDF merger tool and the team behind it. Discover how we help users combine PDF documents efficiently."
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon/favicon-96x96.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Helmet>
      <div className="about-page">
        <HeroSection>
          <Container>
            <Row className="justify-content-center text-center">
              <Col md={8}>
                <motion.h1
                  className="display-4 fw-bold mb-4"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  About PDF Hero
                </motion.h1>
                <motion.p
                  className="lead mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  PDF Hero is your go-to solution for quick and easy PDF
                  merging. Built with modern technology and designed with user
                  experience in mind, we make document management a breeze.
                </motion.p>
              </Col>
            </Row>
          </Container>
        </HeroSection>

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-center mb-5 fw-bold">Why Choose PDF Hero?</h2>
            <Row className="g-4">
              <Col sm={6} md={3}>
                <FeatureCard {...fadeInUp}>
                  <IconWrapper>
                    <i className="fas fa-bolt fa-lg"></i>
                  </IconWrapper>
                  <h5 className="fw-bold text-center mb-3">Lightning Fast</h5>
                  <p className="text-center text-muted mb-0">
                    Merge your PDFs in seconds with our optimized processing
                    engine
                  </p>
                </FeatureCard>
              </Col>
              <Col sm={6} md={3}>
                <FeatureCard {...fadeInUp}>
                  <IconWrapper>
                    <i className="fas fa-shield-alt fa-lg"></i>
                  </IconWrapper>
                  <h5 className="fw-bold text-center mb-3">100% Secure</h5>
                  <p className="text-center text-muted mb-0">
                    Your files never leave your device - complete privacy
                    guaranteed
                  </p>
                </FeatureCard>
              </Col>
              <Col sm={6} md={3}>
                <FeatureCard {...fadeInUp}>
                  <IconWrapper>
                    <i className="fas fa-magic fa-lg"></i>
                  </IconWrapper>
                  <h5 className="fw-bold text-center mb-3">User Friendly</h5>
                  <p className="text-center text-muted mb-0">
                    Intuitive interface with simple drag and drop functionality
                  </p>
                </FeatureCard>
              </Col>
              <Col sm={6} md={3}>
                <FeatureCard {...fadeInUp}>
                  <IconWrapper>
                    <i className="fas fa-mobile-alt fa-lg"></i>
                  </IconWrapper>
                  <h5 className="fw-bold text-center mb-3">
                    Responsive Design
                  </h5>
                  <p className="text-center text-muted mb-0">
                    Perfect experience across all your devices
                  </p>
                </FeatureCard>
              </Col>
            </Row>
          </motion.div>

          <MissionSection>
            <Container>
              <Row className="justify-content-center">
                <Col md={8} className="text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="fw-bold mb-4">Our Mission</h2>
                    <p className="lead text-muted">
                      We believe that document management shouldn't be
                      complicated or expensive. That's why we've created PDF
                      Hero - to provide a simple, efficient, and accessible
                      solution for everyone who needs to work with PDFs.
                    </p>
                  </motion.div>
                </Col>
              </Row>
            </Container>
          </MissionSection>
        </Container>
      </div>
    </>
  );
}
