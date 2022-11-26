import PlainNav from "../Components/Navigation/PlainNav"
import { useParams } from "react-router-dom";
import { getProduct } from "../Services/ProductServices";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import AlertCustom from "../Components/AlertCustom";

function CheckOut(){
    const {id} = useParams()
    const [product, setProduct] = useState({})
    const [images, setImages] = useState([])
    const [alert, setAlert] = useState({variant: '', text: ''})

    useEffect(
        () => {
            const product = async () => {
                const data = await getProduct(id)
                setProduct(data)
                setImages(data.pictures)
            }   
            product() 
        },
        [id] 
    )
    // console.log(product)
//    console.log(product.pictures?[0])
// console.log(product.pictures[0]?.url)
    const first = images[0]
    return(
    <>
        <PlainNav/>
        <div className="mainBackground">
            <h3>{product.title}</h3>
            {/* <img src={product.pictures[0].url} alt="" /> */}
            {/* {product.pictures?.map(img => <img src={img.url}/>)} */}
            <img src={first?.url} alt="" />
            {/* <img src={} alt="" /> */}
            <p>$ {product.price}</p>
            <Button onClick={() => setAlert({variant: 'success', text: 'thanks for buying'})}>Buy</Button>
            <AlertCustom {...alert}/>
        </div>
    </>
    ) 
}
export default CheckOut