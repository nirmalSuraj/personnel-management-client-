import { EmployeeType, IgetEmployeeType, IPageName } from "../../Interface/Generale/Generale";
import React,{useState,useEffect, ChangeEventHandler, useRef, MouseEventHandler} from 'react';
import { Log } from "../../class/Service/Log";
import { SettingsService } from "../../class/Service/SettingsService";
import { resolve } from "node:path/win32";
import { DataResolve } from "../../class/Service/DataResolve";
import { Icreated, IDataPaginate, Ideleted, IwithData,links } from "../../Interface/Data/Idata";
import  $ from 'jquery';
import Pagination from "../Pagination/Pagination";

interface props {
  setResponse:Function,
  setResponseDel:Function
}

const GetEmployee = ({setResponse,setResponseDel}:props)=>{
const[resload,setReload]= useState<boolean>(false);
const[paginate,setPaginate]= useState<string>("get-employee-type");
const [resolve,setResolve] = useState<IDataPaginate<IgetEmployeeType>>();
const[links,setLinks]= useState<links[]>();
  useEffect(() => {  
  let data =  new SettingsService<IgetEmployeeType>(paginate===""?"get-employee-type":paginate);
      data.GetData().then(e=>{
        const data = DataResolve.resolveSuccess<IDataPaginate<IgetEmployeeType>>(e);
        setResolve(data)
        setResponse(resolve);
        setLinks(data.list.links);
      }).catch(e=>{
        let res = DataResolve.resolveError<IDataPaginate<IgetEmployeeType>>(e);
        setResponse(res)
      })
    },[paginate])



    const deleteById:MouseEventHandler<HTMLButtonElement> = (el)=>{
     const emp =  new SettingsService<IgetEmployeeType>(`delete-employee-type/${el.currentTarget.value}`);
      emp.DeleteById().then(e=>{
       
        let x:Ideleted = DataResolve.resolveSuccess<Ideleted>(e) ; 
        setResponseDel(x)
        if(x.status){window.location.reload();}
      }).catch(e=>{
        setResponseDel(DataResolve.resolveError<IwithData<IgetEmployeeType>>(e))
      })
    }
  
  return (<>
      
      <div className="list-group">
        
      {resolve && resolve.list.data.map(e=>{
          return ( <li className="list-group-item list-group-item-action d-flex justify-content-between" style={{"width":"500px"}}>{e.type}  
          <button className="btn btn-danger btn-sm " value={e.id}  onClick={deleteById}  > X </button> </li>)
      })}
      
      {links && <Pagination pagination={links} paginate={setPaginate} />}
      </div>
     
      </>
  
  )
}

export default GetEmployee;
