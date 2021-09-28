import React from 'react';
import {Card, Container,Row} from 'react-bootstrap';
import Header from '../Dashboard/Header';
import Footer from '../Dashboard/Footer';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

class Contact extends React.Component{
    render(){
        
        return(
            <>
                <Header/>
                <Container>
                    <Row>
                <Card className="text-center" style={{width:'20rem',margin:'auto',marginTop:'10vh'}}>
                    <Card.Body>
                        <Card.Title><MailOutlineIcon/>Email</Card.Title>
                        <hr/>
                        <Card.Text>GreenBasket.cdac2021@gmail.com</Card.Text>
                        
                    </Card.Body>
                </Card>
                <Card className="text-center" style={{width:'20rem',margin:'auto',marginTop:'10vh'}}>
                    <Card.Body>
                            
                        <Card.Title><PhoneAndroidIcon/>Contact Number</Card.Title>
                        <hr/>
                        <Card.Text>+91 880-670-3017</Card.Text>
                        
                    </Card.Body>
                </Card>
                </Row>
                </Container>
                <Footer/>
            </>
        );
    }
}


export default Contact;