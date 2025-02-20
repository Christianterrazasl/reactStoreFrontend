import NavBar from '../../components/navbar/NavBar.jsx'
import { useContext } from 'react'
import { CartContext } from '../../components/CartProvider.jsx'
import CartPanel from '../../components/CartPanel/CartPanel.jsx';

function CartPage(){

    const {cart, addToCart} = useContext(CartContext);

    return(
        <>
            <NavBar/>
            <CartPanel/>
        </>
    )
}
export default CartPage