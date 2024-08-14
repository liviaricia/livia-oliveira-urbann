import "./style.css";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useCart } from "../../context/CartContext";

export default function App(items) {
    const [count, setCount] = useState(1);
    return (
        <main>
            <ItemCount stock={items.stock} count={count} setCount={setCount} item={items}/>
        </main>
    );
}

export function ItemCount({ stock, count, setCount, item }) {
    const { addToCart } = useCart();

    function submit() {
        addToCart({
            ...item,
            count
        });
        /* console.log("Quantas vezes foram: " + count); */
    }

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
                <input id="qtdItems" type="text" class="qtd" value={count} />
                <button onClick={addItem} class="qtd">+</button>

            </div>
            <div class="card-action blue-grey">
                <Link onClick={submit}>Adicionar no carrinho</Link>
            </div>
        </div>

    );
}
