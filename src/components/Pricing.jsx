import { Button, Card, Col, Container, Row } from "react-bootstrap";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      features: [
        "Merge up to 5 PDFs",
        "Maximum file size: 10MB",
        "Basic support",
        "No ads",
      ],
    },
    {
      name: "Plus",
      price: "$4.99/month",
      features: [
        "Unlimited PDF merges",
        "Maximum file size: 50MB",
        "Priority support",
        "No ads",
        "Split PDFs",
        "Cloud storage: 1GB",
      ],
    },
    {
      name: "Pro",
      price: "$9.99/month",
      features: [
        "Everything in Plus",
        "Maximum file size: Unlimited",
        "24/7 Priority support",
        "PDF compression",
        "PDF encryption",
        "Cloud storage: 10GB",
        "API access",
      ],
    },
  ];

  const handleUpgrade = () => {
    alert("Coming Soon!");
  };

  return (
    <Container fluid className="py-5">
      <h2 className="text-center mb-5">Choose Your Plan</h2>
      <Row>
        {plans.map((plan, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Header className="text-center">
                <h3>{plan.name}</h3>
                <div className="display-4">{plan.price}</div>
                {plan.name !== "Free" && (
                  <small className="text-muted">billed monthly</small>
                )}
              </Card.Header>
              <Card.Body>
                <ul className="list-unstyled">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card.Body>
              <Card.Footer className="text-center">
                <Button
                  variant={plan.name === "Free" ? "outline-primary" : "primary"}
                  onClick={handleUpgrade}
                >
                  {plan.name === "Free" ? "Current Plan" : "Upgrade Now"}
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
