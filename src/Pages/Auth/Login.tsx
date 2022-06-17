import React,{useState,useEffect, FormEvent, ChangeEventHandler} from 'react';
import { Log } from '../../class/Service/Log';
import { LoginService } from '../../class/Service/LoginService';
import Alert from '../../Components/Alert/Alert';
import PageName from '../../Components/Banner/PageTitle';
import { Ilogin } from '../../Interface/Data/Idata';
import { IPageName } from "../../Interface/Generale/Generale";
import { Login as login } from "../../Interface/Generale/Generale";
import { Redirect } from "react-router-dom";
import auth from '../../class/Auth/Auth';

interface props  {title : IPageName}


const Login =({title}:props)=>{
  const login:login = {
    email:"test@gmail.com",
    password:"test123456789"
  }

  const [credentials,setCredentials] = useState<login>( {email:"",password:"" });
  const [error,seterror] = useState<Ilogin>();

  const generate:ChangeEventHandler<HTMLInputElement> = (event)=>{
   
    type ObjectKey = keyof typeof inputs; // this will dynamically select key position of the js object
        const inputs:login =  {
          email:"",
          password:""
        }

         // hold old values                            
        for (const [key, value] of Object.entries(credentials)) {
            const  index  = key as ObjectKey
            inputs[index] = value;
        }                    
        
        const  index  = event.target.id as ObjectKey
        inputs[index] = event.target.value;
        Log.log(inputs)
        setCredentials(inputs);
      }
      

const submit:React.MouseEventHandler<HTMLButtonElement> = ()=>{
  let log  = new LoginService("login",credentials);
  log.login(seterror)
  setCredentials( {email:"",password:"" });
}

if(error != undefined){
  
  if(error.auth){
    auth.SetAuth(error.auth);
    
    
  }
}



  return(
    <>
      <PageName title={title} />
      {error !=undefined && error.auth?<Redirect  to="/"  ></Redirect>:""}
    <div className="login-form">
      <form >
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input type="email" className="form-control" id="email" onChange={generate} value= {credentials.email}  />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input type="password"  className="form-control" id="password"  onChange={generate} value={credentials.password} />
          </div>
      
          <button type="button" className="btn btn-success" onClick={submit}>Login</button>
        </form> 

    </div>
    {error != undefined &&  <Alert  Ilogin={error}/>}
   

    
    </>

  )
}

export default Login;