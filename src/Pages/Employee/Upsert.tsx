import {  IdynamicPage, IgetEmployeeType, IPageName } from "../../Interface/Generale/Generale";
import React,{useState} from 'react';
import PageName from "../../Components/Banner/PageTitle";
import Alert from "../../Components/Alert/Alert";
import { Icreated, Ideleted, IwithData } from "../../Interface/Data/Idata";
import GetEmployee from "../../Components/Employee/GetEmployee";
import DynamicNavbar from "../../Components/Nav/DynamicNav";
import UpsertForm from "../../Components/Employee/UpsertForm";

interface props  {title : IPageName}
const Upsert = ({title}:props)=>{
   const [response ,setResponse] = useState<IwithData<IgetEmployeeType>>();
   const ListOfPage:IdynamicPage = {pages:["Get","Create"],path:"/users"};
  return (<>

      <PageName title={title} />
      <DynamicNavbar ListOfPage={ListOfPage} />
      <div className="form-div" >     
      <UpsertForm setResponse={setResponse}/>
     {response != undefined &&  <Alert  Ilogin={response}/>}

  </div>


  </>)
}



export default Upsert;