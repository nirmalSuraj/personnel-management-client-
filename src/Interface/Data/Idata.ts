

export interface Ilogin{
  "message":string,
  "sccess"?:boolean,
  "auth"?:boolean,
  "errors"?:Array<string>,
  "status":number,
  "token"?:string
}



export interface IwithData<T extends object[]>  extends  Ilogin{
    "list" : T
}

export interface Icreated extends Ilogin{id:number}

