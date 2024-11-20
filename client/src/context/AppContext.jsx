import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios"

export const AppContext = createContext()

const AppContextProvider = (props) =>{


    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false)
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [credit, setCredit] = useState(false)

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate();

    const loadCreditsData = async () =>{
      try {
        const {data} = await axios.get(backendUrl+"/api/user/credits",{headers:{token}})

        if(data.success){
          setCredit(data.credits)
          setUser(data.user)
        }

      } catch (error) {
        console.log(error);
        toast.error(error.message)
      }
    }

    const logout = () =>{
      localStorage.removeItem('token')
      setToken('')
      setUser(null)
    }

    useEffect(()=>{
      if(token){
        loadCreditsData();
      }
    },[token])

    const value = {
     user, setUser, navigate, showLogin, setShowLogin,
     backendUrl, credit,setCredit, token, setToken,
     loadCreditsData,logout
    }

    return ( 
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>)
}

export default AppContextProvider;

