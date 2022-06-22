import {  IdynamicPage, IPageName } from "../../Interface/Generale/Generale";
import React,{useState,useEffect, FormEvent, ChangeEventHandler} from 'react';
import PageName from "../../Components/Banner/PageTitle";
import CreateForm from "../../Components/Employee/CreateForm";
import Alert from "../../Components/Alert/Alert";
import { Icreated } from "../../Interface/Data/Idata";
import DynamicNavbar from "../../Components/Nav/DynamicNav";
interface props  {title : IPageName}
const Create = ({title}:props)=>{
   const [response ,setResponse] = useState<Icreated>();
   const ListOfPage:IdynamicPage = {pages:["Get","Create"],path:"/employee-types"};
  return (<>
     <PageName title={title} />
     <DynamicNavbar ListOfPage={ListOfPage} />
     <div className="form-div">
        <CreateForm setResponse={setResponse}/>
     </div>
     {response != undefined &&  <Alert  Ilogin={response}/>}
    


  </>)
}



export default Create;