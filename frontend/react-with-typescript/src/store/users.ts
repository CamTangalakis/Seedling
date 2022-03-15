import { createContext } from "react";


export interface IUserProps {

}


const UserContext = createContext<IUserProps>({

})

export const UserContextConsumer = UserContext.Consumer
export const UserContextProvider = UserContext.Provider
export default UserContext;
