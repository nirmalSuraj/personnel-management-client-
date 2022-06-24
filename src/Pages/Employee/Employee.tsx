import {  IdynamicPage, IgetEmployeeType, IPageName } from "../../Interface/Generale/Generale";
import React,{useState,useEffect, FormEvent, ChangeEventHandler} from 'react';
import PageName from "../../Components/Banner/PageTitle";
import Alert from "../../Components/Alert/Alert";
import { Icreated, Ideleted, IwithData } from "../../Interface/Data/Idata";
import GetEmployee from "../../Components/Employee/GetEmployee";
import GetEmployees from "../../Components/Employee/GetEmployees";
import DynamicNavbar from "../../Components/Nav/DynamicNav";


interface props  {title : IPageName}
const Employee = ({title}:props)=>{
   const [response ,setResponse] = useState<IwithData<IgetEmployeeType>>();
   const [responseDel ,setResponseDel] = useState<Ideleted>();

   const ListOfPage:IdynamicPage = {pages:["Get","Create"],path:"/users"};
  return (<>
        <PageName title={title} />
      <DynamicNavbar ListOfPage={ListOfPage} />
      <div className="list" >     
      <GetEmployees setResponse={setResponse} setResponseDel={setResponseDel} />
     {response != undefined &&  <Alert  Ilogin={response}/>}

  </div>


  </>)
}



export default Employee;