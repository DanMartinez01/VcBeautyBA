import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Image from 'next/dist/client/image';
import styles from './NavComponent.module.css';
import { FaInstagram } from 'react-icons/fa';
import React, { Component } from 'react';
import Link from 'next/dist/client/link';
import Logo from '../../Assets/logo.png';

export const NavComponent = () => {
    return (
        <Navbar className={styles.navBarColor} expand="lg" fixed="top">
            < Container >
                <Navbar.Brand href="/">
                    <Image
                        src={Logo}
                        width="45px"
                        height="40px"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Aparatologia" className={styles.dropdownMenu}>
                            <NavDropdown.Item href="#action/3.1" className={styles.NavDropdown}>Radiofrecuencia</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" className={styles.NavDropdown}>Crioradiofrecuencia</NavDropdown.Item>
                        </NavDropdown>
                        <Link href="/HigieneFacial">
                            <a className={styles.navBarLink}>Higiene Facial</a>
                        </Link>
                        <Link href="/GlowyLips">
                            <a className={styles.navBarLink}>Glowy Lips</a>
                        </Link>
                        <Link href="/HigieneFacial/HigieneFacial">
                            <a className={styles.navBarLink}>Corporal</a>
                        </Link>
                        <Link href="/HigieneFacial/HigieneFacial">
                            <a className={styles.navBarLink}>Asesorías </a>
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