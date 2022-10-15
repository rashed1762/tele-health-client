import React from 'react';
import '../../Components/Cssfile/Nav.css'
import img1 from '../../assets/icons/logo2.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink,Link } from 'react-router-dom';
const Navcomp = () => {
  return (
    <div>
             <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img className='logo' src={img1} alt="" /> <span className='logoname'>TeleHealth</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">


           <NavLink className="navstyle" to="/" as={Link}> Home</NavLink> 
           <NavLink className="navstyle" to="/about" as={Link}> about</NavLink> 
           <NavLink className="navstyle" to="/appoinment" as={Link}> Appointment</NavLink> 
           <NavLink className="navstyle" to="/review" as={Link}> Review</NavLink> 
           <NavLink className="navstyle" to="/contact" as={Link}> Contact</NavLink> 
           </Nav>

           <Nav className='ms-auto'>
           <NavLink className="navstyle" to="/login" as={Link}> Login</NavLink> 
           </Nav>
           
          
            
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
  )
}

export default Navcomp;