import React from 'react';
import Header from '../../Dashboard/Header';
import Footer from '../../Dashboard/Footer';
import SingleFruit from './SingleFruit';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';
import {fetchProducts} from '../../../actions/postActions'

class Fruits extends React.Component{
    componentDidMount(){
        this.props.fetchProducts();
    }

    render(){
        return(
            <>
                <Header/>
                    <Grid  container style={{marginTop:'20px',marginLeft:'5vw',marginRight:'5vw',maxWidth:"90vw"}} spacing={3} >
                    {console.log(this.props.products)}
                    {
                        this.props.products.map(
                            (singleFruitObject, index) =>  
                                <SingleFruit key={index} 
                                    object={singleFruitObject} 
                                    spacing={2}
                                    type="FRUITS"
                                />
                        )
                    }
                    </Grid>
                <Footer/>
            </>
        );
    }
}
const mapStateToProps =state=>({
    products:state.postsProducts.products
})
export default connect(mapStateToProps,{fetchProducts})(Fruits);
