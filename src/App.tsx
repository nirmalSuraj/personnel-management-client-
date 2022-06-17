import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from './Components/Nav/Nav';
import Login from './Pages/Auth/Login';
import { IPageName } from './Interface/Generale/Generale';
import auth from './class/Auth/Auth';
import Welcome from './Pages/Welcome/Welcome';
import Create from './Pages/Employee/Create';
import { IsLoged } from './class/Service/IsLoged';
import { Log } from './class/Service/Log';

function App() {

  const [isLoged,setIsLoged] = useState<number>(0);

  useEffect(() => {   
     let isLoged = new  IsLoged("is-loged");
      isLoged.check(setIsLoged);
    
   },[]);
if(!isLoged){
  auth.destroyOncheck();
}
  return (
    <Router>
    <div className="wrapper">

      <Nav />

      <div className="main">
          <Switch>

            
            <Route path="/employee-types">
              <Create title={{title:"Create employee types"}} />
          
            </Route>
            <Route path="/users">
          
            </Route>

            <Route path="/">
              {!auth.Auth()&&<Login title={{title:"Login"}} />}
              {auth.Auth()&& <Welcome title={{title:"Main page"}}  />}
            </Route>
          </Switch>

      </div>
     
    </div>
  </Router>
  );
}

export default App;
