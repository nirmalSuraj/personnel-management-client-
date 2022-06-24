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
import cookie from './class/Cookie/Cookie';
import { DataResolve } from './class/Service/DataResolve';
import Alert from './Components/Alert/Alert';
import { Icreated, Ilogin } from './Interface/Data/Idata';
import Get from './Pages/Employee/Get';

import Employee from './Pages/Employee/Employee';
//import UpsertForm from './Components/Employee/UpsertForm';
import Upsert from './Pages/Employee/Upsert';

function App() {
  const [checkOnLogger,setCheckOnLogger] = useState<boolean>(false);
  const [error,seterror] = useState<Ilogin>();
setTimeout(()=>{setCheckOnLogger(!checkOnLogger)}, 10000)
  useEffect(() => {  
    
    let isLoged = new  IsLoged("is-loged");
    isLoged.check().then(e=>{
      const data:Ilogin = DataResolve.resolveSuccess<Ilogin>(e);
    
      if(data.status == 401){
        seterror(data)
        auth.destroyOncheck();
      }
    }).catch(e=>{
     const eror = DataResolve.resolveError<Ilogin>(e);
     if(eror.status == 401){
    
      auth.destroyOncheck();
     }else{
      seterror(undefined)
     }
 
      seterror(eror)
    })
     
   },[checkOnLogger]);

   
  return (
    <Router>
    <div className="wrapper">

      <Nav />

      <div className="main">
          <Switch>
            <Route path="/employee-types-create">
              <Create title={{title:"Create employee types"}} />
            </Route>
            <Route path="/employee-types-get">
               <Get title={{title:"All employee typs"}} />
            </Route>
            <Route path="/Users-get">
               <Employee title={{title:"Employees"}} />
            </Route>
            <Route path="/Users-create/:id?">
               <Upsert title={{title:"Employees"}} />
            </Route>
            <Route path="/Users-update">
               <Employee title={{title:"Employees"}} />
            </Route>
            <Route path="/">
              {!auth.Auth()&&<Login title={{title:"Login"}} />}
              {auth.Auth()&& <Welcome title={{title:"Main page"}}  />}
            </Route>
          </Switch>
          {error != undefined && error.auth == false?  <Alert  Ilogin={error}/> :""}
      </div>
      
    </div>
  </Router>

  );
}

export default App;

