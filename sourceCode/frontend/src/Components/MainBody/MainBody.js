import React from "react";
import Category from "./Category";
import Photo from './images.jpg'
import Grid from '@material-ui/core/Grid';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Vegetable from './vegetable.jpg';
import Fruits from './fruits.jpg';
import Sprouts from './sprouts.png';

const category={
    fruit:{title:"Fruits",text:"A",link:"fruits"},
    vegetables:{title:"Vegetable",text:"B",link:"vegetable"},
    sprouts:{title:"Sprouts",text:"C",link:"sprouts"}
}
class MainBody extends React.Component{
    render(){
        return (
            <div style={{marginLeft:'0px',width:'100%', background: 'linear-gradient(135deg, #364755 50%, #182835 50%)',position:'absolute',MarginTop:'0'}}>
                <div style={{width:"100%",marginTop:"10px"}}>
                    <center><img src={Photo} style={{width:'40vw'}} alt="fruit"/></center>
                </div>
                <Grid container alignItems="flex-end" style={{marginTop:'20px'}}>
                    
                    <Grid item md={4}>
                        <Category title={category.fruit.title} imgSrc={Fruits} text={category.fruit.text} link={category.fruit.link}/>
                    </Grid>
                    <Grid item md={4}>
                        <Category title={category.vegetables.title} imgSrc={Vegetable} text={category.vegetables.text} link={category.vegetables.link}/>
                    </Grid>
                    <Grid item md={4}>
                        <Category title={category.sprouts.title} imgSrc={Sprouts} text={category.sprouts.text} link={category.sprouts.link}/>
                    </Grid>
                </Grid>
                <br/>
                <br/>
                <br/>
                <Button variant="success" style={{width:'20%',marginLeft:'40vw',marginTop:'0px'}}>
                    <Link to="all" className="btn">
                        All
                    </Link>
                </Button>
                
                <div style={{marginTop:"20vh"}}>a</div>
            </div>
        );
    }
}
export default MainBody;