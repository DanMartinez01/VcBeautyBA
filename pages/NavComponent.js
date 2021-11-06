import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import { FaInstagram } from 'react-icons/fa';

function NavComponent() {
    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="#home">Vc Beauty BA</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Productos</Nav.Link>
                        <NavDropdown title="Tratamientos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Corporal</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Glowy Lips</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Higiene facial</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Antes y Despues</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">Contacto</Nav.Link>
                        <Nav.Link href="#link">
                            <FaInstagram color="black" size="20px" />
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavComponent