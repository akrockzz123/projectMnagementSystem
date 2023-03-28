
import { createContext, useContext } from "react"
export type GlobalContent = {
  
   
        username : string,
        showUsers : any,
        addUser : any,
        addProject : any,
        AssignProject : any,
        LogoutHandler : any,
        role : string
    
    
}
export const MyGlobalContext = createContext<GlobalContent>({

        username : '',
        showUsers : () => {},
        addUser : () => {},
        addProject : () => {},
        AssignProject : () => {},
        LogoutHandler : () => {},
        role : ''
})
export const useGlobalContext = () => useContext(MyGlobalContext)