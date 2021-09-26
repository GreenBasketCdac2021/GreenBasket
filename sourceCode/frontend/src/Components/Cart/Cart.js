import React from 'react'
import Footer from '../Dashboard/Footer'
import Header from '../Dashboard/Header'
import SingleCartItem from './SingleCartItem';
export class Cart extends React.Component {
    constructor(props){
        super(props)
        this.state={
            cart:[
                {
                    "id":1,
                    "productName":"spanish",
                    "unitPrice":25,
                    "stock":10,
                    "productDescription":"green Healty",
                    "category":{
                        "category_id":1,
                        "category_type":"FRUITS"
                    },
                    "quantity_buy":1
                },
                {
                    "id":2,
                    "productName":"spanish",
                    "unitPrice":25,
                    "stock":10,
                    "productDescription":"green Healty",
                    "category":{
                        "category_id":1,
                        "category_type":"FRUITS"
                    },
                    "quantity_buy":2
                },
                {
                    "id":3,
                    "productName":"spanish",
                    "unitPrice":25,
                    "stock":10,
                    "productDescription":"green Healty",
                    "category":{
                        "category_id":1,
                        "category_type":"FRUITS"
                    },
                    "quantity_buy":3
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <Header/>
                    {this.state.cart.map(
                            (singleFruitObject, index) =>  
                                <SingleCartItem key={index} 
                                    object={singleFruitObject} 
                                    spacing={2}
                                    type="FRUITS"
                                />
                        )}
                <Footer/>
            </div>
        )
    }
}

export default Cart
