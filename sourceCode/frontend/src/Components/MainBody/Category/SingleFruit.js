import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { Container } from 'react-bootstrap';
class SingleFruit extends React.Component{
    
    sayHello=(obj)=>console.log(obj)

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
                            <button onClick={this.sayHello.bind(this,this.props.object)} className="btn btn-primary">
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
export default SingleFruit;
