import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";

const ContactContainer = styled.div`
  padding: 2rem;
  margin: 2rem auto;
  max-width: 1200px;
`;

const ContactForm = styled(Form)`
  background-color: var(--glass-bg);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const SubmitButton = styled(Button)`
  width: 100%;
  padding: 0.8rem;
  font-weight: 500;
  margin-top: 1rem;
  background-color: #1a73e8;
  border-color: #1a73e8;

  &:hover {
    background-color: #1557b0;
    border-color: #1557b0;
  }
`;

function Contact() {
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        type: "success",
        message: "Thank you for your feedback! We will get back to you soon.",
      });
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus({
        type: "danger",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - PDF Merger Tool</title>
        <meta
          name="description"
          content="Get in touch with our team for any questions or support regarding our PDF merger tool. We're here to help!"
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
      <Container fluid className="py-5">
        <ContactContainer>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h2 className="text-center mb-4">Contact Us</h2>
              <p className="text-center mb-4">
                Have questions or feedback? We'd love to hear from you!
              </p>

              {status.message && (
                <Alert variant={status.type} className="mb-4">
                  {status.message}
                </Alert>
              )}

              <ContactForm ref={formRef} onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="user_name"
                    placeholder="Your name"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="user_email"
                    placeholder="Your email"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={5}
                    placeholder="Your message"
                    required
                  />
                </Form.Group>

                <SubmitButton type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </SubmitButton>
              </ContactForm>
            </div>
          </div>
        </ContactContainer>
      </Container>
    </>
  );
}

export default Contact;
