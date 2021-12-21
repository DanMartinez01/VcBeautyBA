import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import styles from './NavComponent.module.css';
import { FaInstagram } from 'react-icons/fa';
import React, { Component } from 'react';
import Link from 'next/dist/client/link';

export const NavComponent = () => {
    return (
        <Navbar className={styles.navBarColor} sticky="top" collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>





        // <Navbar className={styles.navBarColor} expand="lg" sticky="top" variant="dark" >
        //     < Container >
        //         <Navbar.Brand href="/">VC Beauty</Navbar.Brand>
        //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //         <Navbar.Collapse id="basic-navbar-nav">
        //             <Nav className="me-auto">
        //                 <Link href="/">
        //                     <a className={styles.navBarLink}>Higiene Facial</a>
        //                 </Link>
        //                 <Link href="#link">
        //                     <a className={styles.navBarLink}>Glowy Lips</a>
        //                 </Link>
        //                 <Link href="/Contacto/Contacto">
        //                     <a className={styles.navBarLink}>Corporal</a>
        //                 </Link>
        //                 <Link href="/Contacto/Contacto">
        //                     <a className={styles.navBarLink}>Jornadas</a>
        //                 </Link>
        //                 <Link href="https://www.instagram.com/vc.beautyba/">
        //                     <a className={styles.navBarLink}>Turnos</a>
        //                 </Link>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container >
        // </Navbar >
    )
}
export default NavComponent