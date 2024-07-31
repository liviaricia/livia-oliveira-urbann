import "./style.css";
import { useState } from "react";

export default function App() {
    const [count, setCount] = useState(1);
    return (
        <main>
            <ItemCount stock={15} count={count} setCount={setCount}/>
        </main>
    );
}

export function ItemCount({ stock, count, setCount }) {
    function addItem() {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    function removeItem() {
        if (count > 0) setCount(count - 1);
    }
    return (
        <div class="qtdItems">
            <button onClick={removeItem} class="qtd">-</button>
            <input id="qtdItems" type="text" class="qtd" value={count} />
            <button onClick={addItem} class="qtd">+</button>
        </div>
    );
}