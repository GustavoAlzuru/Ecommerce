import React, {useState, useEffect} from "react";
import { getProducts } from "../Services/ProductServices";
import Product from "./Product";
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';

function Products({buscador}) {
    const styles = {
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
                const data = await getProducts(buscador)
                setProducts(data.results)
            }
            getAllProducts()
        }, 
        [buscador]
    )

    return(
        <>
            <div>
                <Container>
                    <div style={styles.flexbox}>
                        <div style={styles.left}>
                            <h3 style={{textTransform: 'capitalize'}}>{buscador}</h3>
                            <p>Filter by</p>
                            <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                Filter
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item>Price</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div style={styles.right}>
                            {products.map(product => <Product {...product} key={product.id}/>)}  
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}
export default Products