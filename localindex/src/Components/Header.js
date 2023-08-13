import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import info_logo from '../assets/info_icon_small.png'

function Header() {
    return (
        <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#">Stars V</Navbar.Brand>
                <Navbar.Collapse>
                <Nav>
                    <NavDropdown
                        title="Category"
                        bg="dark" 
                        data-bs-theme="dark"
                        >
                        <NavDropdown.Item href="#action3">Construction</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            Shortcuts
                        </NavDropdown.Item>
                        {/* <NavDropdown.Divider /> */}
                        {/* <NavDropdown.Item href="#action5">
                            Something else here
                        </NavDropdown.Item> */}
                    </NavDropdown>
                    <Nav.Link href="#action1"><img src={info_logo} style={{filter: 'invert(1)', width: '50', height: 'auto' }}></img></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;