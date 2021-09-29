import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Login from './Components/Login/Login';
import AdminLogin from './Components/Login/AdminLogin';
import Signup from './Components/Login/Signup';
import ForgotPassword from './Components/Login/ForgotPassword';

import Title from './Components/Title/Title';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Cart from './Components/Cart/Cart';

import Contact from './Components/Footer/Contact';
import About from './Components/Footer/About';
import { Provider } from 'react-redux';
import React from 'react';
import store from './store';
import Fruits from './Components/MainBody/Customer/Category/Fruits';
import AddProduct from './Components/MainBody/Admin/AddProduct';
import PlaceOrder from './Components/Cart/PlaceOrder';
import UpdateProduct from './Components/MainBody/Admin/UpdateProduct';
import Vegetables from './Components/MainBody/Customer/Category/Vegetables';
import AllProduct from './Components/MainBody/Customer/Category/AllProduct';
import Sprouts from './Components/MainBody/Customer/Category/Sprouts';
import NotFound from './Components/NotFound';
import Orders from './Components/MainBody/Customer/Orders';
class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <div>
          <Title pageTitle="Green Basket"/>
          <Router>
            <Switch>
                <Route path="/" exact component={Dashboard}/>
                
                
                {/*login*/} 
                <Route path="/login" exact component={Login}/>
                <Route path="/signup" exact component={Signup}/>
                <Route path="/forgotPassword" exact component={ForgotPassword}/>
                
                {/* Admin */}
                <Route path="/AdminLogin" exact component={AdminLogin}/>
                <Route path="/AddProduct" exact component={AddProduct}/>
                <Route path="/UpdateProduct" exact component={UpdateProduct}/>

                {/**DashBoard */}
                <Route path="/fruits" exact component={Fruits}/>
                <Route path="/vegetables" exact component={Vegetables}/>
                <Route path="/sprouts" exact component={Sprouts}/>
                <Route path="/all" exact component={AllProduct}/>
                <Route path="/orders" exact component={Orders}/>


                
                <Route path="/cart" exact component={Cart}/>
                <Route path="/buyCart" exact component={PlaceOrder}/>
                {/**contact */}
                <Route path="/contact" exact component={Contact}/>
                
                {/**about */}
                <Route path="/about" exact component={About}/>
                <Route component={NotFound} />
              </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
