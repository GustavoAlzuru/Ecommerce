import { Link } from "react-router-dom"
import NavNotFound from "../Components/NavNotFound"

function NotFound(){
    return(
        <div>
            <NavNotFound/>
            <div>
                This page does not exist<br/>
                <Link to={'/'}><span>Go to main page</span></Link>
                
            </div>
        </div>
    )
}
export default NotFound