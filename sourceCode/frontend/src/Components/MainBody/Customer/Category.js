import React from "react";
import {Card,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
class Category extends React.Component{
    render(){
        return (
            <Grid item md ={4}>
                <Card style={{margin:"5vw",  alignItems: "center",justifyContent: "center",background:"#388"}} >
                    <Card.Img variant="top" src={this.props.imgSrc}  style={{width:"70%",height:'18vh',marginTop:"20px"}} alt={this.props.title}/>
                    <Card.Body>
                        <Card.Title><h2>{this.props.title}</h2></Card.Title>
                        <Card.Text>
                            {this.props.text}
                        </Card.Text>
                        <Button variant="dark" style={{width:'10vw'}}><Link to={this.props.link} className="btn btn-sec text-success">{this.props.title}</Link></Button>
                    </Card.Body>
                </Card>
            </Grid>
        );
    }
}
export default Category;