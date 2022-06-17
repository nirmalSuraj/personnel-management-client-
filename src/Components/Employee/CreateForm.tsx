import { IPageName } from "../../Interface/Generale/Generale";
import React,{useState,useEffect, ChangeEventHandler} from 'react';

const CreateForm = ()=>{
  
  return (<>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="htmlForm-label">Create  employee type</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <button type="submit" className="btn btn-success">Create</button>
            </form>


        </>
  
  )
}

export default CreateForm;
