import { Certificate } from 'crypto';
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

const Welcome = ({title}:props)=>{
  return (<>
     <PageName title={title} />
  </>)
}



export default Welcome;