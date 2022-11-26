import { Route, Routes } from "react-router-dom";
import CheckOut from "../Pages/CheckOut";
import Details from "../Pages/Details";
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
            <Route path="/CheckOut/:id" element={<CheckOut/>}/>
            <Route path="/product/detail/:id" element={<Details/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}
export default Public 