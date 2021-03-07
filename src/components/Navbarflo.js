import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Contactus from './Contactus'
import { Link } from 'react-router-dom';


function Navbarflo(){
return(
  <div>
    <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#home" style={{fontFamily:'Sacramento', fontSize:'30px'}}>
    <img
        alt=""
        src="https://i.ibb.co/99Q6M0B/logo.png"
        width="45"
        className="d-inline-block align-middle mr-2"
      />{' '}
  
  Floracious 
</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

    <Navbar.Collapse id="responsive-navbar-nav">

    <Nav className="ml-auto">
      <Link to="/Contactus" style={{color:'white'}}>Floral Boxes</Link>
      <Nav.Link href="#" style={{color:'white'}}>Gift Hampers</Nav.Link>
      <Nav.Link href="#" style={{color:'white'}}>Decors</Nav.Link>
      <Nav.Link href="#" style={{color:'white'}}>Cake Boxes</Nav.Link>
      <Nav.Link href="#" style={{color:'white'}}>Message Us</Nav.Link>

    </Nav>
    </Navbar.Collapse>

  </Navbar>
  </div>
);
}





export default Navbarflo