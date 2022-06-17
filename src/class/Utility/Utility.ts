import cookie from "../Cookie/Cookie";

class Utility{

	/**
	 * @param name string key of cookie name
	 * @returns bool true or false
	 */

public  AuthSession(name:string):boolean{

    return cookie.AuthSession(name);

}


 





}

const utility = new Utility();

export  default utility;