import { Dropdown, EmployeeType, GetUsers, IgetEmployeeType, IPageName, Schedule } from "../../Interface/Generale/Generale";
import React,{useState,useEffect, ChangeEventHandler, useRef, MouseEventHandler} from 'react';
import { Log } from "../../class/Service/Log";
import { SettingsService } from "../../class/Service/SettingsService";
import { DataResolve } from "../../class/Service/DataResolve";
import { Icreated, IDataPaginate, Ideleted, IwithData, links } from "../../Interface/Data/Idata";
import  $ from 'jquery';
import Pagination from "../Pagination/Pagination";
import { Link } from "react-router-dom";
import cookie from "../../class/Cookie/Cookie";
import { DropDown } from "../Employee/DropDown";

interface props {
  setResponse:Function,
 /// setResponseDel:Function
}

const Get = ({setResponse}:props)=>{
const[resload,setReload]= useState<boolean>(false);
const[paginate,setPaginate]= useState<string>("schedule");
const[links,setLinks]= useState<links[]>();
const [resolve,setResolve] = useState<IDataPaginate<Schedule>>();

  useEffect(() => { 
  
  let data =  new SettingsService<Schedule>(paginate===""?"schedule":paginate);
      data.GetData().then(e=>{
      
        const data = DataResolve.resolveSuccess<IDataPaginate<Schedule>>(e);
        setResolve(data)
        setResponse(resolve);
        setLinks(data.list.links);
         
      }).catch(e=>{
        let res = DataResolve.resolveError<IDataPaginate<Schedule>>(e);
        setResponse(res)
      })

    },[paginate])

 
    const deleteById:MouseEventHandler<HTMLButtonElement> = (el)=>{
     const emp =  new SettingsService<IgetEmployeeType>(`delete-employee-type/${el.currentTarget.value}`);
      emp.DeleteById().then(e=>{
       
        let x:Ideleted = DataResolve.resolveSuccess<Ideleted>(e) ; 
        //setResponseDel(x)
        if(x.status){window.location.reload();}
      }).catch(e=>{DataResolve.resolveError<IwithData<IgetEmployeeType>>(e)
      
      })
    }

  return (<>
   <div className="row">
    <div className="col-md-6 mx-auto ">
 
        <DropDown setPaginate={setPaginate}/>

    </div>
   </div>

  <div className="row">
    <div className="col-12">
    <div className="form-div">
        <div className="list-group">
        <table className="table table-default table-hover">
        <thead>
          <tr>
            <th scope="col">Break</th>
            <th scope="col">From</th>
            <th scope="col">Till Insurance</th>
            <th scope="col">Month</th>
            <th scope="col">Old data</th>
            <th scope="col">Updated</th>
        
        </tr>
        </thead>
        <tbody>
      
      
          {resolve && resolve.list.data.map(e=>{
                return (
                  <tr>
                      <td>{e.break}</td>
                      <td>{e.from}</td>
                      <td>{e.till}</td>
                      <td>{e.month}</td>
                      <td>{e.old_data}</td>
                      <td>{e.times_updated}</td>
        
                    
                  </tr>
                )
            })}
        </tbody>
      </table>
      {!resolve && <div className="spinner-border text-success " role="status">
                                <span className="sr-only">Loading...</span>
                              </div>}

        {links && resolve && <Pagination pagination={links} paginate={setPaginate} />}
        </div>
      </div>
      </div>
  </div>
      </>
  
  )
}

export default Get;
