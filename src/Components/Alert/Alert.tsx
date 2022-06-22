import { map } from 'jquery';
import React,{useState,useEffect, FormEvent, ChangeEventHandler} from 'react';
import { ErrosStatus } from '../../class/Service/Errors/ErrorStatus';
import { Log } from '../../class/Service/Log';
import { Ilogin } from '../../Interface/Data/Idata';
import  $ from 'jquery';

interface pop {
  Ilogin: Ilogin
}

const Alert = ({Ilogin}:pop)=>{
const erros =   new ErrosStatus();
if(Ilogin.status){
  $(".msg").show();
}
const hideAlert= ()=>{
  $(".msg").hide();
}
Log.log(Ilogin.status)

  return (
    <>
    {Ilogin.status === 404 || Ilogin.message.length ?
      <div className='msg'>
      <div className={`alert ${erros.getErrorByCode(Ilogin.status).color }  alert-dismissible fade show `} role="alert">
        {`${Ilogin.status} : ${Ilogin.message.length == 0?erros.getErrorByCode(Ilogin.status).message:Ilogin.message}`}

        {erros.getErrorByCode(Ilogin.status).status && Ilogin.errors ? Ilogin.errors.map((e,i:number)=>{
          return (<><p key={`x${i}`}>- {e} </p> </>)
        }):""}

        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={hideAlert}></button>
      </div>
      </div>:""
    
    }
    
    
    </>
  )
}

export default Alert;