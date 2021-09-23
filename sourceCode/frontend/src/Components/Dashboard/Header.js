import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            auth:false,
            userName:"Ankush"
        };
    }
    render(){
        let LoginUser;
        let AdminLogin;
        if(this.state.auth){
            AdminLogin=<></>;
            LoginUser=<Nav.Link>
                        <AccountCircleIcon/>
                        {this.state.userName}
            </Nav.Link>;
        }
        else{
            AdminLogin=<Nav.Link href="AdminLogin"><LockIcon/>Admin Login</Nav.Link>;
            LoginUser=<>
                        <Nav.Link href="login">
                            <LockIcon/>Login  
                        </Nav.Link>
                    </>;
        }
        return(
            <Navbar bg="dark" variant="dark">
                <Container>
                        <Navbar.Brand href="/">
                            <img src="logo.png" style={{maxWidth:'50px'}} alt='logo' />
                            <div style={{display:'inline-block',position:'absolute',align:'center',textAlign:'center',color:'#fec14e'}}>
                                <h1> Green Basket</h1>
                            </div>    
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto"/>
                            
                            <Nav>
                                {AdminLogin}
                                {LoginUser}
                                <Nav.Link href="cart"><ShoppingCartIcon/>cart</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    };
}
export default Header;