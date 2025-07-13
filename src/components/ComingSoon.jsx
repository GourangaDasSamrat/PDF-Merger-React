import { Modal } from "react-bootstrap";
import styled, { keyframes } from "styled-components";

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const glow = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(99, 102, 241, 0.2);
  }
  50% {
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.6);
  }
  100% {
    box-shadow: 0 0 5px rgba(99, 102, 241, 0.2);
  }
`;

const sparkle = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const StyledModal = styled(Modal)`
  .modal-content {
    background: var(--glass-bg);
    backdrop-filter: blur(12px) saturate(180%);
    -webkit-backdrop-filter: blur(12px) saturate(180%);
    border: 1px solid var(--glass-border);
    border-radius: 2rem;
    color: var(--bs-body-color);
    box-shadow: 0 8px 32px rgba(99, 102, 241, 0.2);
    animation: ${glow} 3s infinite;
    overflow: hidden;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 100%;
      background: linear-gradient(
        135deg,
        rgba(99, 102, 241, 0.1) 0%,
        rgba(168, 85, 247, 0.1) 100%
      );
      z-index: 0;
    }
  }

  .modal-header {
    border-bottom: 1px solid var(--glass-border);
    padding: 2rem;
    position: relative;
    background: rgba(255, 255, 255, 0.05);
  }

  .modal-body {
    padding: 3rem 2rem;
    text-align: center;
    position: relative;
  }

  .modal-title {
    font-size: 2rem;
    font-weight: 800;
    background: var(--primary-gradient);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;
    display: inline-block;

    &::after {
      content: "🚀";
      position: absolute;
      right: -2rem;
      top: 0;
      font-size: 1.5rem;
      animation: ${float} 3s ease-in-out infinite;
    }
  }

  .coming-soon-icon {
    font-size: 5rem;
    margin-bottom: 2rem;
    background: var(--primary-gradient);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: inline-block;
    position: relative;
    animation: ${float} 3s ease-in-out infinite;

    &::before {
      content: "✨";
      position: absolute;
      top: -1rem;
      left: -1rem;
      font-size: 1.5rem;
      animation: ${sparkle} 2s ease-in-out infinite;
    }

    &::after {
      content: "✨";
      position: absolute;
      bottom: -1rem;
      right: -1rem;
      font-size: 1.5rem;
      animation: ${sparkle} 2s ease-in-out infinite 1s;
    }
  }

  .description {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    line-height: 1.6;
    font-weight: 500;
    background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .notification-text {
    font-size: 1rem;
    color: var(--bs-secondary-color);
    padding: 1rem 2rem;
    border-radius: 1rem;
    background: rgba(255, 255, 255, 0.05);
    display: inline-block;
    margin-top: 1rem;
    border: 1px solid var(--glass-border);

    i {
      margin-right: 0.5rem;
      color: #6366f1;
    }
  }

  .btn-close {
    background: transparent;
    border: none;
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    opacity: 0.7;
    transition: all 0.3s ease;

    &:hover {
      opacity: 1;
      transform: rotate(90deg);
    }
  }
`;

export default function ComingSoon({ show, onHide }) {
  return (
    <StyledModal
      show={show}
      onHide={onHide}
      centered
      aria-labelledby="coming-soon-modal"
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="coming-soon-modal">Coming Soon</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <i className="fas fa-rocket coming-soon-icon"></i>
        <h3 className="description">Get Ready for Something Amazing!</h3>
        <p
          className="mb-4"
          style={{ fontSize: "1.1rem", color: "var(--bs-body-color)" }}
        >
          Our team is crafting premium features that will revolutionize how you
          work with PDFs. We're adding powerful tools like:
        </p>
        <div
          className="feature-grid mb-4"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
            margin: "0 auto",
            maxWidth: "600px",
          }}
        >
          {[
            { icon: "fa-wand-magic-sparkles", text: "Advanced PDF Tools" },
            { icon: "fa-cloud", text: "Cloud Storage" },
            { icon: "fa-lock", text: "Enterprise Security" },
            { icon: "fa-bolt", text: "Instant Processing" },
          ].map((feature, index) => (
            <div
              key={index}
              style={{
                padding: "1rem",
                background: "rgba(255, 255, 255, 0.05)",
                borderRadius: "1rem",
                border: "1px solid var(--glass-border)",
              }}
            >
              <i
                className={`fas ${feature.icon} mb-2`}
                style={{
                  fontSize: "1.5rem",
                  color: "#6366f1",
                }}
              ></i>
              <div style={{ fontWeight: "500" }}>{feature.text}</div>
            </div>
          ))}
        </div>
        <p className="notification-text">
          <i className="fas fa-bell"></i>
          Be the first to know when we launch these exciting features!
        </p>
      </Modal.Body>
    </StyledModal>
  );
}
