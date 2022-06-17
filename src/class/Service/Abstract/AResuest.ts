import axios from "axios";
import { Icreated } from "../../../Interface/Data/Idata";
import cookie from "../../Cookie/Cookie";
import { Log } from "../Log";

export class ARequest{
    protected url = "http://127.0.0.1:8000/api/";
    constructor(){}

    protected PostRequest<T>(requestData:T,path:string,callback?:Function){
        var test:Icreated|undefined ;
        
        axios.post(path, requestData,  {headers: {
            'Authorization': 'Bearer ' + cookie.GetCookies("token")
          }})
        .then((res)=>{
            const status = res.status;
            if(status != 401 && callback){
                callback(1)
            }
            test = {...res.data,status:status};
        })
        .catch(function (error) {
            test = {...error.response.data,status:error.response.status};
      
        });
        
        return test;

    }

}