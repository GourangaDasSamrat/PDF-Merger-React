import { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Pricing.css";

export default function Pricing() {
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      features: [
        { text: "Merge up to 5 PDFs", icon: "📄" },
        { text: "Maximum file size: 10MB", icon: "📦" },
        { text: "Basic support", icon: "💬" },
        { text: "No ads", icon: "🚫" },
      ],
    },
    {
      name: "Plus",
      price: "$4.99",
      period: "/month",
      popular: true,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      features: [
        { text: "Unlimited PDF merges", icon: "♾️" },
        { text: "Maximum file size: 50MB", icon: "📦" },
        { text: "Priority support", icon: "⭐" },
        { text: "No ads", icon: "🚫" },
        { text: "Split PDFs", icon: "✂️" },
        { text: "Cloud storage: 1GB", icon: "☁️" },
      ],
    },
    {
      name: "Pro",
      price: "$9.99",
      period: "/month",
      gradient: "linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)",
      features: [
        { text: "Everything in Plus", icon: "✨" },
        { text: "Maximum file size: Unlimited", icon: "📦" },
        { text: "24/7 Priority support", icon: "🎯" },
        { text: "PDF compression", icon: "🗜️" },
        { text: "PDF encryption", icon: "🔒" },
        { text: "Cloud storage: 10GB", icon: "☁️" },
        { text: "API access", icon: "🔑" },
      ],
    },
  ];

  const handleUpgrade = () => {
    alert("Coming Soon!");
  };

  return (
    <Container fluid className="pricing-section py-5 mt-5">
      <div className="pricing-header">
        <h2 className="text-center mt-5 mb-2">Choose Your Plan</h2>
        <p className="text-center text-muted">
          Select the perfect plan for your needs
        </p>
      </div>
      <Row className="justify-content-center">
        {plans.map((plan, index) => (
          <Col key={index} lg={4} md={6} className="mb-4">
            <Card
              className={`pricing-card h-100 ${plan.popular ? "popular" : ""} ${
                hoveredPlan === index ? "hovered" : ""
              }`}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
              style={{
                background: `var(--pricing-gradient, ${plan.gradient})`,
              }}
              data-plan-type={plan.name.toLowerCase()}
            >
              {plan.popular && (
                <div className="popular-badge">Most Popular</div>
              )}
              <Card.Header className="text-center border-0 bg-transparent pt-4">
                <h3 className="plan-name mb-3">{plan.name}</h3>
                <div className="price-container">
                  <span className="currency">$</span>
                  <span className="price">{plan.price.replace("$", "")}</span>
                  <span className="period">{plan.period}</span>
                </div>
              </Card.Header>
              <Card.Body>
                <ul className="feature-list">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="feature-item">
                      <span className="feature-icon">{feature.icon}</span>
                      <span className="feature-text">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </Card.Body>
              <Card.Footer className="text-center border-0 bg-transparent pb-4">
                <Button
                  className={`pricing-button ${
                    plan.popular ? "btn-popular" : ""
                  }`}
                  variant={plan.name === "Free" ? "light" : "light"}
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
