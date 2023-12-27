import React,{Component} from "react";
import './Navigation.css';
import {Container,Nav,Navbar,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import aithlogo from '../Images/aithlogo.png';
import location from '../Images/location.png';
import { Link } from 'react-router-dom';
export default class Navigation extends Component{
  render(){
    return(
      <div>
        <Navbar collapseOnSelect expand="lg" className="navigtioncss">
          <Container fluid>
            <Navbar.Brand href="#home" style={{color:"white"}}  >E-Proximity</Navbar.Brand>
            <Navbar.Toggle  aria-controls="responsive-navbar-nav" style={{color:"#492BA0"}} />
            <Navbar.Collapse id="responsive-navbar-nav" >
              <NavDropdown title="Login" id="collapsible-nav-dropdown" style={{color:"white"}} >
                <NavDropdown.Item href="student-auth">Student Login</NavDropdown.Item>
                <NavDropdown.Item href="faculty-auth">Faculty Login</NavDropdown.Item>
                <NavDropdown.Item href="admin-auth">Admin Login</NavDropdown.Item>
              </NavDropdown>
              <Nav className="me-auto" >
                <Nav.Link href="#features" style={{color:"white"}} >Home</Nav.Link>
                <Nav.Link href="#pricing" style={{color:"white"}} >About</Nav.Link>
                <Nav.Link href="#pricing" style={{color:"white"}} >Contact</Nav.Link>
                <Nav.Link href="#pricing" style={{color:"white"}} >Academic</Nav.Link>
                <Nav.Link href="#pricing"style={{color:"white"}}  >Strength</Nav.Link>
              </Nav>
              <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="danger">Search</Button>
            </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      <div className="lower-header">
        <div className="collegetitle">
              <div className="eproximity-logo"><img src={aithlogo} className="collegelogo"/></div>
              <div className="title">Dr. Ambedkar Institute Of Technology For Handicapped, Kanpur</div>
        </div>
        <div className="addresstitle">
              <div className="address">Awadhpuri , Khyora <br></br>Near Rama Dental College , Kanpur</div>&nbsp;&nbsp;
              <div className="location-icon"><img src={location} className="locationlogo"/></div>
        </div>
      </div>
    </div>
    )
  }
}