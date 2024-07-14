import {Nav, Navbar, NavbarCollapse, Container, Button} from "react-bootstrap"
import { Link } from "react-router-dom";
import "./Menu.css"

function Menu() {
    return (
        <header>
            <Navbar className="nav-bar" bg="dark" expand ="md" data-bs-theme="dark" >
                <Container fluid>
                    <Link to="/">
                    </Link>
                    <Navbar.Toggle />
                    <NavbarCollapse>
                        <Nav className="nave">
                            <Link className="nav-link" to="/login">Login</Link>
                            <Link className="nav-link" to="/cadastro">Cadastro</Link>
                            <Link className="nav-link" to="/contato">Contato</Link>
                            <Link className="nav-link" to="/">Página Inicial</Link>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Menu;