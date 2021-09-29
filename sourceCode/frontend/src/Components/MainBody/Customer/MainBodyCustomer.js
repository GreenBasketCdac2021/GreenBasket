import React from "react";
import Category from "./Category";
import Grid from '@material-ui/core/Grid';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Vegetable from './vegetable.jpg';
import Fruits from './fruits.jpg';
import Sprouts from './sprouts.png';

const category={
    fruit:{title:"Fruits",text:"",link:"fruits"},
    vegetables:{title:"Vegetables",text:" ",link:"vegetables"},
    sprouts:{title:"Sprouts",text:" ",link:"sprouts"}
}
class MainBody extends React.Component{
    render(){
        return (
            <div style={{marginLeft:'0px',width:'100%', background: '#aaa',position:'absolute',MarginTop:'0'}}>
                
                {/* <div style={{width:"100%",marginTop:"10px"}}>
                    <center><img src={Photo} style={{width:'40vw'}} alt="fruit"/></center>
                </div> */}
                <Grid container alignItems="flex-end" style={{marginTop:'20px'}} className="justify-content-around">
                    <Category title={category.fruit.title} imgSrc={Fruits} text={category.fruit.text} link={category.fruit.link} type="FRUITS"/>
                    <Category title={category.vegetables.title} imgSrc={Vegetable} text={category.vegetables.text} link={category.vegetables.link} type="VEGETABLES"/>
                    <Category title={category.sprouts.title} imgSrc={Sprouts} text={category.sprouts.text} link={category.sprouts.link} type="SPROUTS"/>
                </Grid>
                <br/>
                <br/>
                <br/>
                <Link to="/all" >
                    <Button variant="success" style={{width:'20%',marginLeft:'40vw',marginTop:'0px'}}>
                        
                            All
                    </Button>
                
                </Link>
                <div style={{marginTop:"30vh"}}></div>
            </div>
        );
    }
}
export default MainBody;