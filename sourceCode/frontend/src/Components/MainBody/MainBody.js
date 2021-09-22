import React from "react";
import Category from "./Category";
class MainBody extends React.Component{
    
    render(){
        return (
            <div style={{height:'100vh',width:'100vw', background: 'linear-gradient(135deg, #364755 50%, #182835 50%)',position:'absolute',MarginTop:'0',left:'0'}}>
                <Category title="vegetable"/>
            </div>
        );
    }
}
export default MainBody;