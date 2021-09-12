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

function App() {
  return (
    <div>
      <Title pageTitle="Green Basket"/>
      <Router>
        <Switch>
            <Route path="/" exact component={Dashboard}/>
            
            
            {/*login*/} 
            <Route path="/login" exact component={Login}/>
            <Route path="/signup" exact component={Signup}/>
            <Route path="/forgotPassword" exact component={ForgotPassword}/>

            <Route path="/AdminLogin" exact component={AdminLogin}/>
            
            <Route path="/cart" exact component={Cart}/>
            
            {/**contact */}
            <Route path="/contact" exact component={Contact}/>
            
            {/**about */}
            <Route path="/about" exact component={About}/>
            
          </Switch>
      </Router>
      
    </div>
  );
}

export default App;
