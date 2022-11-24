import React from "react";
import { Container, Nav, Navbar,Image, NavDropdown,Button } from "react-bootstrap";
import logo from '../images/logo.gif'

function Header() {
  return (
    <>

    <Navbar>

        <Container>
        
            <Navbar.Brand href="#home"><Image src={logo}></Image></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="me-auto">
                
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About Us</Nav.Link>
                        <Nav.Link href="#link">Services</Nav.Link>
                        <NavDropdown title="Visas" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Student Visa</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown title="Employer Sponsored Visa" href="#action/3.2">
                                
                                    <NavDropdown.Item href="#">Employer Visa Subclass - 482</NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item href="#">Employer Visa Subclass - 494</NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item href="#">Employer Visa Subclass - 186</NavDropdown.Item>
                                
                                </NavDropdown>
                                <NavDropdown.Divider/>
                                <NavDropdown  title="General Skill Migration" href="#action/3.3">
                                
                                    <NavDropdown.Item>Family  Sponsored Visa Subclass - 491</NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item>Skilled Work regional Visa Subclass - 491</NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item>General Skilled Migration Subclass - 190</NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item>Skilled  Independent Visa Subclass - 189</NavDropdown.Item>
                                </NavDropdown>
                                
                        </NavDropdown>
                        <Nav.Link href="#link">Search Course</Nav.Link>
                        <Nav.Link href="#link">Career</Nav.Link>
                        <Nav.Link href="#link">Contact Us</Nav.Link>
                        <NavDropdown.Divider/>
                        <Button variant="warning">Login/Signup</Button>{' '}


                
                </Nav>
            
            </Navbar.Collapse>

        </Container>
    
    </Navbar>

    </>
  );
}

export default Header;