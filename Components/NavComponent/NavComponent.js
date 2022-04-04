
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
            <Container className={styles.Container} >
                <Navbar.Brand href="/">
                    <span className={styles.logoSpan}>
                        <Image
                            src={Logo}
                            width="60px"
                            height="60px"
                        />
                        {/* <h6 className={styles.logoText}>vcbeauty</h6> */}
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className={styles.navBarLink}>
                        <Nav.Link href="/Asesorias">Asesorías</Nav.Link>
                        <NavDropdown title="Facial">
                            <NavDropdown.Item href="/HigieneFacial" className={styles.NavDropdown}>Higiene Facial</NavDropdown.Item>
                            <NavDropdown.Item href="/Peelings" className={styles.NavDropdown}>Peeling</NavDropdown.Item>
                            <NavDropdown.Item href="/GlowyLips" className={styles.NavDropdown}>Glowy lips</NavDropdown.Item>
                            <NavDropdown.Item href="/AntiAge" className={styles.NavDropdown}>Anti Age</NavDropdown.Item>
                            <NavDropdown.Item href="/Dermaplanning" className={styles.NavDropdown}>Dermaplanning</NavDropdown.Item>
                            <NavDropdown.Item href="/PermanentMakeUp" className={styles.NavDropdown}>Permanent Make Up</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Aparatologia">
                            <NavDropdown.Item href="/RadiofrecuenciaFacial" className={styles.NavDropdown}>Radiofrecuencia</NavDropdown.Item>
                            <NavDropdown.Item href="/CrioradiofrecuenciaFacial" className={styles.NavDropdown}>Crioradiofrecuencia</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Corporal">
                            <NavDropdown.Item href="/RadioFrecuenciaCorp" className={styles.NavDropdown}>Crioradiofrecuencia</NavDropdown.Item>
                            <NavDropdown.Item href="/DepiDefinitiva" className={styles.NavDropdown}>Depilacion definitiva</NavDropdown.Item>
                            <NavDropdown.Item href="/Himfu" className={styles.NavDropdown}>Himfu</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/DermaFull">Derma full face VC</Nav.Link>
                        <Nav.Link href="/Asesorias">Turnos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container >
        </Navbar >
    )
}
export default NavComponent