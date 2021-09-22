import React from "react";
import {Card,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
class Category extends React.Component{
    render(){
        return (
            <Grid md ={4}>
                <Card style={{  marginTop:'10px',marginRight:"5vw",  alignItems: "center",justifyContent: "center",background:"#aaa"}} >
                    <Card.Img variant="top" src={this.props.imgSrc}  style={{width:"70%",height:'18vh',marginTop:"20px"}} alt={this.props.title}/>
                    <Card.Body>
                        <Card.Title><h2>{this.props.title}</h2></Card.Title>
                        <Card.Text>
                            {this.props.text}
                        </Card.Text>
                        <Button variant="success" style={{width:'10vw'}}><Link to={this.props.link} className="btn btn-sec">{this.props.link}</Link></Button>
                    </Card.Body>
                </Card>
            </Grid>
        );
    }
}
export default Category;