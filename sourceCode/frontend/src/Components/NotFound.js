import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box";
import Headers from './Dashboard/Header';
import Footer from './Dashboard/Footer';
export default class NotFound extends Component {
    render() {
        return (
            <div>
                <Headers/>
                <div style={{background:"black",height:"100vh"}}>
                    <Grid container justifyContent = "center" >
                        <Grid item>
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            className="bg-danger"
                            style={{marginTop:"20vh"}}
                            >
                                <h1>Page NOT FOUND :(
                                    </h1>
                                </Box>
                        </Grid>
                    </Grid>
                </div>
                <Footer/>
            </div>
        )
    }
}
