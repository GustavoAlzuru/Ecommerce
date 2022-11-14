import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MainNavigation from "../Components/Navigation/MainNavigation";
import { getProduct } from "../Services/ProductServices";

function Details(){
    const {id} = useParams()
    const [product, setProduct] = useState({})

    useEffect(
        () => {
            const product = async () => {
                const data = await getProduct(id)
                setProduct(data)
            }   
            product() 
        },
        [id]
    )
console.log(product)
    return(
        <>
            <MainNavigation/>
            <h2>{product.title}</h2>
            <img src={product.thumbnail} alt="" />
            <p>{product.price}</p>
        </>
    )
}
export default Details