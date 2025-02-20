import { createContext, useState } from "react";

export const CartContext = createContext();
export const CartProvider = ({children})=>{

    const [cart, setCart] = useState([]);

    const addProductToCart = (product)=>{
        setCart((prevCart) =>{
            const foundProduct = prevCart.find(p => p.id === product.id);
            if(foundProduct){
                return prevCart;
            }else{
                return [...prevCart, product];
            }
        })
    }

    const changeProductAmount = (product, userAmount)=>{
        if(userAmount>0){
            setCart((prevCart) => 
                prevCart.map(p => p.id === product.id ? {...p , amount: userAmount} : p)
            )
        }else{return}
        
    }

    const removeProduct = (product)=>{
        setCart((prevCart) => prevCart.filter(i => i.id !== product.id));

    }

    return (
        <CartContext.Provider value={{cart, setCart, addProductToCart, changeProductAmount, removeProduct}}>
            {children}
        </CartContext.Provider>
    )
} 