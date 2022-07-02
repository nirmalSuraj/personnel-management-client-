export interface IPageName{title:string,subTitle?:string}

export interface Login{email:string,password:string}

export interface Erros{status:number,color:string,message?:string}



export interface EmployeeType{ type:string}
export interface IgetEmployeeType extends EmployeeType {id:number}

export interface UpdateAndGetEmployeeType extends EmployeeType{id:number}

export interface IdynamicPage{pages:string[],path:string;}

export interface DeleteById{id:number};


export interface userDetails{
      "id"?: number,
    "national_insurance": string,
    "kids": number,
    "perform_hours": number,
    "week_hours": number,
    "relationship": number,
    "salary_per_hour": number,
    "user_id": number,
    "deleted_at": string|null,
    "created_at": string,
    "updated_at": string,
    "employee_type_id": number

}[];

export interface GetUsers {
  "id"?:number,
  "name":string,
  "email":string,
  "user_details":userDetails[]
}[];

interface UpsertUsersUsers {
  "password":string,
  "name":string,
  "email":string,
  "id"?: number,
}
interface UpsertUsersDetails {
  "national_insurance": string,
  "kids": number,
  "perform_hours": number,
  "week_hours": number,
  "relationship": number,
  "salary_per_hour": number,
  "id"?: number,
  "created_at": string,
  "updated_at": string,
  "employee_type_id": number,
}

export interface UpsertUsersFullObject extends UpsertUsersUsers,UpsertUsersDetails  {}

export interface UpsertUsersSendRequest {
    "users":UpsertUsersUsers[],
    "details":UpsertUsersDetails[]

}

export interface DropDownTypes{
    "type": string,
    "id": number
};

export interface Schedule {
  "id": number,
  "break": number,
  "from": string,
  "till": string,
  "month": string,
  "old_data": string,
  "times_updated": number
}
export interface Dropdown{
  "id": number,
  "name": string
}

export interface urlObj{url:string,name:string}


