import { IwithData } from "../../Interface/Data/Idata";
import { EmployeeType, IgetEmployeeType } from "../../Interface/Generale/Generale";
import { ARequest } from "./Abstract/AResuest";

export class SettingsService<T> extends ARequest {

  private path:string;

    constructor(path:string){
      super();
      this.path = this.url+path;
    }


  public createEmployeeType(createData:T){
   return this.PostRequest<T>(createData,this.path)
  }

  public GetData(){
     return this.Get<IwithData<T>>(this.path);
  }

  public DeleteById(){
     return this.Delete(this.path);
  }


}