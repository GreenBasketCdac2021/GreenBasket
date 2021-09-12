import React from 'react';

import {Navbar,Container} from 'react-bootstrap';
import ContactsIcon from '@material-ui/icons/Contacts';
import InfoIcon from '@material-ui/icons/Info';

class Footer extends React.Component{
    render() {
        return(
            <div className="fixed-bottom">  
                <Navbar  bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/contact"><ContactsIcon/> Contact us</Navbar.Brand>
                        
                        <Navbar.Brand href="/about"><InfoIcon/> About us</Navbar.Brand>
                        <Navbar.Brand href="/"></Navbar.Brand>

                    </Container>
                </Navbar>
            </div>
        )
    }
}
export default Footer;