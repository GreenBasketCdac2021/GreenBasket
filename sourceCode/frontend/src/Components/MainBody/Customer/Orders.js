import {Grid} from '@material-ui/core';
import React, { Component } from 'react'
import Footer from '../../Dashboard/Footer';
import Header from '../../Dashboard/Header';

class Orders extends Component {
    render() {
        return (
            <div>
                <Header/>
                    <Grid justifyContent="Center">
                        <Grid item>
                            <h1>ALL Orders</h1>
                        </Grid>
                    </Grid>
                <Footer/>
            </div>
        )
    }
}
export default Orders;
