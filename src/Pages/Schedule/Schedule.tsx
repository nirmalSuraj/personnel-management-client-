import {  IdynamicPage, IPageName } from "../../Interface/Generale/Generale";
import React,{useState,useEffect, FormEvent, ChangeEventHandler} from 'react';
import PageName from "../../Components/Banner/PageTitle";
import Alert from "../../Components/Alert/Alert";
import { Icreated } from "../../Interface/Data/Idata";
import DynamicNavbar from "../../Components/Nav/DynamicNav";
import cookie from "../../class/Cookie/Cookie";
import Get from "../../Components/Schedule/Get";
interface props  {title : IPageName}
const Schedule = ({title}:props)=>{
   let type =  cookie.GetCookies("type");
   type =  type === false?"":type.toString();  
   const [response ,setResponse] = useState<Icreated>();
   let ListOfPage:IdynamicPage = {pages:["Get"],path:"/schedule"};
   if(type == "employee-admin"){ ListOfPage.pages.push("Create"); ListOfPage.pages.push("Update")}

  return (<>
     <PageName title={title} />
     <DynamicNavbar ListOfPage={ListOfPage} />
  
      <Get setResponse={setResponse}/>

     {response != undefined &&  <Alert  Ilogin={response}/>}
    


  </>)
}



export default Schedule;