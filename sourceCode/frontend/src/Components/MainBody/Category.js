import React from "react";
import {Card,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
class Category extends React.Component{
    render(){
        return (
            <>
                <Card style={{ width: '18rem' ,marginTop:'10px',marginLeft:"5vw"}} variant="dark">
                    <Card.Img variant="top" src={this.props.imgSrc}  style={{width:'100%',height:'18vh'}} alt={this.props.title}/>
                    <Card.Body>
                        <Card.Title><h2>{this.props.title}</h2></Card.Title>
                        <Card.Text>
                            {this.props.text}
                        </Card.Text>
                        <Button variant="success" style={{width:'100%'}}><Link to={this.props.link} className="btn btn-sec">{this.props.link}</Link></Button>
                    </Card.Body>
                </Card>
            </>
        );
    }
}
export default Category;