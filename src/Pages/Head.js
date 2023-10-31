import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Head() {
  return (
    <div>
         <Navbar bg="primary" data-bs-theme="dark">
        <Container>
        <Link to={"/"} style={{textDecoration: 'none'}}>
            <Navbar.Brand className='d-flex' href="#home"><i className="fa-solid fa-photo-film fa-beat-fade fa-4x me-4"></i>  <h3>VIDEO UPLOADER</h3>
            </Navbar.Brand>
        </Link>

          
        </Container>
      </Navbar>
    </div>
  )
}

export default Head