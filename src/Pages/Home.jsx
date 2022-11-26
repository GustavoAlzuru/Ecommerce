import MainNavigation from "../Components/Navigation/MainNavigation"
import Products from "../Components/Products"
import SearchProvider from "../Context/SearchItemContext"


function Home(){
    return(
        <>  
        <SearchProvider>
                <MainNavigation/>
                <div className="mainBackground">
                    <Products/>
                </div> 
        </SearchProvider>
        </>
    )
}
export default Home  
