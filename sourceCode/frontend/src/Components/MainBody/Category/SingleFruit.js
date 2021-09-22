import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Button from '@restart/ui/esm/Button';
import { Container } from 'react-bootstrap';
class SingleFruit extends React.Component{
    render(){
        
        return(
            <Grid item lg={3} md={4} sm={6} xs={12}>
                <Card>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {this.props.name}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {this.props.quntity}   {this.props.price}
                        </Typography>
                        <Container className="d-flex justify-content-around">
                            <Button className="btn btn-primary">
                                Add
                            </Button>
                            <Button className="btn btn-danger">
                                remove
                            </Button>
                        </Container>
                    </CardContent>
                </Card>
            </Grid>
        );
    }
}
export default SingleFruit;
