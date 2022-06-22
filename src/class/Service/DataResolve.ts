import { Icreated, Ilogin } from "../../Interface/Data/Idata";
import { Log } from "./Log";

export class DataResolve{
  public static  resolveSuccess  <T>(toResolve:any):T {
  
  const status = toResolve.status;
const returnData:T = {...toResolve.data,status:status};
  return returnData;
    
  }

  public static resolveError <T>(toResolve:any):T{
 
    const returnData:T ={...toResolve.response.data,status:toResolve.response.status};

    return returnData;
    
  }
}