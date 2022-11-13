import { createContext, useState } from "react";


export const authContext=createContext()


export default function Authentication({children}) {

    cosnt [state,setState] =useState({
        isAuth:false,
        token:null
    }

)
const loginUser=(token)=>{
        setState({
            ...state,
            isAuth:true,
            token
        })
    }

    const logoutUser=()=>{
        setState({
            ...state,
            isAuth:false,
            token:null
        })
    }


  return (
    <authContext.Provider value={{authState:state,loginUser,logoutUser}}>{children}</authContext.Provider>
  )
}
