import React,{Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './components/Pages/About/About';
import Home from './components/Pages/Home/Home';
import Navbar from './components/layout/Navbar/Navbar';
const App:React.FC = () => {
  return (
    <Router>
       <Fragment>
            <Navbar/>
             <div>
              <Switch>
                <Route exact path='/' component = {Home}/>
                <Route exact path='/about' component = {About}/>
              </Switch>
             </div>
           </Fragment>
    </Router>
  );
}

export default App;
  