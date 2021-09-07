import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import ForgotPassword from './Components/Login/ForgotPassword';

import Title from './Components/Title/Title';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Cart from './Components/Cart/Cart';

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

            
            <Route path="/cart" exact component={Cart}/>
            
          </Switch>
      </Router>
      
    </div>
  );
}

export default App;
