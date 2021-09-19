import React from 'react';
import Footer from '../Dashboard/Footer';
import Header from '../Dashboard/Header';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Container,Row } from 'react-bootstrap';

function CardView(props){
    return <Card style={{maxWidth:  '15rem',margin:'auto',marginTop:'2vh',color:'red',border: `2px solid red`,textAlign:'center'}}>
                        <CardActionArea>
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {props.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {props.about}

                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>;
}
class About extends React.Component{
    render(){
        return(
            <>
                <Header/>
                <h1 className="text-center"><img src='logo.png' width="50" height="50" alt="logo"/>Green Basket</h1>
                
                <p style={{marginLeft:'10vw',marginRight:'10vw'}}>
                &emsp;&emsp;Green-Basket is an online marketplace to buy your daily vegetables and fruit items.In this web-application Farmers and local producers will display their products on the platformDirect B2C service will be provided to the customers without the involvement of Touts at best priceCustomers will choose his required products, which will be added to the Cart and e-bill will begenerated which can be paid online or by cash on dilivery. Our Aim is to Generate and Increasethe revenue of the Farmers.
                </p>
                <hr/>
                <Container>
                    <Row style={{textAlign:'center'}}>
                        <h1>Developers</h1>
                    </Row>

                    <Row>
                        <CardView title="Suyash" about="Completed Cdac from ACTS May2021"/>
                        <CardView title="Ankit" about="Completed Cdac from ACTS May2021"/>
                    </Row>
                    
                    <Row>
                        <CardView title="Akshay" about="Completed Cdac from ACTS May2021"/>
                        <CardView title="Sameesh" about="Completed Cdac from ACTS May2021"/>
                    </Row>
                    
                    <Row>    
                        <CardView title="Ankush" about="Completed Cdac from ACTS May2021"/>
                    </Row>
                    
                    <Row style={{marginTop:'10vh'}}>

                    </Row>
                </Container>
                <Footer/>
            </>
        );
    }
}
export default About;