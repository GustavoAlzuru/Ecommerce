import { Link } from "react-router-dom"
import PlainNav from "../Components/Navigation/PlainNav"

function NotFound(){
    return(
        <div>
            <PlainNav/>
            <div>
                This page does not exist<br/>
                <Link to={'/'}><span>Go to main page</span></Link>
            </div>
        </div>
    )
}
export default NotFound  