import React from 'react';
import Header from '../../Dashboard/Header';
import Footer from '../../Dashboard/Footer';
import SingleFruit from './SingleFruit';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';
import {fetchProducts} from '../../../actions/postActions'

class Fruits extends React.Component{
    constructor(props){
        super(props)
        this.props.fetchProducts();
    }
    // componentDidMount(){
    // }

    render(){
        return(
            <>
                <Header/>
                    <Grid  container style={{marginTop:'20px',marginLeft:'5vw',marginRight:'5vw',maxWidth:"90vw"}} spacing={3} >
                    
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
    products:state.reduxStore.products
})
export default connect(mapStateToProps,{fetchProducts})(Fruits);
