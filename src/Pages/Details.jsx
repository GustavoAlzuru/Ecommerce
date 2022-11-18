import { useEffect, useState } from "react"
import { Button, Card, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom"
import PlainNav from "../Components/Navigation/PlainNav";
import { getProduct } from "../Services/ProductServices";

function Details(){
    const {id} = useParams()
    const [product, setProduct] = useState({})
    const [numberOfProduct, setnumberOfProduct] = useState(0)
    const styles = {
        container:{
            backgroundColor: "#FFF",
            display: 'flex',
            flexWrap: 'wrap',
            height: '300px',
            marginTop: '30px',
            justifyContent: 'space-around',
            padding: '10px',
            gap: '100px'
        },
        imgContainer:{
            height: '100%'
        },
        img:{
            height: '100%'
        },
        card:{
            textAlign: 'start',
            padding: '10px 20px',
            display:'flex'
        },
        textPrice:{
            fontSize: '1.7rem',
            flex: '30%'
        },
        quantity:{
            width: '100%',
            padding: '1rem 0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        buttonPrice:{
            margin: '0px 5px',
            borderRadius: '5px'
        }
    }

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
    const itemDecrease = () => {
        if(numberOfProduct > 0){
            setnumberOfProduct(numberOfProduct - 1)
        }
    }
    const itemAument = () => {
        setnumberOfProduct(numberOfProduct + 1)
    }
 
    return(
        <>
            <PlainNav/>
            <div className="mainBackground">
                <Container>
                    <Link to={'/'} className="link">Back</Link>
                    <div style={styles.container}>
                        <div style={styles.imgContainer}>
                            <img src={product.thumbnail} alt=""  style={styles.img}/>
                        </div>
                        <Card style={styles.card}>
                            <h4>{product.title}</h4>
                            <p style={styles.textPrice}> U$S {product.price}</p>
                            <div style={styles.quantity}>
                                <Button variant="secondary" style={styles.buttonPrice} onClick={itemDecrease}>-</Button>
                                <span style={{fontSize: '1.5rem'}}>{numberOfProduct}</span>
                                <Button variant="secondary" style={styles.buttonPrice}onClick={itemAument}>+</Button>
                            </div>
                            <Button style={styles.button} as={Link} to={'/CheckOut'}>Comprar ahora</Button>
                        </Card>
                    </div>
                </Container>
            </div>
        </>

    )
}
export default Details