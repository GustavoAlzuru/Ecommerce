import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Product({title, price,thumbnail, id}) {
    const styles ={
        card: {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            padding: '10px',
            gap: '10px'
        },
        img: {
            objectFit: 'cover',
            height: '100px',
            width: '100px'
        },
        price: {
            textAlign: 'start',
            fontSize: '1.2rem'
        },
        link: {
            textDecoration: 'none',
            color: '#333'
        }
    }
    return(
        <>
                    <Card style={styles.card}>
                        <div>
                            <Link to={`product/detail/${id}`} style={styles.link}>
                                <img src={thumbnail} alt=""  style={styles.img}/>
                            </Link>
                        </div>
                        <div>
                            <Link to={`product/detail/${id}`} style={styles.link}>
                                <h4>{title}</h4>
                            </Link>
                            <p style={styles.price}>U$S {price}</p>
                        </div>
                    </Card>
        </>
    )
}
export default Product