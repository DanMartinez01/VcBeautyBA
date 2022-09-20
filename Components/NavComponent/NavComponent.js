
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Image from 'next/dist/client/image';
import styles from './NavComponent.module.css';
import React, { Component } from 'react';
import Link from 'next/dist/client/link';
import Logo from '../../Assets/logo.png';

import { ImFacebook } from 'react-icons/im';
import { SiWhatsapp } from "react-icons/si";
import { FaInstagram } from 'react-icons/fa';
import { BsCalendar2DateFill } from 'react-icons/bs';

export const NavComponent = () => {
    return (
        <>
            <div className={styles.contact}>
                <div>
                    <p>Contacto: (+54 ) 9 1123428263</p>
                </div>
                <div className={styles.icons}>
                    <p>Seguinos: </p>
                    <a href="https://www.instagram.com/vc.beautyba/">
                        <FaInstagram className={styles.icon} color='gray' alt="Instagram" />
                    </a>
                    <a href="https://www.facebook.com/VC-Beauty-tips-107597083987827">
                        <ImFacebook color='gray' className={styles.icon} alt="Facebook" />
                    </a>
                    <a href="https://wa.me/+5491123428263"
                        target="_blank"
                        rel="noopener noreferrer" >
                        <SiWhatsapp color='gray' className={styles.icon} alt="Whatsapp" />
                    </a>
                </div>
            </div>
            <Navbar className={styles.navBarColor} expand="lg" sticky='top' >
                <Container className={styles.Container} >
                    <Navbar.Brand href="/">
                        <span className={styles.logoSpan}>
                            <Image
                                src={Logo}
                                width="60px"
                                height="60px"
                                alt="Vc Beauty BA"
                            />
                            <h3 className={styles.logoText} alt="VC beauty BA">vcbeauty</h3>
                        </span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className="justify-content-end" style={{ width: "100%" }}>
                            <Nav.Link href="/Asesorias">Asesorías</Nav.Link>
                            <NavDropdown title="Facial">
                                <NavDropdown.Item href="/HigieneFacial" className={styles.NavDropdown}>Higiene Facial</NavDropdown.Item>
                                <NavDropdown.Item href="/Peelings" className={styles.NavDropdown}>Peeling</NavDropdown.Item>
                                <NavDropdown.Item href="/GlowyLips" className={styles.NavDropdown}>Glowy lips</NavDropdown.Item>
                                <NavDropdown.Item href="/AntiAge" className={styles.NavDropdown}>Anti Age</NavDropdown.Item>
                                <NavDropdown.Item href="/Dermaplanning" className={styles.NavDropdown}>Dermaplanning</NavDropdown.Item>
                                <NavDropdown.Item href="/PermanentMakeUp" className={styles.NavDropdown}>Permanent Make Up</NavDropdown.Item>
                                <NavDropdown.Item href="/DermaFull" className={styles.NavDropdown}>Derma full face VC</NavDropdown.Item>
                                <NavDropdown.Item href="/RadiofrecuenciaFacial" className={styles.NavDropdown}>Radiofrecuencia</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Corporal">
                                <NavDropdown.Item href="/Crioradiofrecuencia" className={styles.NavDropdown}>Crioradiofrecuencia</NavDropdown.Item>
                                <NavDropdown.Item href="/DepiDefinitiva" className={styles.NavDropdown}>Depilacion definitiva</NavDropdown.Item>
                                <NavDropdown.Item href="/Himfu" className={styles.NavDropdown}>Himfu</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="https://wa.me/+5491123428263">Turnos</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container >
            </Navbar >
        </>
    )
}
export default NavComponent