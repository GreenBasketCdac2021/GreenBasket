import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { Container } from 'react-bootstrap';
import store from '../../../store';
import {deleteProductByID} from '../../../actions/postActions';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
class SingleProduct extends React.Component{
    constructor(props){
        super(props)
        this.state={
            reduxStore:store.getState().reduxStore,
            product:{}
        }
        
    }
    update(obj){
        console.log(obj);
    }
    delete(obj){
        console.log(obj.id);
        
        this.props.deleteProductByID(obj.id);
        window.location.replace("/");
    }

    render(){
        return(
            <Grid item lg={3} md={4} sm={6} xs={12}>
                <Card>
                    <CardContent style={{background:"#fff"}}>
                        <Typography style={{ fontSize: 40 }}  className="d-flex justify-content-center text-success" gutterBottom>
                            {this.props.object.productName}
                        </Typography>
                        <Typography variant="h6" component="div" className="d-flex justify-content-around">
                            {this.props.object.productDescription}
                        </Typography>
                        <Typography variant="h5" component="div" className="d-flex justify-content-around">
                            <b>   Price: {this.props.object.unitPrice}/KG</b>
                        </Typography>
                        <Typography variant="h5" component="div" className="d-flex justify-content-around">
                            <b>   Remainig Stock : {this.props.object.stock}</b>
                        </Typography>
                        <Container className="d-flex justify-content-around mt-2">
                            <button className="btn btn-primary">
                            <Link style={{color:"white"}} to={{pathname: "/UpdateProduct", state: this.props.object.id}}>
                                Update
                            </Link>
                            </button>
                            <button onClick={this.delete.bind(this,this.props.object)} className="btn btn-danger">
                                remove
                            </button>
                        </Container>
                    </CardContent>
                </Card>
            </Grid>
        );
    }
}
const mapStateToProps =state=>({
    reduxStore:state.reduxStore
})
export default connect(mapStateToProps,{deleteProductByID})(SingleProduct);
