import { DropDownTypes, EmployeeType, GetUsers, IgetEmployeeType, IPageName, UpsertUsers } from "../../Interface/Generale/Generale";
import React,{useState,useEffect, ChangeEventHandler} from 'react';

import  $ from 'jquery';
import { SettingsService } from "../../class/Service/SettingsService";
import { Log } from "../../class/Service/Log";
import { DataResolve } from "../../class/Service/DataResolve";
import { IwithData } from "../../Interface/Data/Idata";
import { GenInput } from "../../class/Service/GenInput";


interface props {
  setResponse:Function,
}

const UpsertForm = ({setResponse}:props)=>{
 const [dropDowns,setdropDowns] = useState<DropDownTypes[]>();
 const [Request,setRquest] = useState<UpsertUsers>({
       "national_insurance": "",
       "kids": 0,
       "perform_hours": 0,
       "week_hours": 0,
       "relationship": 0,
       "salary_per_hour": 0,
       "user_id": 0,
       "created_at": "",
       "updated_at": "",
       "employee_type_id": 0,
       "password":"",
       "name":"",
       "email":""
} );
  useEffect(()=>{
     const getDrop =  new SettingsService<DropDownTypes>("drop-douwn-types");
     getDrop.GetData().then(e=>{setdropDowns(e.data.list);})
     .catch(e=>setResponse(DataResolve.resolveError<IwithData<DropDownTypes>>(e)))

  },[]);

  const inputsChange:ChangeEventHandler<HTMLInputElement|HTMLSelectElement> = (e)=>{

       let datas:UpsertUsers = {
              "national_insurance": "",
              "kids": 0,
              "perform_hours": 0,
              "week_hours": 0,
              "relationship": 0,
              "salary_per_hour": 0,
              "user_id": 0,
              "created_at": "",
              "updated_at": "",
              "employee_type_id": 0,
              "password":"",
              "name":"",
              "email":""
       } 
       
  
       setRquest(GenInput.OnChange<UpsertUsers>(datas,e));

  }
  

  





  return (
  
      <>
        <form >

        <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="htmlForm-label">User name</label>
                <input type="text" className="form-control" id="users-name" aria-describedby="emailHelp" onChange={inputsChange}  required />
         </div>
        
         <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="htmlForm-label">Email</label>
                <input type="text" className="form-control" id="users-email" aria-describedby="emailHelp" onChange={inputsChange}  required />
         </div>
         <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="htmlForm-label">Password</label>
                <input type="password" className="form-control" id="users-password" aria-describedby="emailHelp" onChange={inputsChange}  required />
         </div>
         <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="htmlForm-label">National insurance</label>
                <input type="text" className="form-control" id="details-national_insurance" aria-describedby="emailHelp" onChange={inputsChange}  required />
         </div>
         <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="htmlForm-label">kids</label>
                <input type="number" className="form-control" id="details-kids" aria-describedby="emailHelp" onChange={inputsChange}  required />
         </div>
         <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="htmlForm-label">WWeek hours</label>
                <input type="number" className="form-control" id="details-week_hours" aria-describedby="emailHelp" onChange={inputsChange}  required />
         </div>
         <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="htmlForm-label">Relationship</label>
                <input type="text" className="form-control" id="details-relationship" aria-describedby="emailHelp" onChange={inputsChange}  required />
         </div>
         <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="htmlForm-label">Salary per hour</label>
                <input type="text" className="form-control" id="details-salary_per_hour" aria-describedby="emailHelp" onChange={inputsChange}  required />
         </div>

         <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="htmlForm-label">Perform hours</label>
                <input type="text" className="form-control" id="details-perform_hours" aria-describedby="emailHelp" onChange={inputsChange}  required />
         </div>

         <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="htmlForm-label">Create  employee type</label>
                <select name="" id="details-create_employee_type" value={Request.employee_type_id} className="form-control" onChange={inputsChange}>
                <option>Choose a type</option>
                {dropDowns && dropDowns.map(e=>{

                  return (
                    <option value={e.id} >{e.type}</option>
                  )
                })}

                </select>
         </div>
        
        <button type="button" className="btn btn-success" >Create</button>


        </form>       

      
      </>
  
  )
}

export default UpsertForm;
