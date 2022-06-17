import React,{useState} from 'react';
import {Link} from "react-router-dom";
import IShowHide from '../../Interface/IShow';
import Gear from '../Gear/Gear';
import  $ from 'jquery';


const UnderNav = ()=>{

  const togle = ():void=>{
     $(".under-nav-url").slideToggle(500);
  
  }

return (
       <div>
          <Gear hideShow={togle} />


   
         <div className="under-nav-url">
         <ul className="mt-5">
           <li>
             <Link to="/employee-types">Employee types</Link>
           </li>
           <li>
             <Link to="/about">About</Link>
           </li>
           <li>
             <Link to="/users">Users</Link>
           </li>

           
         </ul>

       </div> 
  
       

       </div>

);

}

export default UnderNav;