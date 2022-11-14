import React, {useState, useEffect} from "react";
import { getProducts } from "../Services/ProductServices";
import Product from "./Product";
import Container from 'react-bootstrap/Container';

function Products() {
    const styles = {
        backGround:{
            backgroundColor: '#E8E8E8',
        },
        flexbox: {
            display: 'flex',
            paddingTop: '100px'
        },
        left:{
            flex: '20%',
            textAlign: 'start'
        },
        right: {
            flex: '80%'
        }
    }
    const [products, setProducts] = useState([])
    useEffect(
        () => {
            const getAllProducts = async () => {
                const data = await getProducts()
                setProducts(data.results)
            }
            getAllProducts()
        }, 
        []
    )
    console.log(products)
    return(
        <>
            <div style={styles.backGround}>
                <Container>
                    <div style={styles.flexbox}>
                        <div style={styles.left}>
                            <h3>Title</h3>
                            <p>Ordenar por</p>
                        </div>
                        <div style={styles.right}>
                            {products.map(product => <Product {...product}/>)}  
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}
export default Products