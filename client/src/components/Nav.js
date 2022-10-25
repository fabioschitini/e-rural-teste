import { Navbar,Nav,Container} from 'react-bootstrap';
import { LocationDisplay } from '../App';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navs=()=>{

    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="light">
                <Container>
                    <Navbar.Brand href="#home" style={{color:'white'}}>E-Rural Chalenge</Navbar.Brand>
                    <Navbar.Toggle style={{backgroundColor:'white'}} aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse  id="responsive-navbar-nav">
                        <Nav className="me-auto">
                             <Nav.Link href='/e-rural-teste/' style={{color:'white'}}> Home Page</Nav.Link>
                            </Nav>    
                    </Navbar.Collapse>
                 </Container>
                    </Navbar>
     <LocationDisplay/>
     </div>
    )
}

export default Navs