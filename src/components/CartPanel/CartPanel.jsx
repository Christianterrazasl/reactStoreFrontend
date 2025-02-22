import CartPanelItem from "../CartPanelItem/CartPanelItem";
import { CartContext } from "../CartProvider"
import { useContext } from "react"
import './CartPanel.css'

function CartPanel(){
    const {cart} = useContext(CartContext);
    let totalPrice = 0;
    cart.forEach(item => totalPrice += (item.price*item.amount));

    return(
        <div className="cartPanel">
            {cart.length > 0 ? (
                <>
                <h2>Amount of items: {cart.length}</h2>
                {cart.map(item => <CartPanelItem key={item.id} product={item}/>)}
                <h2>Total price: {totalPrice}</h2>
                <button className="checkoutBtn" onClick={()=>{
                    console.log(cart);
                    window.location.hash = "#/"
                    }}>Checkout</button>
                </>
            ) : (
                <h1>The cart has no items</h1>
            )
            }
            
        </div>

    );
    
    
}
export default CartPanel