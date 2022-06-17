import { Ilogin } from "../../../Interface/Data/Idata";

export class AuthError{
  public error:Ilogin;
  constructor(error:Ilogin){
    this.error = error;
   
  }
}