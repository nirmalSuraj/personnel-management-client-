import axios from "axios";
import { Icreated } from "../../../Interface/Data/Idata";
import cookie from "../../Cookie/Cookie";
import { Log } from "../Log";

export class ARequest{
    protected url = "http://127.0.0.1:8000/api/";
    private herder = { 'Authorization': 'Bearer ' + cookie.GetCookies("token")};
    constructor(){}

    protected async PostRequest<T>(requestData:T,path:string):Promise<Object>{
       
       return await axios.post(path, requestData,  {headers:this.herder });
    }

    protected async Get<T>(path:string) {
        return  axios.get(path,{headers:this.herder});
    }

    protected async  Delete(path:string){
        return axios.delete(path, {headers:this.herder });
    }

}