class Cookie{
                    /**
                 * 
                 * @param name string
                 * @returns string|null 
                 */

            // Given a cookie key `name`, returns the value of
            // the cookie or `null`, if the key is not found.
            private  Cookie(name: string):string|null {
                const nameLenPlus = (name.length + 1);


                const val:string|null = document.cookie
                    .split(';')
                    .map(c => c.trim())
                    .filter(cookie => {
                        return cookie.substring(0, nameLenPlus) === `${name}=`;
                    })
                    .map(cookie => {
                        return decodeURIComponent(cookie.substring(nameLenPlus));
                    })[0] || null;
            
                    return val;
            }


            public  AuthSession(name:string):boolean{

                if(this.Cookie(name) === null) return false;

                if(this.Cookie(name) == "true") return true;
                if(this.Cookie(name) == "flase") return true;

                return false;

            }


            

            /**
             * 
             * @param name  string name of the cookie
             * @returns string value of the cookie
             */

            public  GetCookies(name:string):string|boolean{
                const cookie:string|null = this.Cookie(name);
                if(cookie === null) return false;

                return cookie;

            }

            /**
             * 
             * @param name string key cookie
             * @param value string value of the cookie
             * @param days number days  expires in 30 days
             * @returns bool if the cookie was created then return true els false
             */

            public  SetCookie(name:string,value:any,days:number):boolean {
                
                let expires:string = "";

                if (days) {
                    var date = new Date();
                    date.setTime(date.getTime() + (days*24*60*60*1000));
                    expires = "; expires=" + date.toUTCString();
                }
                document.cookie = name + "=" + (value || "")  + expires + "; path=/";


                if(this.GetCookies(name) !== null) return true;
                else return false;

            }

            /**
             * 
             * @param name string name cookie to delete
             * @returns bool will return true
             */
            public DeleteCookie(name:string):boolean {
                document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                
                return true;

            }
}


const cookie = new Cookie();

export default cookie;