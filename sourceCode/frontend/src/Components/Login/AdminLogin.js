import {TextField,Grid,Button,Checkbox,FormControlLabel, CircularProgress} from '@material-ui/core';

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

const AdminLogin =()=> {

    
        // useEffect(()=>{
        //     dispatch({ type:"RESET_STORE"});
        // },[])
    const isLoading=false;
    

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit} style={{height:'100vh',width:'100vw', background: 'linear-gradient(135deg, #364755 50%, #182835 50%)',position:'absolute',top:'0',left:'0'}}>
            <img src="logo.png" style={{maxWidth:'100px'}} alt='logo' />
            <div style={{display:'inline-block',position:'absolute',top:'30px',textAlign:'center',color:'#fec14e'}}>
                <h1> Green Basket</h1>
            </div>
            <div style={style}>
                <Grid container spacing={8} alignItems="center">
                    <Grid item>
                        <h1>Admin Login</h1>
                    </Grid>
                </Grid>
                <Grid container spacing={8} alignItems="flex-end">
                    {/* <Grid item md={3}>Username</Grid> */}
                    <Grid item md={12} sm={12} xs={12}>
                        <TextField /*onChange={(e)=> {setUserName(e.target.value)}}*/ id="usrn" margin="normal" variant="outlined" label="Username" type="text" fullWidth required />

                    </Grid>
                </Grid>
                <Grid container spacing={8} alignItems="flex-end">
                    {/* <Grid item md={3}>Password</Grid> */}
                    <Grid item md={12} sm={12} xs={12}>
                        <TextField /*onChange={(e)=> {setPassword(e.target.value)}}*/   id="pswd" margin="normal" variant="outlined" label="Password" type="password" fullWidth required />
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
                        {isLoading ?
                        <CircularProgress />
                        :<Button  type="submit" variant="contained" style={{ textTransform: "none", backgroundColor:"#fec14e",color:"white",minWidth:"100px",fontWeight:'bolder',fontSize:'medium',borderRadius:'5pt'}}>Login</Button>}
                        
                    </Grid>
                </Grid>
                <Grid container justify="center" style={{ marginTop: '2%' }}>
                    <Grid item md={4} fullWidth>
                        {/*isBad ?<Alert severity="error"><AlertTitle>Error</AlertTitle>{errMessage}</Alert>:<></>*/}
                    </Grid>
                </Grid>
                
            </div>
        </form>
        </div>
    );
}
export default AdminLogin;