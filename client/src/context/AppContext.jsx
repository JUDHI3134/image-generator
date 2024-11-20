import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const AppContext = createContext()

const AppContextProvider = (props) =>{


    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false)
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [credit, setCredit] = useState(false)

    const backendUrl = import.meta.env.VITE_BACKEND_URL;


  const navigate = useNavigate();

    const value = {
     user, setUser, navigate, showLogin, setShowLogin,
     backendUrl, credit,setCredit, token, setToken
    }

    return ( 
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>)
}

export default AppContextProvider;

