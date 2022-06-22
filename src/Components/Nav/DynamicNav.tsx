import React from 'react';
import {Link} from "react-router-dom";
import { Ilogin } from '../../Interface/Data/Idata';
import { IdynamicPage } from '../../Interface/Generale/Generale';
interface props {ListOfPage:IdynamicPage}

const DynamicNavbar =  ({ListOfPage}:props)=>{
  return(<>

    <ul className="nav justify-content-center mt-5">
    
      {ListOfPage.pages.map(e=><> 
          <li className="nav-item">
            <Link className="nav-link active" to={`${ListOfPage.path}-${e.toLocaleLowerCase()}`}>{e}</Link>
          </li>
        </>)}
    

 
    </ul>
    
    </>)
}


export default DynamicNavbar;