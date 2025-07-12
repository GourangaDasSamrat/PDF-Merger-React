import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppContext } from "../hooks/useAppContext";

export default function NavBar() {
  const { theme, toggleTheme } = useAppContext();

  return (
    <Navbar expand="lg" className="navbar fixed-top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="me-4">
          PDF Hero
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/pricing">
              Pricing
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
          <Nav className="d-flex align-items-center gap-2">
            <Nav.Link
              href="https://github.com/yourusername/pdf-hero"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-github"></i>
            </Nav.Link>
            <Nav.Link onClick={toggleTheme} className="social-icon">
              <i className={`fas fa-${theme === "light" ? "moon" : "sun"}`}></i>
            </Nav.Link>
            <SignedOut>
              <SignInButton mode="modal" />
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
