import { useState } from "react"

function Cart(){
    const [showCart, setShowCart] = useState(false)
    const styles={
        cart:{
            borderRadius: '20px',
            border: '1px solid gray'
        },
        container:{
            width: '120px',
            height: '150px',
            backgroundColor: 'white',
            position: 'absolute',
            right: '0',
            top: '50px',
            zIndex: '2',
            border: '1px solid red'
        }
    }
    return(
        <div style={{position: 'relative'}}>
            <div>
                <button style={styles.cart}
                onClick={()=> setShowCart(current => !current)}>
                    Cart
                </button>
            </div>
            {showCart && 
            <>
                <div style={styles.container}>

                </div>
            </>
            }
        </div>
    )
}
export default Cart