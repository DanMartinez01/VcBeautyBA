import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import styles from './NavComponent.module.css';
import { FaInstagram } from 'react-icons/fa';
import React, { Component } from 'react';
import Link from 'next/dist/client/link';

export const NavComponent = () => {
    return (
        <Navbar className={styles.navBarColor} expand="lg" sticky="top">
            < Container >
                <Navbar.Brand href="/">VCBeauty</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link href="/HigieneFacial/HigieneFacial">
                            <a className={styles.navBarLink}>Higiene Facial</a>
                        </Link>
                        <Link href="/HigieneFacial/HigieneFacial">
                            <a className={styles.navBarLink}>Glowy Lips</a>
                        </Link>
                        <Link href="/HigieneFacial/HigieneFacial">
                            <a className={styles.navBarLink}>Corporal</a>
                        </Link>
                        <Link href="/HigieneFacial/HigieneFacial">
                            <a className={styles.navBarLink}>Jornadas</a>
                        </Link>
                        <Link href="https://www.instagram.com/vc.beautyba/">
                            <a className={styles.navBarLink}>Turnos</a>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container >
        </Navbar >
    )
}
export default NavComponent