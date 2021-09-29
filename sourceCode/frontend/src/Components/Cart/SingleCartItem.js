import React from 'react'
import { Col,Row } from 'react-bootstrap';
import store from '../../store';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { connect } from 'react-redux';
import { deleteProductByID } from '../../actions/postActions';
export class SingleCartItem extends React.Component {
    constructor(props){
        super(props)
        this.state={
            reduxStore:store.getState().reduxStore
        }
        
    }
    onClick(obj){
        var reqBody={
            productid:obj.products.id,
            custID:this.state.reduxStore.auth.object.id
        }
        console.log(reqBody);
        this.props.deleteProductByID(reqBody);
    }
    render() {
        return (
            <div >
                {this.props.object!==null?
                <Row  justifycontent="space-around" style={{marginTop:"2vh"}}>
                    <Col item>
                        {this.props.object.products.productName}
                    </Col>
                    <Col item>
                        {this.props.object.quantity}  KG
                    </Col>
                    <Col item>
                        {this.props.object.subTotal}  RS
                    </Col>
                    <Col item>
                        <button onClick={this.onClick.bind(this,this.props.object)} className="btn btn-danger"><CloseRoundedIcon/></button>
                    </Col>
                </Row>
                :console.log("A")}
            </div>
        )
    }
}

const mapStateToProps =state=>({
    product:state.reduxStore.products
})
export default connect(mapStateToProps,{deleteProductByID})(SingleCartItem);
