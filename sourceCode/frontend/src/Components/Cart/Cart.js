import React from 'react'
import Footer from '../Dashboard/Footer'
import Header from '../Dashboard/Header'
import SingleCartItem from './SingleCartItem';
import store from '../../store';
import { fetchCartItems } from '../../actions/postActions';
import { connect } from 'react-redux';

const refreshPageOnece=()=> {
    window.location.hash = "reload";
}
export class Cart extends React.Component {
    constructor(props){
        super(props)
        this.state={
            cart:store.getState().reduxStore.cartItems,
            flag:false
        }
    }
    componentDidMount(){
        this.props.fetchCartItems({customerId: store.getState().reduxStore.auth.object.id});
        this.setState({flag:true});
    }
    onClick(obj){
        alert("a");
    }
    refreshPage() {
        window.location.hash = "reload";
    }

    render() {
        return (
            <div>
                {window.onload=refreshPageOnece()}
                <Header/>
                <button onClick={this.refreshPage}>Click to reload!</button>
                {this.state.flag?
                    this.state.cart.map(
                            (singleFruitObject, index) =>  
                                <SingleCartItem key={index} 
                                    object={singleFruitObject} 
                                    spacing={2}
                                    type="FRUITS"
                                />
                        )
                :console.log("Done")}
                    <div
                        style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                        }}
                    >
                        <button onClick={this.onClick.bind(this,this.props.object)} className="btn btn-primary">CheckOut</button>
                    </div>
                <Footer/>
            </div>
        )
    }
}
const mapStateToProps =state=>({
    reduxStore:state.reduxStore
})

export default connect(mapStateToProps,{fetchCartItems})(Cart);
