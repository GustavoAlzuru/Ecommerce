import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";
import SignUp from "../Pages/SignUp";

function Public(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Signup" element={<SignUp/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}
export default Public