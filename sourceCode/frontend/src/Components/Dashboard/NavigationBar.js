import React from 'react';
import {Navbar,Nav,Container,Row} from 'react-bootstrap';
import logo from './logo.png';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';

class NavigationBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            auth:true,
            userName:"Ankush"
        };
    }
    render(){
        let LoginUser;
        if(this.state.auth){
            LoginUser=<>
                        
                        <AccountCircleIcon/>
                        {this.state.userName}
            </>;
        }
        else{
            LoginUser=<>
                        <AccountCircleIcon/>
                        Login
                    </>;
        }
        return(
            <Navbar bg="dark" variant="dark">
                <Container>
                        <Navbar.Brand href="/"><img src={logo} width="25" height="25" alt="logo"/>Green Basket</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto"/>
                            
                            <Nav>
                                <Nav.Link href="AdminLogin"><LockIcon/>Admin Login</Nav.Link>
                                <Nav.Link href="login">{LoginUser}</Nav.Link>
                                <Nav.Link href="cart"><ShoppingCartIcon/>cart</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    };
}
export default NavigationBar;