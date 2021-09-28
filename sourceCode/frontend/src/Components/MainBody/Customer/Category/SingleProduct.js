import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { Container } from 'react-bootstrap';
import store from '../../../../store';
class SingleProduct extends React.Component{
    constructor(props){
        super(props);
        this.state={
            reduxStore:store.getState().reduxStore,
        }
    }
    onClick(obj){
        if(!this.state.reduxStore.auth.login_status)
            window.location="/login"
        var reqBody={
            productid:obj.id,
            quantity:1,
            custID:this.state.reduxStore.auth.object.id
        }
        console.log(reqBody);
        //this.props.();
    }

    render(){
        return(
            <Grid item lg={3} md={4} sm={6} xs={12}>
                <Card>
                    <CardContent style={{background:"#aaa"}}>
                    <Typography style={{ fontSize: 40 }}  className="d-flex justify-content-center text-success" gutterBottom>
                        {this.props.object.productName}
                    </Typography>
                        <Typography variant="h5" component="div" className="d-flex justify-content-around">
                            <b>   Price: {this.props.object.unitPrice}/KG</b>
                        </Typography>
                        <Container className="d-flex justify-content-around mt-2">
                            <button onClick={this.onClick.bind(this,this.props.object)} className="btn btn-primary">
                                Add to cart
                            </button>
                            {/* <Button className="btn btn-danger">
                                remove
                            </Button> */}
                        </Container>
                    </CardContent>
                </Card>
            </Grid>
        );
    }
}
export default SingleProduct;
