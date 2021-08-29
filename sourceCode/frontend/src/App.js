import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import ForgotPassword from './Components/Login/ForgotPassword';

import Title from './Components/Title/Title';
import './App.css';

function App() {
  return (
    <div>
      <Title pageTitle="Green Basket"/>
      <Router>
        <Switch>
            
            {/*login*/} 
            <Route path="/" exact component={Login}/>
            <Route path="/signup" exact component={Signup}/>
            <Route path="/forgotPassword" exact component={ForgotPassword}/>
            
          </Switch>
      </Router>
    </div>
  );
}

export default App;
