import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useAppContext } from "../hooks/useAppContext";

export default function NavBar() {
  const { theme, toggleTheme } = useAppContext();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <Navbar expand="lg" className="navbar fixed-top py-3">
      <Container className="px-4">
        <Navbar.Brand as={Link} to="/" className="me-4 py-2">
          <span className="brand-text">PDF Hero</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto py-2">
            <Nav.Link as={Link} to="/" className={`${isActive("/")} px-4 py-2`}>
              <span className="nav-text">Home</span>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className={`${isActive("/about")} px-4 py-2`}
            >
              <span className="nav-text">About</span>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/pricing"
              className={`${isActive("/pricing")} px-4 py-2`}
            >
              <span className="nav-text">Pricing</span>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className={`${isActive("/contact")} px-4 py-2`}
            >
              <span className="nav-text">Contact</span>
            </Nav.Link>
          </Nav>
          <Nav className="d-flex align-items-center gap-3">
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
              <SignInButton mode="modal" className="sign-in-button" />
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
