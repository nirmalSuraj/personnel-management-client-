import { EmployeeType, GetUsers, IgetEmployeeType, IPageName } from "../../Interface/Generale/Generale";
import React,{useState,useEffect, ChangeEventHandler, useRef, MouseEventHandler} from 'react';
import { Log } from "../../class/Service/Log";
import { SettingsService } from "../../class/Service/SettingsService";
import { resolve } from "node:path/win32";
import { DataResolve } from "../../class/Service/DataResolve";
import { Icreated, IDataPaginate, Ideleted, IwithData, links } from "../../Interface/Data/Idata";
import  $ from 'jquery';
import Pagination from "../Pagination/Pagination";
import { Link } from "react-router-dom";

interface props {
  setResponse:Function,
  setResponseDel:Function
}

const GetEmployee = ({setResponse,setResponseDel}:props)=>{
const[resload,setReload]= useState<boolean>(false);
const[paginate,setPaginate]= useState<string>("users");
const[links,setLinks]= useState<links[]>();
const [resolve,setResolve] = useState<IDataPaginate<GetUsers>>();

  useEffect(() => {  
  let data =  new SettingsService<GetUsers>(paginate===""?"users":paginate);
      data.GetData().then(e=>{
      
        const data = DataResolve.resolveSuccess<IDataPaginate<GetUsers>>(e);
        setResolve(data)
        setResponse(resolve);
        setLinks(data.list.links);
         
      }).catch(e=>{
        let res = DataResolve.resolveError<IDataPaginate<GetUsers>>(e);
        setResponse(res)
      })
    },[paginate])

 
    const deleteById:MouseEventHandler<HTMLButtonElement> = (el)=>{
     const emp =  new SettingsService<IgetEmployeeType>(`delete-employee-type/${el.currentTarget.value}`);
      emp.DeleteById().then(e=>{
       
        let x:Ideleted = DataResolve.resolveSuccess<Ideleted>(e) ; 
        setResponseDel(x)
        if(x.status){window.location.reload();}
      }).catch(e=>{DataResolve.resolveError<IwithData<IgetEmployeeType>>(e)
      
      })
    }

  return (<>
             
      <div className="list-group">
      <table className="table table-default table-hover">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">National Insurance</th>
          <th scope="col">Kids</th>
          <th scope="col">Perform Hours</th>
          <th scope="col">Has relationship</th>
          <th scope="col">Salary per hour</th>
          <th scope="col"></th>
       </tr>
      </thead>
      <tbody>
    
        {resolve && resolve.list.data.map(e=>{
              return (
                <tr>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
          
                    {e.user_details.map(x=>{
                      return (
                        <>
                        <td>{x.national_insurance}</td>
                        <td>{x.kids}</td>
                        <td>{x.perform_hours}</td>
                        <td>{x.relationship?"yess":"no"}</td>
                        <td className="d-flex">{x.salary_per_hour} €   </td>
                        <td><Link to={`users-create/${e.id}`} >Update</Link></td>
                        </>
                      )
                    } 
                    )}
                  
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
     
      </>
  
  )
}

export default GetEmployee;
