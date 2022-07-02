import { EmployeeType, GetUsers, IgetEmployeeType, IPageName } from "../../Interface/Generale/Generale";
import React,{useState,useEffect, ChangeEventHandler, useRef, MouseEventHandler} from 'react';
import { Log } from "../../class/Service/Log";
import { SettingsService } from "../../class/Service/SettingsService";

import { DataResolve } from "../../class/Service/DataResolve";
import { Icreated, IDataPaginate, Ideleted, IwithData, links } from "../../Interface/Data/Idata";
interface props {
  setResolve:Function,
  setResponse:Function,
  setLinks:Function,
  resolve:IDataPaginate<GetUsers>|undefined 
}

const GeneralEm = ({setResolve,setResponse,setLinks,resolve}:props)=>{

  let data =  new SettingsService<GetUsers>("users");
      data.GetData().then(e=>{
      
        const data = DataResolve.resolveSuccess<IDataPaginate<GetUsers>>(e);
        setResolve(data)
        setResponse(resolve);
        setLinks(data.list.links);
      
      }).catch(e=>{
        let res = DataResolve.resolveError<IDataPaginate<GetUsers>>(e);
        setResponse(res)
      })
 
  return (<></>
)
}

export default GeneralEm;
