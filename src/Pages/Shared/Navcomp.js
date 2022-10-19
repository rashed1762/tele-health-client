import React from 'react';
import '../../Components/Cssfile/Nav.css'
import img1 from '../../assets/icons/logo2.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { NavLink,Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Button from 'react-bootstrap/Button';
import { signOut } from 'firebase/auth';
const Navcomp = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
};
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
           {
            user && <NavLink className="navstyle" to="/dashboard" as={Link}> Dashboard</NavLink> 
           }
           </Nav>

           <Nav className='ms-auto'>
            {
              user?  <button className="btn btn-primary" onClick={logout} >Sign Out</button> :
                 <NavLink className="navstyle" to="/login" as={Link}> Login</NavLink> 
            }
          
           </Nav>
           
          
            
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
  )
}

export default Navcomp;