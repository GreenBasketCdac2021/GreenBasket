import React from 'react'
import Footer from '../Dashboard/Footer'
import Header from '../Dashboard/Header'
import SingleCartItem from './SingleCartItem';
import store from '../../store';
import { fetchCartItems } from '../../actions/postActions';
import { connect } from 'react-redux';
import { Container,Col,Row } from 'react-bootstrap';
const refreshPageOnece=()=> {
    window.location.hash = "reload";
}
export class Cart extends React.Component {
    constructor(props){
        super(props)
        this.state={
            cart:[],
            flag:false,
            Total:0,
        }
    }
    componentDidMount(){
        this.props.fetchCartItems({customerId: store.getState().reduxStore.auth.object.id});
        this.setState({flag:true});
    }
    onClick(obj){
        window.location.replace("/buyCart");
    }
    refreshPage() {
        window.location.hash = "reload";
    }
    render() {
        var Total=0;
        return (
            <div>
                {window.onload=refreshPageOnece()}
                {store.getState().reduxStore.auth.login_status?
                <div>
                <Header/>
                {this.state.flag?<Container justifyContent="space-around">
                    <Row container justifyContent="space-around" >
                        <Col item>
                            <b>Product Name</b>
                        </Col>
                        <Col item>
                            <b>Quantity</b>
                        </Col><Col item>
                            <b>Sub Total</b>
                        </Col><Col item>
                            <b>Remove</b>
                        </Col>
                    </Row>
                    {store.getState().reduxStore.cartItems.map(
                            (singleFruitObject, index) =>  {
                                if(singleFruitObject!==null){
                                Total+=singleFruitObject.subTotal
                                return <SingleCartItem key={index} 
                                    object={singleFruitObject} 
                                    spacing={2}
                                    type="FRUITS"
                                />
                                }
                                return <></>
                            }
                        )}  

                        
                    <Row container justifyContent="space-around" className="bg-success" style={{marginTop:"2vh"}}>
                        <Col item><b>TOTAL</b>
                        </Col>
                        <Col item>
                        </Col>
                        <Col item>
                            <b>{Total}</b>
                        </Col>
                        <Col item>
                        </Col>
                    </Row>
                        
                        </Container>
                :console.log("Done")}
                    <div
                        style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                        }}
                    >
                        <button onClick={this.onClick.bind(this,this.props.object)} className="btn btn-primary mt-3">CheckOut</button>
                    </div>
                <Footer/>
                </div>:
                window.location.replace("/login")
                }
            </div>
        )
    }
}
const mapStateToProps =state=>({
    reduxStore:state.reduxStore
})

export default connect(mapStateToProps,{fetchCartItems})(Cart);
