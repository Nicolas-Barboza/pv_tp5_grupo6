import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaHome, FaListUl, FaUserPlus, FaInfoCircle } from 'react-icons/fa';
import '../styles/CustomNavBar.css';

function NavBar() {
    return (
        <Navbar fixed="top" expand="lg" variant="dark" className="custom-navbar">
            <Container fluid>
                <Navbar.Brand as={Link} to="/home" className="custom-navbar-brand"> Gestión de Alumnos</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link as={Link} to="/home" className="custom-nav-link">
                            <FaHome className="me-1" /> Inicio
                        </Nav.Link>
                        <Nav.Link as={Link} to="/alumnos" className="custom-nav-link">
                            <FaListUl className="me-1" /> Lista de Alumnos
                        </Nav.Link>
                        <Nav.Link as={Link} to="/alumnos/nuevo" className="custom-nav-link">
                            <FaUserPlus className="me-1" /> Nuevo Alumno
                        </Nav.Link>
                        <Nav.Link as={Link} to="/acerca" className="custom-nav-link">
                            <FaInfoCircle className="me-1" /> Acerca de
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;