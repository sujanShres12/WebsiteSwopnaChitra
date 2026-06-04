'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar, Nav, Container } from 'react-bootstrap';

const CustomNavbar: React.FC = () => {
  return (
    <Navbar expand="lg" fixed="top" variant="dark" className="navbar">
      <Container>
        <Navbar.Brand as={Link} href="/" className="text-gold fw-bold fs-3">
          SWOPNA CHITRA
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} href="/#home">Home</Nav.Link>
            <Nav.Link as={Link} href="/#about">About Us</Nav.Link>
            <Nav.Link as={Link} href="/#services">Services</Nav.Link>
            <Nav.Link as={Link} href="/#portfolio">Portfolio</Nav.Link>
            <Nav.Link as={Link} href="/team">About the Team</Nav.Link>
            <Nav.Link as={Link} href="/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
