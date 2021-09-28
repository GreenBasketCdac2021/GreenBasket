import React from 'react';
import {Navbar,Nav,Container,Dropdown} from 'react-bootstrap';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import Store from '../../store';
import { resetStore } from '../../actions/postActions';
import {connect} from 'react-redux';

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            auth:Store.getState().reduxStore.auth,
            reduxStore:Store.getState().reduxStore
        };
        
    }
    
    render(){
        return(
            <Navbar bg="dark" variant="dark">{console.log(this.state.auth)}
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
                                    {
                                    this.state.auth.login_status?
                                        <Dropdown>
                                            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                                <AccountCircleIcon/>{this.state.auth.object.firstName}
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={()=>{window.location.replace("/orders")}}>My Orders</Dropdown.Item>
                                                <Dropdown.Item onClick={()=>{this.props.resetStore();window.location.reload()}}>LogOut</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                    :<>
                                        <Nav.Link href="/AdminLogin">
                                            <LockIcon/>Admin Login
                                        </Nav.Link>
                                        <Nav.Link href="/login">
                                            <LockIcon/>Login  
                                        </Nav.Link>
                                    </>
                                    }
                                    {this.state.auth.role==="Customer"?
                                        <Nav.Link href="cart">
                                            <ShoppingCartIcon/>cart
                                        </Nav.Link>
                                    :<></>
                                    }
                                </Nav>
                            </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    };
}
export default connect(null,{resetStore})(Header);