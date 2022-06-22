import { EmployeeType, IPageName } from "../../Interface/Generale/Generale";
import React,{useState,useEffect, ChangeEventHandler} from 'react';
import { Log } from "../../class/Service/Log";
import { SettingsService } from "../../class/Service/SettingsService";
import { resolve } from "node:path/win32";
import { DataResolve } from "../../class/Service/DataResolve";
import { Icreated } from "../../Interface/Data/Idata";
interface props {
  setResponse:Function
}

const CreateForm = ({setResponse}:props)=>{
  const [fields,setFields] = useState<EmployeeType>();
  const generate:ChangeEventHandler<HTMLInputElement> = (event)=>{
   
    type ObjectKey = keyof typeof inputs; // this will dynamically select key position of the js object
        const inputs:EmployeeType =  {type :""}

         // hold old values                            
        for (const [key, value] of Object.entries(inputs)) {
            const  index  = key as ObjectKey
            inputs[index] = value;
        }                    
        const  index  = event.target.id as ObjectKey
        inputs[index] = event.target.value;
   
        setFields(inputs);
      }
      
      const submit:React.MouseEventHandler<HTMLButtonElement> = (e)=>{
        e.preventDefault();
        const create =  new SettingsService<EmployeeType>("create-employee-type");
       
        if(fields){
         
          create.createEmployeeType(fields).then(e=>{
            setResponse( DataResolve.resolveSuccess<Icreated>(e));
          }).catch(e=> {setResponse(DataResolve.resolveError<Icreated>(e))})
        }
        
      }
  
  return (<>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="htmlForm-label">Create  employee type</label>
                <input type="text" className="form-control" id="type" aria-describedby="emailHelp" onChange={generate} required />
              </div>
              <button type="button" className="btn btn-success" onClick={submit}>Create</button>
            </form>


        </>
  
  )
}

export default CreateForm;
