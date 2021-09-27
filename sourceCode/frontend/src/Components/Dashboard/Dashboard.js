import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MainBodyCustomer from '../MainBody/Customer/MainBodyCustomer';
import MainBodyAdmin from '../MainBody/Admin/MainBodyAdmin';
import Store from '../../store'
import {connect} from 'react-redux';
import {fetchProducts} from '../../actions/postActions'


class Dashboard extends React.Component {
    constructor(props){
        super(props)
        this.state={}
        this.props.fetchProducts();
    }
    render(){    
        return (
                <div>     
                    <Header/>
                        {console.log(Store.getState().reduxStore.auth.role)}
                        {Store.getState().reduxStore.auth.role==="Customer"?
                        <MainBodyCustomer/>:
                        <MainBodyAdmin/>
                        }
                    <Footer/>
                </div>
        );
    }
}
const mapStateToProps =state=>({
    product:state.reduxStore.products
})
export default connect(mapStateToProps,{fetchProducts})(Dashboard);


