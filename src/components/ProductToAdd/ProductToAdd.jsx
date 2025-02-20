import './ProductToAdd.css'
import {useContext} from 'react';
import { CartContext } from '../CartProvider';

function ProductToAdd({name, price, id, description, imageUrl, amount=1,  isDisabled=false}){

    const {addProductToCart} = useContext(CartContext);

    return(<div className="product">
        <img  className="productImg" src={imageUrl} alt="plant image"/>
        <h2 className="productTitle">{name}</h2>
        <p>{description}</p>
        <h2>{price} $</h2>
        <button disabled={isDisabled} className={isDisabled? "btnAdded":"btnAdd"} onClick={()=>addProductToCart({name, price, id, description, imageUrl, amount})}>{isDisabled? "Added to cart":"Add to cart"}</button>
    </div>
    )
}
export default ProductToAdd