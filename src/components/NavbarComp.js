import React from 'react'
import {Container, Navbar, Offcanvas, Nav, Form, FormControl} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

export default function NavbarComp(){
    return(
      <Navbar key={'sm'} expand={'sm'}>
        <Container fluid>
          <Navbar.Brand href="#">ZIPPER.</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'sm'}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${'sm'}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${'sm'}`}
            placement="end"
          >
          <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'sm'}`}>
              Offcanvas
          </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form className="d-flex search-box">
                <FormControl
                type="search"
                placeholder="Search for books, author or genre...."
                aria-label="Search"
                />
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Form>
          <Nav className="justify-content-end pe-3">
              <Nav.Link href="#action1">HOME</Nav.Link>
              <Nav.Link href="#action2">CONTACT</Nav.Link>
              <Nav.Link href="#action2">BLOG</Nav.Link>
              <Nav.Link href="#action2">ABOUT</Nav.Link>
              <Nav.Link href="#action2">LOGIN</Nav.Link>
          </Nav>
          </Offcanvas.Body>
      </Navbar.Offcanvas>
      </Container>
  </Navbar>
  // <h1>hello</h1>
    )
}