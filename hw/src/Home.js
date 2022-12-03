import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import { NaviBar } from './NaviBar';
import { MusicList } from './MusicList';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import bb from './images/bb.jpg'

export function Home() {
    const navigate = useNavigate();
  
  return (
    <>
   <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">HipHop - The Music Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/CreateUser">Create User</Nav.Link>
            <Nav.Link href="/UsersList">Our Customers</Nav.Link>
            <NavDropdown title="Genre" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/MusicList">Music Collection</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/MusicList">
                Pop
              </NavDropdown.Item>
              
              <NavDropdown.Item href="/MusicList">
                Rock
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              About Us
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-success"> <Nav.Link href="/Login">Login</Nav.Link></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Carousel style={{width:'40%',height: '200px',marginLeft:'30%', marginTop:'5%'}}>
      <Carousel.Item>
      <img className="d-block w-100" alt="timer" src={require('./images/ts.jpg')} />

        <Carousel.Caption>
          <h3>Taylor Swift</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" alt="timer" src={require('./images/dl.jpg')} />

        <Carousel.Caption>
          <h3>Backstreet Boys</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" alt="timer" src={require('./images/ts.jpg')} />

        <Carousel.Caption>
          <h3>Duo Lipa</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        
    
  
    </>
  )
}
