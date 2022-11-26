import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Product({title, price,thumbnail, id}) {
    const styles ={
        card: {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            padding: '10px', 
            gap: '10px',
            flexWrap: 'wrap'
        },
        img: {
            objectFit: 'cover',
            height: '100px',
            width: '100px'
        },
        price: {
            textAlign: 'start',
            fontSize: '1.2rem'
        }
    } 
    return(
        <>
                    <Card style={styles.card}>
                        <div>
                            <Link to={`product/detail/${id}`} className='link'>
                                <img src={thumbnail} alt=""  style={styles.img}/>
                            </Link>
                        </div>
                        <div>
                            <Link to={`product/detail/${id}`} className='link'>
                                <h4>{title}</h4>
                            </Link>
                            <p style={styles.price}>U$S {price}</p>
                        </div>
                    </Card>
        </>
    )
}
export default Product