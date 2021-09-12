import React from 'react';
import Footer from '../Dashboard/Footer';
import Header from '../Dashboard/Header';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Container,Row } from 'react-bootstrap';
import logo from './../Dashboard/logo.png'

function CardView(props){
    return <Card style={{maxWidth:  '15rem',margin:'auto',color:'red'}}>
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
                <h1 className="text-center"><img src={logo} width="50" height="50" alt="logo"/>Green Basket</h1>
                
                <p style={{marginLeft:'10rem',marginRight:'10rem'}}>
                &emsp;&emsp;information about green basket paragraph 1.information about green basket paragraph 1.information about green basket paragraph 1.information about green basket paragraph 1.information about green basket paragraph 1.information about green basket paragraph 1.information about green basket paragraph 1.
                </p>
                <p style={{marginLeft:'10rem',marginRight:'10rem'}}>
                &emsp;&emsp;information about green basket paragraph 1.information about green basket paragraph 1.information about green basket paragraph 1.information about green basket paragraph 1.information about green basket paragraph 1.information about green basket paragraph 1.information about green basket paragraph 1.
                </p>
                <p style={{marginLeft:'10rem',marginRight:'10rem'}}>
                &emsp;&emsp;information about green basket paragraph 1.information about green basket paragraph 1.information about green basket paragraph 1.information about green basket paragraph 1.information about green basket paragraph 1.information about green basket paragraph 1.information about green basket paragraph 1.
                </p>
                <hr/>
                <Container>
                    <Row className="text-center">
                        <h1>Developers</h1>
                    </Row>
                    <Row style={{marginTop:'2vh'}}>
                        <CardView title="Suyash" about="Completed Cdac from ACTS May2021"/>;
                        <CardView title="Ankit" about="Completed Cdac from ACTS May2021"/>;
                    </Row>
                    
                    <Row style={{marginTop:'2vh'}}>
                        <CardView title="Akshay" about="Completed Cdac from ACTS May2021"/>;
                        <CardView title="Sameesh" about="Completed Cdac from ACTS May2021"/>;
                    </Row>
                    <Row style={{marginTop:'2vh'}}>
                        
                    <CardView title="Ankush" about="Completed Cdac from ACTS May2021"/>;
                    </Row>
                    
                    <Row style={{marginTop:'10vh'}}></Row>
                </Container>
                <Footer/>
            </>
        );
    }
}
export default About;