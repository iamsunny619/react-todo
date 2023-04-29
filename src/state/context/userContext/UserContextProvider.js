import React from "react";
import {UserContext} from "./UserContext.js"
const UserContextProvider = ({children})=>{
    
    return(
        <UserContext.provider value={}>
            {children}
            </UserContext.provider>
    );
}

export default UserContextProvider;