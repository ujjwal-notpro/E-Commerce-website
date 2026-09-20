import React, { createContext } from 'react';
import all_product from '../Assets/all_product';


export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < all_product.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}
const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const contextValue = { all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount };
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        console.log(cartItems)
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalAmount += cartItems[item] * all_product[item].new_price;
            }
        }
        return totalAmount;
    }
    const constextvalue = { all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount };
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;

