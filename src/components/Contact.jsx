import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";

export default function Contact() {
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
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
    <Container fluid className="py-5 mt-5">
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

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="user_name"
                required
                placeholder="Enter your name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="user_email"
                required
                placeholder="Enter your email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                required
                rows={5}
                placeholder="Your message"
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  );
}
