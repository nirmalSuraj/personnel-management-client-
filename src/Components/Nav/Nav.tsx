import React from 'react';
import {Link} from "react-router-dom";
import auth from '../../class/Auth/Auth';
import cookie from '../../class/Cookie/Cookie';
import { RestrictionService } from '../../class/Service/RestrictionService';

import { Ilogin } from '../../Interface/Data/Idata';
import  Login  from '../../Pages/Auth/Login';
import Banner from './Banner';
import UnderNav from './UnderNav';


const Nav = ()=>{

const loged:boolean = auth.Auth();
let type =  cookie.GetCookies("type");
type =  type === false?"":type.toString();  

return (
       
  <nav className="">
    <Banner />

{loged ? <>
   

  <ul className="mt-5">
    {RestrictionService.init(type).GetAllowLinks().map(e=>  { return (<li><Link to={e.url}>{e.name}</Link></li>)})}
    </ul>
    <div className="under-nav">
      <UnderNav />
    </div>

</> : 

<>
<ul className="mt-5">
    <li>
      <Link to="/">Login</Link>
    </li>
</ul>
</>
}

</nav>
);

}

export default Nav;