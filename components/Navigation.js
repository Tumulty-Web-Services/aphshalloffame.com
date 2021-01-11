import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from '../styles/Navigation.module.css';

export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState('');
  const [preSetActive, setPreSetActive] = useState(true);

  useEffect(() => {
    if (preSetActive) {
      setActive(router.asPath);
      setPreSetActive(false);
    }
  });

  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/" className={styles.header}>
        <h1 className={`${styles.h1} mt-2 mb-0`}>
          <strong>Asbury Park High School</strong>
        </h1>
        <h2 className={`${styles.h2} mt-0`}>Distinguished Alumni Hall of Fame</h2>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            className={`${styles.navBlue} ${
              active === '/' ? styles.activeLink : ''
            } mx-1`}
            href="/"
          >
            HOME
          </Nav.Link>
          <NavDropdown
            className={styles.navBlue}
            title="CEREMONIES"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="/ceremony/2010">2010</NavDropdown.Item>
            <NavDropdown.Item href="/ceremony/2007">2007</NavDropdown.Item>
            <NavDropdown.Item href="/ceremony/2005">2005</NavDropdown.Item>
            <NavDropdown.Item href="/ceremony/2003">2003</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link
            className={`${styles.navBlue} ${
              active === '/events' ? styles.activeLink : ''
            } mx-1`}
            href="/events"
          >
            EVENTS
          </Nav.Link>
          <Nav.Link
            className={`${styles.navBlue} ${
              active === '/donate' ? styles.activeLink : ''
            } mx-1`}
            href="/donate"
          >
            DONATE
          </Nav.Link>
          <Nav.Link
            className={`${styles.navBlue} ${
              active === '/contact' ? styles.activeLink : ''
            } mx-1`}
            href="/contact"
          >
            CONTACT
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
