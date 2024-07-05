import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({children}) {
    const{authState,loginUser,logoutUser}=useContext(AuthContext)
    console.log(authState)
    if(!authState.isAuth)
        {
            return <Navigate to={"/login"}/>
        }
        return children
}

export default PrivateRoute;
