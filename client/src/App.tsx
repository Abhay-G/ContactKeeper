import React,{Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './components/Pages/About/About';
import Main from './components/Pages/SignIn/Main';
import Home from './components/Pages/Home/Home'
import Navbar from './components/layout/Navbar/Navbar';
import {ContactProvider} from './context/contact/contactContext';
const App:React.FC = () => {
  return (
    <ContactProvider>
    <Router>
       <Fragment>
            <Navbar/>
             <div>
              <Switch>
                <Route exact path='/' component = {Home}/> 
                <Route exact path='/signin' component = {Main}/>
                <Route exact path='/about' component = {About}/>
              </Switch>
             </div>
           </Fragment>
    </Router>
    </ContactProvider>
  );
}

export default App;
  