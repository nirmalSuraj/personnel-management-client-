import { DropDownTypes, EmployeeType, GetUsers, IgetEmployeeType, IPageName, UpsertUsersFullObject, UpsertUsersSendRequest } from "../../Interface/Generale/Generale";
import React,{useState,useEffect, ChangeEventHandler} from 'react';

import  $ from 'jquery';
import { SettingsService } from "../../class/Service/SettingsService";
import { Log } from "../../class/Service/Log";
import { DataResolve } from "../../class/Service/DataResolve";
import { Icreated, IwithData } from "../../Interface/Data/Idata";
import { GenInput } from "../../class/Service/GenInput";
import { useParams } from "react-router-dom";
import { UsersService } from "../../class/Service/UsersService";



interface props {
  setResponse:Function,
}
interface parms{
       id:string
}

const UpsertForm = ({setResponse}:props)=>{
let {id} = useParams<parms>();
 const [dropDowns,setdropDowns] = useState<DropDownTypes[]>();
 const [user,setUser] = useState<IwithData<GetUsers>>();
 const [Request,setRquest] = useState<UpsertUsersFullObject>({
       "national_insurance": "",
       "kids": 0,
       "perform_hours": 0,
       "week_hours": 0,
       "relationship": 0,
       "salary_per_hour": 0,
       "id":   id !== undefined?+id:0,
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
     if(id !== undefined){
     let data =  new UsersService<GetUsers>(`users/${id}`);
     data.GetUser().then(e=>{
       const data = DataResolve.resolveSuccess<IwithData<GetUsers>>(e);
       let details = data.list[0].user_details[0];
       let firstPart =  GenInput.Fill<any>( data.list[0]);
       delete firstPart.user_details;
       let secondPart =  GenInput.Fill<any>(details);
       const binde:UpsertUsersFullObject = {...secondPart,...firstPart};
       setRquest(binde)
     
     }).catch(e=>{
       let res = DataResolve.resolveError<IwithData<GetUsers>>(e);
       setResponse(res)
     })
}

  },[]);
  useEffect(()=>{
       const clear = {
              "national_insurance": "",
              "kids": 0,
              "perform_hours": 0,
              "week_hours": 0,
              "relationship": 0,
              "salary_per_hour": 0,
              "id":   id !== undefined?+id:0,
              "created_at": "",
              "updated_at": "",
              "employee_type_id": 0,
              "password":"",
              "name":"",
              "email":""
       };

        
       setRquest(clear);
    },[id]);

  const inputsChange:ChangeEventHandler<HTMLInputElement|HTMLSelectElement> = (event)=>{

      // const data:UpsertUsersFullObject = GenInput.OnChange<UpsertUsersFullObject>(Request,e);
   

       type ObjectKey = keyof typeof inputs; // this will dynamically select key position of the js object
       const inputs:any = {
              "national_insurance": Request.national_insurance,
              "kids": Request.kids,
              "perform_hours":Request.perform_hours,
              "week_hours": Request.week_hours,
              "relationship": Request.relationship,
              "salary_per_hour": Request.salary_per_hour,
              "id":   id !== undefined?+id:0,
              "created_at": Request.created_at,
              "updated_at": Request.updated_at,
              "employee_type_id": Request.employee_type_id,
              "password":"",
              "name":Request.name,
              "email":Request.email
       }

        // hold old values                            
       for (const [key, value] of Object.entries(inputs)) {
           const  index  = key as ObjectKey
           inputs[index] = value;
       }
                       
       const  index  = event.currentTarget.id as ObjectKey
        inputs[index] = event.currentTarget.value;


       
       setRquest(inputs);
      

  }
  

    const submit:React.MouseEventHandler<HTMLButtonElement> = (e)=>{
        e.preventDefault();
      
        const send:UpsertUsersSendRequest = {
              "users":[{
                     "name": Request.name,
                     "email": Request.email,
                     "password": Request.email,
                     "id": Request.id,
              }],
              "details":[
                     {
                            "national_insurance": Request.national_insurance,
                            "kids": Request.kids,
                            "perform_hours": Request.perform_hours,
                            "week_hours": Request.week_hours,
                            "relationship": Request.relationship,
                            "salary_per_hour": Request.salary_per_hour,
                        
                            "created_at": "",
                            "updated_at": "",
                            "employee_type_id": Request.employee_type_id,
                     }
                  
              ]
        }

      
       const upsert =  new UsersService<UpsertUsersSendRequest>("users");
    
        if(Request){
             
              if(id == undefined){
                     upsert.createUser(send).then(e=>{
                     setResponse( DataResolve.resolveSuccess<UpsertUsersSendRequest>(e));
                     }).catch(e=> {setResponse(DataResolve.resolveError<Icreated>(e))})
              }else{
                     upsert.UpdateUser(send)
                     .then(e=>{
                            setResponse( DataResolve.resolveSuccess<UpsertUsersSendRequest>(e));
                            }).catch(e=> {setResponse(DataResolve.resolveError<Icreated>(e))})
              }
        }
        
      }
  




  return (
  
      <>
        <form >

        <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="htmlForm-label">User name</label>
                <input type="text" className="form-control" id="name" aria-describedby="emailHelp" onChange={inputsChange} value={Request.name} required />
         </div>
        
         <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="htmlForm-label">Email</label>
                <input type="text" className="form-control" id="email" aria-describedby="emailHelp" onChange={inputsChange}  value={Request.email}   required />
         </div>

              {!id &&  
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="htmlForm-label">Password</label>
                <input type="password" className="form-control" id="password" aria-describedby="emailHelp" onChange={inputsChange}   required />
         </div>
         }

         <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="htmlForm-label">National insurance</label>
                <input type="text" className="form-control" id="national_insurance" aria-describedby="emailHelp" onChange={inputsChange} value={Request.national_insurance}    required />
         </div>
         <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="htmlForm-label">kids</label>
                <input type="number" className="form-control" id="kids" aria-describedby="emailHelp" onChange={inputsChange} value={Request.kids}   required />
         </div>
         <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="htmlForm-label">WWeek hours</label>
                <input type="number" className="form-control" id="week_hours" aria-describedby="emailHelp" onChange={inputsChange} value={Request.week_hours}   required />
         </div>
         <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="htmlForm-label">Relationship</label>
       
                <select name="" id="relationship" value={Request.relationship} className="form-control"   onChange={inputsChange}>
                <option value="0" >No</option>
                <option  value="1" >Yess</option>
                </select>
         </div>
         <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="htmlForm-label">Salary per hour</label>
                <input type="text" className="form-control" id="salary_per_hour" aria-describedby="emailHelp"  value={Request.salary_per_hour} onChange={inputsChange}  required />
         </div>

         <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="htmlForm-label">Perform hours</label>
                <input type="text" className="form-control" id="perform_hours" aria-describedby="emailHelp" value={Request.perform_hours} onChange={inputsChange}  required />
         </div>

         <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="htmlForm-label">Create  employee type</label>
                <select name="" id="employee_type_id" value={Request.employee_type_id} className="form-control" onChange={inputsChange}>
                <option>Choose a type</option>
                {dropDowns && dropDowns.map(e=>{
                    
                  return (
                    <option  value={e.id}  >{e.id }</option>
                  )
                })}

                </select>
         </div>
        
        <button type="button" className="btn btn-success" onClick={submit} >{id == undefined?"Create":"Update"}</button>


        </form>       

      
      </>
  
  )
}

export default UpsertForm;
