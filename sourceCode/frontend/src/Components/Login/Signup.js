import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { registerUser } from '../../actions/postActions';
import { connect } from 'react-redux';

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




class SignUp extends Component {
    constructor(prop){
        super(prop);
        this.state={
            firstName:"",
            lastName:"",
            email:"",
            password:1,
            phone:"",
            address:"",
        }
        this.onSubmit=this.onSubmit.bind(this);
        this.onChange=this.onChange.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        var reqBody=this.state;
        
        console.log(reqBody)
        var temp=this.state;
        this.props.registerUser(temp);
        
    }
    render() {
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
                            <h1 style={{color:'red'}}>Sign Up</h1>
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} justifyContent="flex-end">
                        <Grid item md={6} sm={6} xs={6}>
                            <TextField  onChange={this.onChange} name="firstName" margin="normal" variant="filled" label="First Name" type="text" fullWidth required/>
                        </Grid>
                        <Grid item md={6} sm={6} xs={6}>
                            <TextField  onChange={this.onChange} name="lastName" margin="normal" variant="filled" label="Last Name" type="text" fullWidth required/>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                        <TextField  onChange={this.onChange} name="email" margin="normal" variant="filled" label="Email ID" type="email" min="1" fullWidth required/>
                        </Grid>
                        <Grid item md={6} sm={6} xs={6}>
                            <TextField  onChange={this.onChange} name="password" margin="normal" variant="filled" label="Password" type="password" min="0" fullWidth required/>
                        </Grid>
                        <Grid item md={6} sm={6} xs={6}>
                            <TextField  onChange={this.onChange} name="phone" margin="normal" variant="filled" label="Phone Number" type="number" min="0"inputProps={{minLength:10, maxLength: 12 }} fullWidth required/>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                        <TextField  onChange={this.onChange} name="address" margin="normal" variant="filled" label="Address" type="text" min="1" fullWidth required/>
                        </Grid>
                    </Grid>
                    
                    
                    <Grid container justifyContent="center" style={{ marginTop: '2vh' }}>
                        <Grid item md={4}>

                            <Button  onSubmit={this.onSubmit} type="submit" variant="contained" style={{ textTransform: "none", backgroundColor:"#fec14e",color:"white",minWidth:"100px",fontWeight:'bolder',fontSize:'medium',borderRadius:'5pt'}}>
                                Sign Up
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </form>
            
            </div>
        )
    }
}

const mapStateToProps =state=>({
    products:state.reduxStore.products
})

export default connect(mapStateToProps,{registerUser})(SignUp);