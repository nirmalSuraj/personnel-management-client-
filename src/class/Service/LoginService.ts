import { Login as login } from "../../Interface/Generale/Generale";
import { ARequest } from "./Abstract/AResuest";
import { Log } from "./Log";
import axios from "axios";
import { Ilogin } from "../../Interface/Data/Idata";
import { AuthError } from "./Errors/AuthError";
import cookie from "../Cookie/Cookie";

export class LoginService extends ARequest {

    private path:string;
    private credentials:login;
     constructor(path:string,credentials:login){
      super();
      this.path = this.url + path;
      this.credentials = credentials;
      
    }


    public login(test:Function){

      axios.post(this.path, this.credentials)
      .then((res)=>{

        const status = res.status;
        cookie.SetCookie("token",res.data.token,1);
        test(new AuthError({...res.data,status:status}).error);
      })
      .catch(function (error) {

        test( new AuthError({...error.response.data,status:error.response.status}).error);
      });
 
    }




}