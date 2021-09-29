import React from 'react'
import { Grid } from '@material-ui/core';
import store from '../../store';

export class SingleCartItem extends React.Component {
    constructor(props){
        super(props)
        this.state={
            reduxStore:store.getState().reduxStore
        }
    }
    render() {
        return (
            <div style={{marginLeft:'5vw',marginRight:'5vw'}}>
                {console.log(this.props.object)}
                {this.props.object!==null?
                <Grid container justifyContent="space-around">
                    <Grid item>
                        {this.props.object.products.productName}
                    </Grid>
                    <Grid item>
                        {this.props.object.quantity}
                    </Grid>
                </Grid>
                :console.log("A")}
            </div>
        )
    }
}

export default SingleCartItem;
