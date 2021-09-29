import React, { Component } from 'react';
import { placeOrder} from '../../actions/postActions';
import {connect} from 'react-redux'
import store from '../../store';
import { Redirect } from 'react-router';
class PlaceOrder extends Component {
    constructor(props){
        super(props);
        this.state={
            reduxStore:store.getState().reduxStore
        }
    }
    componentDidMount(){
        
        var reqBody={
            customerId:this.state.reduxStore.auth.object.id,
            email:this.state.reduxStore.auth.object.email,
            paymentMethodId:1
            
        }
        console.log()
        this.props.placeOrder(reqBody);
    }
    render() {
        return (
            <div>
                {this.state.reduxStore.auth.login_status?
                <>a</>:<Redirect to="/"/>}
            </div>
        )
    }
}
const mapStateToProps =state=>({
    product:state.reduxStore.products
})
export default connect(mapStateToProps,{placeOrder})(PlaceOrder);
