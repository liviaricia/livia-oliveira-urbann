import React, { useContext, createContext, useState } from "react";

const CartContext = createContext();

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    function getFromCart(id) {
        return cart.find(obj => obj.id === id);
    }

    function addToCart(item) {
        if (isInCart(item.id)) {
            setCart(prevCart => {
                const updatedCart = prevCart.map(obj =>
                    obj.id === item.id ? { ...obj, count: obj.count + item.count } : obj
                );
                return updatedCart;
            });
        } else {
            setCart([...cart, item]);
        }
    }

    function removeFromCart(itemId) {
        const updatedCart = cart.filter(item => item.id !== itemId);
        setCart(updatedCart);
    }

    function isInCart(itemId) {
        return cart.some(item => item.id === itemId);
    }

    function cartQtd() {
        let count = 0;
         cart.forEach((item) => {
             count += item.count;
         });
         return count;
        // return cart.reduce((count, item) => count + item.count, 0);
    }

    function cartTotal() {
        return cart.reduce((acc, item) => acc + item.count * item.price, 0);
    }

    function addItem(id) {
        setCart((prevCart) => {
            const updatedCart = prevCart.map((obj) =>
                obj.id === id ? { ...obj, count: obj.count + 1 } : obj
            );
            return updatedCart;
        });
    }

    function removeItem(id) {
        setCart((prevCart) => {
            const updatedCart = prevCart.map((obj) =>
                obj.id === id && obj.count > 0 ? { ...obj, count: obj.count - 1 } : obj
            );
            return updatedCart;
        });
    }

    function cleanCart() {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, getFromCart, addToCart, removeFromCart, isInCart, cartQtd, cartTotal, addItem, removeItem, cleanCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);

     if (!context) {
         throw new Error('Para usar o useCart seu componente precisa estar dentro do CartProvider');
     } 

    return context;
}
