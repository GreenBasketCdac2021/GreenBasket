import React from 'react';
import Header from '../../Dashboard/Header';
import Footer from '../../Dashboard/Footer';
import SingleFruit from './SingleFruit';

var fruitsArray=[
    {name:"Apple",quntity:"1KG",price:"100Rs."},
    
    {name:"Mango",quntity:"1KG",price:"200Rs."},
    
    {name:"WaterMelon",quntity:"1KG",price:"20Rs."},
    
    {name:"Ornange",quntity:"1KG",price:"50Rs."}
];
class Fruits extends React.Component{
    render(){
        
        return(
            <>
                <Header/>
                    {fruitsArray.map((singleFruitObject, index) =>  <SingleFruit key={index} name={singleFruitObject.name} quntity={singleFruitObject.quntity} price={singleFruitObject.price}/>)
                }
                <Footer/>
            </>
        );
    }
}
export default Fruits;
