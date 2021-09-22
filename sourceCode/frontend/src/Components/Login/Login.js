import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import {useState} from 'react';
import UserServiceFetch from '../../services/UserServiceFetch';
const style = {
    maxWidth:'40%',
    minWidth:'400px',
    padding:'30px' ,
    margin:'auto',
    marginTop:"5vh",
    // backgroundColor:'#4c5f7a',
    backgroundColor:'white',
    color:'black',
    textAlign:'center',
    borderRadius:'10pt',
    fontWeight:'bold'
};

export default function Login() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // console.log(email,password)
    // const reqBody={email:email,password:password};
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email,password);
        const reqBody={
            email:email,
            password:password
        }
        // function login(){
        //     console.log(email,password)
        //     const reqBody={email:email,password:password};

        //     let result= fetch(
        //         "http://localhost:8080/user/login",
        //         {
        //             method: "POST",
        //             headers: { 'Content-Type': 'application/json' },
        //             body: JSON.stringify(reqBody)
        //         }
        //     );
        //     result= result.json();

        
        fetch(
            "http://localhost:8080/customer/login",
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(reqBody)
            }
        ).then(
            res=>res.json()
        
        ).then(
/*<<<<<<< HEAD*/
            data=>{console.log(data);
            alert("login successful");
            window.location.replace("http://localhost:3000")}
            /*data=>{
                console.log(data);
               window.location.replace("http://localhost:3000");*/
            
        ).catch((err) => {
            alert("invalid Credentials")
        });
    }
    return (
        <div>
            <form onSubmit={handleSubmit} style={{height:'100vh',width:'100vw', background: 'linear-gradient(135deg, #364755 50%, #182835 50%)',position:'absolute',top:'0',left:'0'}}>
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
                            <TextField value={email} onChange={(e)=> {setEmail(e.target.value)}} id="username" margin="normal" variant="outlined" label="Username" type="text" fullWidth required />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        {/* <Grid item md={3}>Password</Grid> */}
                        <Grid item md={12} sm={12} xs={12}>
                            <TextField value={password} onChange={(e)=> {setPassword(e.target.value)}}   id="password" margin="normal" variant="outlined" label="Password" type="password" fullWidth required />
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" justify="space-between" style={{marginTop:'5vh'}}>
                        <Grid item>
                            <FormControlLabel control={
                                <Checkbox
                                    color="secondary"
                                />
                            } label="Remember me" />
                        </Grid>
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: '2%' }}>
                        <Grid item md={4} fullWidth>
                            <Button type="submit" variant="contained" style={{ textTransform: "none", backgroundColor:"#fec14e",color:"white",minWidth:"100px",fontWeight:'bolder',fontSize:'medium',borderRadius:'5pt'}}>Login</Button>
                            
                        </Grid>
                    </Grid>
                </div>
            </form>
        </div>
    );
}