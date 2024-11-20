import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const AppContext = createContext()

const AppContextProvider = (props) =>{


    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false)


  const navigate = useNavigate();

    const value = {
     user, setUser, navigate, showLogin, setShowLogin
    }

    return ( 
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>)
}

export default AppContextProvider;

