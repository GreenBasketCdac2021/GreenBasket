import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


    const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        background:'#364755'
    },
    image: {
        backgroundImage: 'url(https://i.pinimg.com/originals/49/7c/a1/497ca14763086602e93eb16bcc095318.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.success.dark,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    }));

    export default function SingUp() {
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root} style={{height:'100vh',width:'100vw', background: 'linear-gradient(135deg, #364755 50%, #182835 50%)',position:'absolute',top:'0',left:'0'}}>
        <CssBaseline />
        <Grid item lg={4} md={1} sm={1}/>
        <Grid item lg={4} md={10} sm={10} xs={12} component={Paper} elevation={6} square style={{marginTop:'5vh',marginBottom:'10vh'}}>
            <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockRoundedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <form className={classes.form} noValidate>
                <Grid container wrap='nowrap' spacing={2}>
                    <Grid item md={6}>
                        <TextField variant="outlined" margin="normal" required fullWidth id="firstName" label="firstName" name="firstName" autoComplete="firstName" autoFocus/>
                    </Grid>
                    <Grid item md={6}>
                        <TextField variant="outlined" margin="normal" required fullWidth id="lastName" label="lastName" name="lastName" autoComplete="lastName" autoFocus/>
                    </Grid>
                </Grid>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="address"
                    label="address"
                    type="text"
                    id="address"
                />
                <Grid container justify="center" style={{ marginTop: '2%' }}>
                    <Grid item md={4} fullWidth>

                        <Button fullWidth type="submit" variant="contained" style={{ textTransform: "none", backgroundColor:"#fec14e",color:"white",minWidth:"100px",fontWeight:'bolder',fontSize:'medium',borderRadius:'5pt'}}>Login</Button>
                        
                    </Grid>
                </Grid>
                <Grid container style={{marginTop:"2vh"}}>
                    <Grid item xs>
                        <Link href="forgotPassword" variant="body2">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="signup" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
            </form>
            </div>
        </Grid>
        <Grid item lg={4} md={1}  sm={1}/>
        </Grid>
    );
    }