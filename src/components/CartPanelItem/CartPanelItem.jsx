import { useContext } from 'react'
import './CartPanelItem.css'
import { CartContext } from '../CartProvider'


function CartPanelItem({product}){
    const {cart, changeProductAmount, removeProduct} = useContext(CartContext);
    

    return(
    <div className="item">
        <img className="itemImg" src={product.imageUrl} alt="product image" />
        <h2>{product.name}</h2>
        <h2>{product.price * product.amount} $</h2>
        <div className='itemButtons'>
            <button className='itemBtn' onClick={()=>changeProductAmount(product, product.amount-1)
            }>-</button>
            <h2>{product.amount}</h2>
            <button className='itemBtn' onClick={()=>changeProductAmount(product, product.amount+1)
            }>+</button>
            <button className='removeBtn' onClick={()=>removeProduct(product)}>Eliminar</button>
        </div>
        
    </div>
    )
}
export default CartPanelItem