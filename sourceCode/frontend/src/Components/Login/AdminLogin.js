import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import {checkAdminLogin} from '../../actions/postActions';
import {connect} from 'react-redux';
import PropTyes from 'prop-types';
import Header from '../Dashboard/Header';
import Footer from '../Dashboard/Footer';
import { Redirect } from 'react-router-dom';
import store from '../../store';

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

class AdminLogin extends React.Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            loadedin:store.getState().reduxStore.auth.login_status
        };
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        const reqBody={
            email:this.state.email,
            password:this.state.password
        }
        console.log(reqBody);
        this.props.checkAdminLogin(reqBody);
    }
    render(){
    return (
        <div>
            <Header/>
            
            {store.getState().reduxStore.auth.login_status?<Redirect to="/" />:
            <form onSubmit={this.onSubmit} style={{height:'100vh',width:'100vw', background: 'linear-gradient(135deg, #364755 50%, #182835 50%)',position:'absolute',top:'0',left:'0'}}>
                <img src="logo.png" style={{maxWidth:'100px'}} alt='logo' />
                <div style={{display:'inline-block',position:'absolute',marginTop:'30px',textAlign:'center',color:'#fec14e'}}>
                    <h1> Green Basket</h1>
                </div>
                <div style={style}>
                    <Grid container spacing={8} alignItems="center">
                        <Grid item>
                            <h1>Login</h1>
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        {/* <Grid item md={3}>Username</Grid> */}
                        <Grid item md={12} sm={12} xs={12}>
                            <TextField  onChange={this.onChange} name="email" margin="normal" variant="outlined" label="email" type="text" fullWidth required />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        {/* <Grid item md={3}>Password</Grid> */}
                        <Grid item md={12} sm={12} xs={12}>
                            <TextField  onChange={this.onChange}   name="password" margin="normal" variant="outlined" label="Password" type="password" fullWidth required />
                        </Grid>
                    </Grid>
                    <Grid container style={{marginTop:'5vh'}}>
                        <Grid item>
                            <FormControlLabel control={
                                <Checkbox
                                    color="secondary"
                                />
                            } label="Remember me" />
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center">
                        <Grid item>
                            <Link href="signup">
                                    create new account
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="forgotPassword">
                                    forgotpassword
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center" style={{ marginTop: '2%' }}>
                        <Grid item md={4}>

                            <Button  onSubmit={this.state.onSubmit} type="submit" variant="contained" style={{ textTransform: "none", backgroundColor:"#fec14e",color:"white",minWidth:"100px",fontWeight:'bolder',fontSize:'medium',borderRadius:'5pt'}}>
                                Login
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </form>
            }
            <Footer/>
        </div>
        
    );
    }
}
AdminLogin.propTypes={
    checkAdminLogin:PropTyes.func.isRequired
}
const mapStateToProps =state=>({
    auth:state.reduxStore.auth,
    products:state.reduxStore.products
})
export default connect(mapStateToProps,{checkAdminLogin})(AdminLogin);