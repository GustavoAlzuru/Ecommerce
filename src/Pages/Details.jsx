import { useContext, useEffect, useState } from "react"
import { Button, Card, Container } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom"
import PlainNav from "../Components/Navigation/PlainNav";
import { AuthContext } from "../Context/AuthContext";
import { getProduct } from "../Services/ProductServices";

function Details(){
    const {id} = useParams()
    const [product, setProduct] = useState({})
    const [numberOfProduct, setnumberOfProduct] = useState(1)
    const [images, setImages] = useState([])
    const context = useContext(AuthContext)
    const navigate = useNavigate()

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
        },
        buttonCart:{
            margin: '5px 0px'
        }
    }

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
    const itemDecrease = () => {
        if(numberOfProduct > 1){
            setnumberOfProduct(numberOfProduct - 1)
        }
    }
    const itemAument = () => {
        setnumberOfProduct(numberOfProduct + 1)
    }
    const first = images[0]

    const goToCart = () => {
        if(!context.login){
            navigate('/Login')
        }
    }
    return(
        <>
            <PlainNav/>
            <div className="mainBackground">
                <Container>
                    <Link to={'/'} className="link">Back</Link>
                    <div style={styles.container}>
                        <div style={styles.imgContainer}>
                            <img src={first?.url} alt=""  style={styles.img}/>
                        </div>
                        <Card style={styles.card}>
                            <h4>{product.title}</h4>
                            <p style={styles.textPrice}> U$S 
                                {product.price * numberOfProduct}
                            </p>
                            <div style={styles.quantity}>
                                <Button variant="secondary" style={styles.buttonPrice} onClick={itemDecrease}>-</Button>
                                <span style={{fontSize: '1.5rem'}}>{numberOfProduct}</span>
                                <Button variant="secondary" style={styles.buttonPrice}onClick={itemAument}>+</Button>
                            </div>
                            <Button variant="outline-secondary" style={styles.buttonCart} onClick={goToCart}>Agregar al carrito</Button>
                            <Button as={Link} to={`/CheckOut/${id}`}>Comprar ahora</Button>
                        </Card>
                    </div>
                </Container>
            </div>
        </>

    )
}
export default Details