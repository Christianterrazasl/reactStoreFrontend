import CartPanelItem from "../CartPanelItem/CartPanelItem";
import { CartContext } from "../CartProvider"
import { useContext } from "react"
import './CartPanel.css'

function CartPanel(){
    const {cart} = useContext(CartContext);

    return(
        <div className="cartPanel">
            {cart.length > 0 ? (
                <>
                {cart.map(item => <CartPanelItem key={item.id} product={item}/>)}
                <button className="checkoutBtn" onClick={()=>console.log(cart)}>Checkout</button>
                </>
            ) : (
                <h1>The cart has no items</h1>
            )
            }
            
        </div>

    );
    
    
}
export default CartPanel