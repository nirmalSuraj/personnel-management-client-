import { EmployeeType } from "../../Interface/Generale/Generale";
import { ARequest } from "./Abstract/AResuest";

export class SettingsService<T> extends ARequest {

  private path:string;

    constructor(path:string){
      super();
      this.path = this.url+path;
    }


  public createEmployeeType(createData:EmployeeType){
   return this.PostRequest(<EmployeeType>createData,this.path)
  }


}