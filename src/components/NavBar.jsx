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
    <Navbar expand="lg" className={`bg-body-tertiary w-100`}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          PDF Hero
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
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
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link
              href="https://github.com/yourusername/pdf-hero"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </Nav.Link>
            <Nav.Link onClick={toggleTheme}>
              <i className={`fas fa-${theme === "light" ? "moon" : "sun"}`}></i>
            </Nav.Link>
            <SignedOut>
              <SignInButton />
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
