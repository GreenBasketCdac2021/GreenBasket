import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { updateProduct } from '../../../actions/postActions';
import store from '../../../store';
const style = {
    maxWidth:'40%',
    minWidth:'400px',
    padding:'30px' ,
    margin:'auto',
    marginTop:"5vh",
    backgroundColor:'white',
    color:'black',
    textAlign:'center',
    borderRadius:'10pt',
    fontWeight:'bold'
};
class UpdateProduct extends Component {
    constructor(props){
        super(props);
        this.state={
            product:store.getState().reduxStore["products"].filter(e=> e.id===this.props.location.state)[0],
            productName:"",
            productDescription:"",
            unitPrice:0,
            stock:1,
            categoryName:{
                id:0,
                category:""
            },
            type:"FRUITS"
        }
        
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onChange=e=>this.setState({[e.target.name]:e.target.value})
    
    onSubmit(e){
        e.preventDefault();
        var id;
        if(this.state.type==="FRUITS")
            id=1;
        if(this.state.type==="VEGETABLES")
            id=2;
        if(this.state.type==="SPROUTS")
            id=3;
        var reqBody={
            id:this.state.product.id,
            productName:this.state.productName,
            productDescription:this.state.productDescription,
            unitPrice:this.state.unitPrice,
            stock:this.state.stock,
            categoryName:{
                id:id,
                categoryName:this.state.type
            }
        }
        console.log(reqBody);
        this.props.updateProduct(reqBody);
        window.location.replace("/")
    }
    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit} style={{height:'100vh',width:'100vw', background: 'linear-gradient(135deg, #364755 50%, #182835 50%)',position:'absolute',top:'0',left:'0'}}>
                <img src="logo.png" style={{maxWidth:'100px'}} alt='logo' />
                <div style={{display:'inline-block',position:'absolute',marginTop:'30px',textAlign:'center',color:'#fec14e'}}>
                    <h1> Green Basket</h1>
                </div>
                <div style={style}>
                    <Grid container spacing={8} justifyContent="center">
                        <Grid item >
                            <h1 style={{color:'red'}}>Update Product</h1>
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} justifyContent="flex-end">
                        <Grid item md={12} sm={12} xs={12}>
                            <TextField placeholder={this.state.product.productName} onChange={this.onChange} name="productName" margin="normal" variant="filled" label="Product Name" type="text" fullWidth required/>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                            <TextField placeholder={this.state.product.productDescription} onChange={this.onChange} name="productDescription" margin="normal" variant="filled" label="Product Decription" type="text" fullWidth required/>
                        </Grid>
                        <Grid item md={6} sm={6} xs={6}>
                        <TextField placeholder={this.state.product.unitPrice.toString()} onChange={this.onChange} name="unitPrice" margin="normal" variant="filled" label="Unit Price/KG" type="number" min="1" fullWidth required/>
                        </Grid>
                        <Grid item md={6} sm={6} xs={6}>
                            <TextField placeholder={this.state.product.stock.toString()} onChange={this.onChange} name="stock" margin="normal" variant="filled" label="Stock" type="number" min="0" fullWidth required/>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12} >
                            <Form.Select  onChange={this.onChange} name="type">
                                <option value="FRUITS">Fruits</option>
                                <option value="VEGETABLES">Vegetables</option>
                                <option value="SPROUTS">Sprouts</option>
                            </Form.Select>
                        </Grid>
                    </Grid>
                    
                    
                    <Grid container justifyContent="center" style={{ marginTop: '2vh' }}>
                        <Grid item md={4}>

                            <Button  type="submit" variant="contained" style={{ textTransform: "none", backgroundColor:"#fec14e",color:"white",minWidth:"100px",fontWeight:'bolder',fontSize:'medium',borderRadius:'5pt'}}>
                                Update Product
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </form>
            
            </div>
        );
    }
}

const mapStateToProps =state=>({
    reduxStore:state.reduxStore
})
export default connect(mapStateToProps,{updateProduct})(UpdateProduct);