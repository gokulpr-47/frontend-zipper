import { useContext, useEffect, useState } from 'react'
import {Container, Navbar, Offcanvas, Nav, Form, FormControl} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { LoginContext } from '../contexts/LoginContext';
import axios from 'axios'
import Homepage from './Homepage'

export default function NavbarComp(){
  const [password, setPassword] = useState();
  const { isLoggedIn, setIsLoggedIn, setUser } = useContext(LoginContext);
  const sendLogOut = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "https://fc-24.herokuapp.com/logout",
    }).then((res) => {
      if (res.data.isLoggedOut) {
        setIsLoggedIn(false);
        setUser(null);
      }
    });
  };
  
  useEffect(() => {
    axios({
      method: "GET",
      withCredentials: true,
      //   url: "https://quizzooo.herokuapp.com/getuser",
      url: "https://fc-24.herokuapp.com/getuser",
    })
      .then((res) => {
        if (res.data.isLoggedIn) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch((e) => {
        console.log(e, "error");
      });
  }, []);

  return(
      <Navbar key={'sm'} expand={'sm'}>
        <Container fluid>
          <Navbar.Brand href="#">Z</Navbar.Brand>
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
            <input
                type="text"
                id="text"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Search for books...."
            />
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Form>
          <Nav className="justify-content-end pe-3">
              <Link to={`/`}>HOME</Link>
              <Link to={`/dashboard`}>DASHBOARD</Link>
              <Nav.Link>BLOG</Nav.Link>
              <Nav.Link>ABOUT</Nav.Link>
              {isLoggedIn? (
              <Nav.Link onClick={sendLogOut}>logout</Nav.Link>
                
              ):(
                <Nav.Link className="nav-link" as={Link} to="/signup">SIGNUP</Nav.Link>
              )}
              
          </Nav>
          </Offcanvas.Body>
      </Navbar.Offcanvas>
      </Container>
  </Navbar>
  // <h1>hello</h1>
    )
}