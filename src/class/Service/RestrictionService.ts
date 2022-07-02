import { urlObj } from "../../Interface/Generale/Generale";
import { Log } from "./Log";

export class RestrictionService{
  
  private general:urlObj= {url:"/login",name:"Login"};
  private type:string;
  private allowRoute:{ [route: string] : urlObj[]; } = {
    "employee-waiter":[{url:"/about",name:"About"}]
  }

  private allowLinks:{ [route: string] : urlObj[]; } = {
    "employee-waiter":[{url:"/schedule-get",name:"Schedule"}],
    "employee-admin":[{url:"/about",name:"About"},{url:"/users-get",name:"Users"},{url:"/schedule-get",name:"Schedule"}]
  }
  private allowSettings:{ [route: string] : urlObj[]; } = {
    "employee-waiter":[]
  }

  public static init(type:string):RestrictionService{

    return new RestrictionService(type);

  }  
  constructor( type:string){
      this.type = type;
    }

    public GetAllowLinks():urlObj[]{
    
      return this.allowLinks[this.type];     
   
    }





}