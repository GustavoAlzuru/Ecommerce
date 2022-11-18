import { useState } from "react"
import MainNavigation from "../Components/Navigation/MainNavigation"
import Products from "../Components/Products"


function Home(){
    const [buscador, setBuscador] = useState('ipod')
    return(
        <>
            <MainNavigation setBuscador={setBuscador}/>
            <div className="mainBackground">
                <Products buscador={buscador}/>
            </div>
        </>
    )
}
export default Home 