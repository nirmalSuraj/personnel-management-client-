export class GenInput{

    public static OnChange <T>(fields:any,event:React.ChangeEvent<HTMLInputElement|HTMLSelectElement>):T{

      type ObjectKey = keyof typeof inputs; // this will dynamically select key position of the js object
        const inputs =  fields

         // hold old values                            
        for (const [key, value] of Object.entries(inputs)) {
            const  index  = key as ObjectKey
            inputs[index] = value;
        }
                        
        const  index  = event.currentTarget.id as ObjectKey
        inputs[index] = event.currentTarget.value;

        return inputs;

    }

    public static Fill <T>(fields:any):T{

        type ObjectKey = keyof typeof inputs; // this will dynamically select key position of the js object
          const inputs =  fields
  
           // hold old values                            
          for (const [key, value] of Object.entries(inputs)) {
              const  index  = key as ObjectKey
              inputs[index] = value;
          }
                        
          return inputs;
  
      }

}