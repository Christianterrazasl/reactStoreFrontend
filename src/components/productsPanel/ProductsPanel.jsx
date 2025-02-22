import { CartContext } from '../CartProvider'
import './ProductsPanel.css'
import { useContext } from 'react';
import ProductToAdd from '../ProductToAdd/ProductToAdd';
import begonia from "../../assets/begonia.jpg"


function ProductsPanel(){

    const {cart} = useContext(CartContext);
    const cartSet = new Set(cart.map(item => item.id));

    const products =[
        { id: 1, name: "Begonia", price: 20, description: "Test description for Begonia", imageUrl: begonia },
        { id: 2, name: "Rose", price: 25, description: "Test description for Rose", imageUrl: begonia },
        { id: 3, name: "Margarita", price: 10, description: "Test description for Margarita", imageUrl: begonia }
    ];


    return(
        <div className="productsPanel">
            {products.map(product=>(<ProductToAdd key={product.id} {...product} isDisabled={cartSet.has(product.id)}/>))}
        </div>
    )

}
export default ProductsPanel