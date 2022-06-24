import { IwithData } from "../../Interface/Data/Idata";
import { ARequest } from "./Abstract/AResuest";

export class UsersService<T> extends ARequest{
  private path:string;

  constructor(path:string){
    super();
    this.path = this.url+path;
  }


public createUser(createData:T){
 return this.PostRequest<T>(createData,this.path)
}
public UpdateUser(createData:T){
  return this.UpdateRequest<T>(createData,this.path)
 }

public GetUser(){
   return this.Get<IwithData<T>>(this.path);
}

public DeleteById(){
   return this.Delete(this.path);
}
}