import { IPageName } from "../../Interface/Generale/Generale";
import React,{useState,useEffect, FormEvent, ChangeEventHandler} from 'react';
import PageName from "../../Components/Banner/PageTitle";
import CreateForm from "../../Components/Employee/CreateForm";
interface props  {title : IPageName}
const Create = ({title}:props)=>{
  return (<>
     <PageName title={title} />
     <div className="form-div">
        <CreateForm />
     </div>
    


  </>)
}



export default Create;