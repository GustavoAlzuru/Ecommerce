import React, {useState, useEffect, useContext} from "react";
import { getProducts } from "../Services/ProductServices";
import Product from "./Product";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { SearchItemContext } from "../Context/SearchItemContext";
import LoadingCustom from "./LoadingCustom";

function Products() {
    const styles = {
        flexbox: {
            display: 'flex',
            paddingTop: '100px',
            gap: '10px'
        },
        left:{
            flex: '20%',
            textAlign: 'start'
        },
        right: {
            flex: '80%'
        }
    }
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([])
    const context = useContext(SearchItemContext)

    useEffect(
        () => {
            const getAllProducts = async () => {
                const data = await getProducts(context.buscador)
                setProducts(data.results)
                if(data.results){
                    setIsLoading(false)
                }
            }
            getAllProducts()
        }, 
        [context.buscador] 
    )

    const handleChange = (e) => {
        if(e.target.value === "1"){
            let price = [...products].sort((a, b) => (a.price > b.price ? 1 : a.price < b.price ? -1 : 0))
            if(price[0] === products[0]){
                price = [...products].sort((b, a) => (a.price > b.price ? 1 : a.price < b.price ? -1 : 0))
            }
            setProducts(price)
        }
    }
    return(
        <>
            <div>
                <Container>
                    <div style={styles.flexbox}>
                        <div style={styles.left}>
                            <h3 style={{textTransform: 'capitalize'}}>{context.buscador}</h3>
                            <Form.Select aria-label="Default select example" onChange={handleChange}>
                                <option>Filter by:</option>
                                <option value="1">Price</option>
                            </Form.Select>
                        </div>
                        <div style={styles.right}>
                            <LoadingCustom isLoading={isLoading}>
                                {products.map(product => <Product {...product} key={product.id}/>)}  
                            </LoadingCustom>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}
export default Products