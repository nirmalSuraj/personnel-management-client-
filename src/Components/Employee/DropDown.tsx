import React,{useState,useEffect, ChangeEventHandler, useRef, MouseEventHandler} from 'react';
import { DataResolve } from '../../class/Service/DataResolve';
import { Log } from '../../class/Service/Log';
import { SettingsService } from '../../class/Service/SettingsService';
import {  IwithData } from '../../Interface/Data/Idata';
import { Dropdown as drop, GetUsers } from '../../Interface/Generale/Generale';
import Dropdown from 'react-bootstrap/Dropdown';
interface props{
  setPaginate : Function
}

export const DropDown = ({setPaginate}:props)=>{




const [resolve,setResolve] = useState<IwithData<drop>>();

  useEffect(() => { 
   


  let data =  new SettingsService<GetUsers>("users/drop-down-users/all");
      data.GetData().then(e=>{
      
        const data = DataResolve.resolveSuccess<IwithData<drop>>(e);
        setResolve(data); 
      }).catch(e=>{
        let res = DataResolve.resolveError<IwithData<drop>>(e);
      
      })
    },[])


    const newUrl :ChangeEventHandler<HTMLSelectElement>   = (e)=>{
   
         setPaginate(`schedule/${e.currentTarget.value}`)


    }


    return(
    
        <>
          <select name="" id="" className="form-control"  onChange={newUrl}>
            {resolve && resolve.list.map(e=> <option  value={e.id}>{e.name}</option>)}
          </select>
        </>
      )
}


