
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Image from 'next/dist/client/image';
import styles from './NavComponent.module.css';
import { FaInstagram } from 'react-icons/fa';
import React, { Component } from 'react';
import Link from 'next/dist/client/link';
import Logo from '../../Assets/logo.png';

export const NavComponent = () => {
    return (
        <Navbar className={styles.navBarColor} expand="lg" fixed="top" >
            < Container >
                <Navbar.Brand href="/">
                    <span className={styles.logoSpan}>
                        <Image
                            src={Logo}
                            width="60px"
                            height="60px"
                        />
                        <h6 className={styles.logoText}> vcbeauty</h6>
                    </span>

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <NavDropdown title="Facial" className={styles.navBarLink}>
                            <NavDropdown.Item href="/HigieneFacial" className={styles.NavDropdown}>Higiene Facial</NavDropdown.Item>
                            <NavDropdown.Item href="/Peelings" className={styles.NavDropdown}>Peeling</NavDropdown.Item>
                            <NavDropdown.Item href="/GlowyLips" className={styles.NavDropdown}>Glowy lips</NavDropdown.Item>
                            <NavDropdown.Item href="/DermaFull" className={styles.NavDropdown}>Derma Full Face Vc</NavDropdown.Item>
                            <NavDropdown.Item href="/AntiAge" className={styles.NavDropdown}>Anti Age</NavDropdown.Item>
                            <NavDropdown.Item href="/Dermaplanning" className={styles.NavDropdown}>Dermaplanning</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Aparatologia" className={styles.navBarLink}>
                            <NavDropdown.Item href="/RadiofrecuenciaFacial" className={styles.NavDropdown}>Radiofrecuencia</NavDropdown.Item>
                            <NavDropdown.Item href="/CrioradiofrecuenciaFacial" className={styles.NavDropdown}>Crioradiofrecuencia</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link ><Link href="/Asesorias" ><a className={styles.navBarLink}>Asesorías</a></Link></Nav.Link>

                        {/* <Link href="/HigieneFacial/HigieneFacial">
                            <a className={styles.navBarLink}>Corporal</a>
                        </Link>
                        <Link href="/HigieneFacial/HigieneFacial">
                            <a className={styles.navBarLink}>Asesorías </a>
                        </Link>
                        <Link href="https://www.instagram.com/vc.beautyba/">
                            <a className={styles.navBarLink}>Turnos</a>
                        </Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container >
        </Navbar >
    )
}
export default NavComponent