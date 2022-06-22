

export interface Ilogin{
  "message":string,
  "sccess"?:boolean,
  "auth":boolean,
  "errors"?:Array<string>,
  "status":number,
  "token"?:string
}



export interface IwithData<T>  extends  Ilogin{
    "list" : T[]
}
export interface Idata{
  
}

export interface IDataPaginate<T>  extends  Ilogin{
  "list" : {
   "data": T[],
   "first_page_url":string,
   "from" : number,
   "last_page" : number,
   "links" : {
              "url":string,
                "label": string,
                "active": boolean|null
              }[],
    "next_page_url":number|null,
    "path":string,
    "per_page":number|null,
    "prev_page_url":string,
    "to":number|null,
    "total":number|null,
    "current_page":number,
  }
}

export interface Ipaginte{
  "links" : {
    "url":string,
      "label": string,
      "active": boolean|null
    }[],
"next_page_url":number|null,
"path":string,
"per_page":number|null,
"prev_page_url":string,
"to":number|null,
"total":number|null,
"current_page":number,
}

export interface links {

    "url":string,
    "label": string,
    "active": boolean|null

}

export interface Icreated extends Ilogin{id:number}
export interface Ideleted extends Ilogin {id:number}
