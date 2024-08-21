import "./style.css";
import { createContext, useState } from "react";
import { Link } from 'react-router-dom';
import { useCart } from "../../context/CartContext";
import { Item } from "../Item";

export function ItemCount({ stock, count, setCount, item }) {
    function addItem() {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    function removeItem() {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    return (
        <div>
            <div class="qtdItems">
                <button onClick={removeItem} class="qtd">-</button>
                <input id="qtdItems" type="text" class="qtd" value={count} readOnly/>
                <button onClick={addItem} class="qtd">+</button>
            </div>
        </div>
    );
}


/* const CountContext = createContext;
export const CountProvider = ({ children }) => {
    const [count, setCount] = useState(1);
    const incrementClicks = () => {
        setCount((prevCount) => prevCount + 1);
    };
    return (
        <CountContext.Provider value={{ count, incrementClicks }}>{children}</CountContext.Provider>
    );
} */
