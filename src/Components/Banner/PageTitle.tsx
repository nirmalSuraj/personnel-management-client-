import React from "react";
import { IPageName } from "../../Interface/Generale/Generale";
interface props  {
  title : IPageName
}

const PageName = ({title}:props)=>{
  return (
    <div className="banner">
        <h1>{title.title}</h1>
        {title.subTitle &&   <p>title.subTitle</p>}
       
   </div> 
  );
}

export default PageName;