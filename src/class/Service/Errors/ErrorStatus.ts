import { Erros } from "../../../Interface/Generale/Generale";
import { Log } from "../Log";




export class ErrosStatus{
  private statusCode : { [id: string]: Erros; } = {} ;
  private danger:string = "bg-danger";
  private success:string = "bg-success";

  constructor(){
    this.statusCode["400"] ={status:400,color:this.danger} ;
    this.statusCode["201"] ={status:201,color:this.success} ;
    this.statusCode["200"] ={status:200,color:this.success} ;
    this.statusCode["404"] ={status:404,color:this.danger,message:"Not found"} ;
    this.statusCode["500"] ={status:500,color:this.danger} ;
  }

  public getErrorByCode(code:number):Erros{

    if(this.statusCode.hasOwnProperty(code)){
      return this.statusCode[code];
    }else{
      return {status:0,color:"bg-danger"} ;
    }
     
  }
}