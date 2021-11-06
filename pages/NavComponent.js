import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'

function NavComponent() {
    return (
        <Navbar bg="light" expand="lg">
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
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavComponent