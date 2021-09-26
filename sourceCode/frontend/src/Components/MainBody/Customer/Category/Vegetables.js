import React from 'react';
import Header from '../../../Dashboard/Header';

import Footer from '../../../Dashboard/Footer';
import SingleProduct from './SingleProduct';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';
import {fetchProducts} from '../../../../actions/postActions'
import store from '../../../../store';

class Vegetables extends React.Component {
    constructor(props){
        super(props)
        this.props.fetchProducts();
        this.state={
            reduxStore:store.getState().reduxStore,
        }
    }
    render() {
        return(
            <>
                <Header/>
                    
                    <Grid  container style={{marginTop:'20px',marginLeft:'5vw',marginRight:'5vw',maxWidth:"90vw"}} spacing={3} >
                    {console.log()}
                    {
                        this.state.reduxStore.products.map(function(singleFruitObject, index)   {
                                if(singleFruitObject.categoryName.categoryName==='VEGETABLES')
                                return <SingleProduct key={index} 
                                    object={singleFruitObject} 
                                    spacing={2}
                                    type="FRUITS"
                                />
                                return <div key={index}></div>
                            }
                        )
                    }
                    </Grid>
                <Footer/>
            </>
        );
    }
}
const mapStateToProps =state=>({
    product:state.reduxStore.products
})
export default connect(mapStateToProps,{fetchProducts})(Vegetables);
