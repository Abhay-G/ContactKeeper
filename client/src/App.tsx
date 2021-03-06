import React,{Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './components/Pages/About/About';
import LoginMain from './components/Pages/Auth/LoginMain';
import SignupMain from './components/Pages/Auth/SignupMain';
import Home from './components/Pages/Home/Home'
import Navbar from './components/layout/Navbar/Navbar';
import {ContactProvider} from './context/contact/contactContext';
import {AuthProvider} from './context/auth/AuthContext';
import {AlertProvider} from './context/alert/AlertContext';
import PrivateRoute from './components/Routing/privateRoute';
import Alerts from './components/layout/Alerts';
import setAuthToken from './utils/setAuthToken';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App:React.FC = () => {
  return (
   
    <AuthProvider>
    <ContactProvider>
    <AlertProvider>
    <Router>
       <Fragment>
            <Navbar/>
             <div>
              <Alerts/>
              <Switch>
                <PrivateRoute exact path='/' component = {Home}/> 
                <Route exact path='/signin' component = {LoginMain}/>
                <Route exact path='/signup' component = {SignupMain}/>
                <Route exact path='/about' component = {About}/>
              </Switch>
             </div>
           </Fragment>
    </Router>
    </AlertProvider>
    </ContactProvider>
    </AuthProvider>
    
  );
}

export default App;
  