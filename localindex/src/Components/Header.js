import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import info_logo from "../assets/info_icon_small.png";
import { landmarks, places } from "./pins";

function Header({ setPins }) {
  return (
    <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">V-STARS</Navbar.Brand>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown title="Category" bg="dark" data-bs-theme="dark">
              <NavDropdown.Item onClick={() => setPins(landmarks)}>
                Landmarks
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setPins(places)}>
                Places
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action1">
              <img
                src={info_logo}
                style={{ filter: "invert(1)", width: "50", height: "auto" }}
              ></img>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
