import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
class SingleFruit extends React.Component{
    render(){
        
        return(
            <>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {this.props.name}
                        </Typography>
                        <Typography variant="h5" component="div">
                        {this.props.quntity}   {this.props.price}
                        </Typography>
                    </CardContent>
                    <hr/>
                </Card>
            </>
        );
    }
}
export default SingleFruit;
