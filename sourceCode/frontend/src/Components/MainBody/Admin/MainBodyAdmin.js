import React, { Component } from 'react';
import store from '../../../store';
import SingleProduct from '../Customer/Category/SingleProduct';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
class MainBodyAdmin extends Component {
    constructor(props){
        super(props)
        this.state={
            product:[]
        }
            this.state.product=store.getState().reduxStore.products
    }
    
    render() {
        return (
            <div>;
                <div style={{marginLeft:'20vw',marginRight:'20vw',width:'60vw',display: "flex",justifyContent: "center"}} >
                    <Button variant="contained" color="secondary">
                            <Link to="/aaa" >
                                <div style={{color:"#fff"}}><AddIcon/>ADD new Product</div>
                            </Link>
                    </Button>
                </div>
                <Grid  container style={{marginTop:'20px',marginLeft:'5vw',marginRight:'5vw',maxWidth:"90vw"}} spacing={3} >
                    
                    {
                        this.state.product.map(
                            (singleFruitObject, index) =>  
                                <SingleProduct key={index} 
                                    object={singleFruitObject} 
                                    spacing={2}
                                    type="FRUITS"
                                />
                        )
                    }
                    </Grid>
            </div>
        )
    }
}

export default  MainBodyAdmin;