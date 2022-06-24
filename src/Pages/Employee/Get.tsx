import {  IdynamicPage, IgetEmployeeType, IPageName } from "../../Interface/Generale/Generale";
import React,{useState,useEffect, FormEvent, ChangeEventHandler} from 'react';
import PageName from "../../Components/Banner/PageTitle";
import CreateForm from "../../Components/Employee/CreateForm";
import Alert from "../../Components/Alert/Alert";
import { Icreated, Ideleted, IwithData } from "../../Interface/Data/Idata";
import DynamicNavbar from "../../Components/Nav/DynamicNav";
import GetEmployee from "../../Components/Employee/GetEmployee";
interface props  {title : IPageName}
const Get = ({title}:props)=>{
   const [response ,setResponse] = useState<IwithData<IgetEmployeeType>>();
   const [responseDel ,setResponseDel] = useState<Ideleted>();
    
   const ListOfPage:IdynamicPage = {pages:["Get","Create"],path:"/employee-types"};

   const handel:Ideleted|IwithData<IgetEmployeeType>|undefined = response?response:responseDel;
  return (<>
     <PageName title={title} />
     <DynamicNavbar ListOfPage={ListOfPage} />
     <div className="list">
       <GetEmployee setResponse={setResponse} setResponseDel={setResponseDel}/>
     </div>
     {handel != undefined &&  <Alert  Ilogin={handel}/>}
    


  </>)
}



export default Get;