import { Modal } from "react-bootstrap";
import styled from "styled-components";

const StyledModal = styled(Modal)`
  .modal-content {
    background: var(--glass-bg);
    backdrop-filter: blur(12px) saturate(180%);
    -webkit-backdrop-filter: blur(12px) saturate(180%);
    border: 1px solid var(--glass-border);
    border-radius: 1.5rem;
    color: var(--bs-body-color);
  }

  .modal-header {
    border-bottom: 1px solid var(--glass-border);
    padding: 1.5rem;
  }

  .modal-body {
    padding: 2rem;
    text-align: center;
  }

  .modal-title {
    font-size: 1.5rem;
    font-weight: 700;
    background: var(--primary-gradient);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .coming-soon-icon {
    font-size: 4rem;
    margin-bottom: 1.5rem;
    background: var(--primary-gradient);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .description {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  .notification-text {
    font-size: 0.9rem;
    color: var(--bs-secondary-color);
  }
`;

export default function ComingSoon({ show, onHide }) {
  return (
    <StyledModal
      show={show}
      onHide={onHide}
      centered
      aria-labelledby="coming-soon-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="coming-soon-modal">Coming Soon!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <i className="fas fa-rocket coming-soon-icon"></i>
        <p className="description">
          We're working hard to bring you amazing premium features!
        </p>
        <p className="notification-text">
          Stay tuned for updates and be the first to know when we launch.
        </p>
      </Modal.Body>
    </StyledModal>
  );
}
