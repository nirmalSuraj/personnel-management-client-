import auth from "../Auth/Auth";
import cookie from "../Cookie/Cookie";
import { ARequest } from "./Abstract/AResuest";
import { Log } from "./Log";

export interface CheckLogin{token:string}

export class IsLoged extends ARequest{
  
  private path:string;

  constructor(path:string){
    super();
    this.path = this.url+path;
  }

  public check():Promise<Object>{
    const token:string|boolean = cookie.GetCookies("token");

      const request:CheckLogin = {token:token.toString()};
     return this.PostRequest(request,this.path);
  }

}