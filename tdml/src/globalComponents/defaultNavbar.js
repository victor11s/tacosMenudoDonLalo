import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function DefaultNavbar() {
    return (
        <>
            <Navbar bg="light" variant="light" Style={ "padding: 10px 0 10px 0; margin-bottom: 10px"}>
                <Container>
                    <Navbar.Brand href="#home">Tacos y Menudo Don Lalo</Navbar.Brand>
                    <div Style={"width: match-parent; text-align: right;"}>
                        <Nav className="me-auto">
                            <Nav.Link href="/login">
                                <Button variant="light">Iniciar sesión</Button>
                            </Nav.Link>
                            <Nav.Link href="/signin">
                                <Button variant="outline-secondary">Registrarse</Button>
                            </Nav.Link>
                        </Nav>
                    </div>
                </Container>
            </Navbar>
        </>
    );
}

export default DefaultNavbar;

// import { Col, Nav, NavLink, NavMenu } from 'react-bootstrap'

// export default function defaultNavbar() {
//     return (
//         <div>
//             <Nav>
//                 <NavLink to='/'>
//                     <img src={"..."} alt="" style={{ width: 75 }} />
//                 </NavLink>
//                 <NavMenu>
//                     <NavLink to='/catalogo' activeStyle>Cátalogo</NavLink>
//                     <NavLink to='/miPerfil' activeStyle>Mi Perfil</NavLink>
//                 </NavMenu>
//                 <div className='row'>
//                     <Col>
//                         <NavLink to="/">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
//                                 <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
//                             </svg>
//                         </NavLink>
//                     </Col>
//                 </div>
//             </Nav>
//         </div>
//     )
// }

