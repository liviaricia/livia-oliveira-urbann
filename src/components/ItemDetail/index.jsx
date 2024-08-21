import { useParams, Link } from 'react-router-dom';
import { items } from '../Item';
import { ItemCount } from '../ItemCount';
import { useState } from "react";
import { useCart } from '../../context/CartContext';

function ItemDetail() {
    const { id } = useParams();
    const [count, setCount] = useState(1);
    const { addToCart } = useCart();
    function submit() {
        addToCart({
            ...items[id],
            count
        })
    }
    return <div class="row">
        <div class="col s4">
            <img src={items[id].picture} alt={items[id].name} width="100%" />
        </div>
        <div class="col s8">
            <div class="item">
                <h2>{items[id].name}</h2>
                <h4>R${items[id].price}</h4>
                <h4>Descrição</h4>
                <p>{items[id].description}</p>
                <ItemCount count={count} setCount={setCount} stock={items[id].stock} onclick={submit}/>
                <p>Estoque disponível: {items[id].stock}</p>
            </div>
        </div>
        <div class="col s12">
            <div class="card-action indigo darken-4">
                <Link to={`/cart`}>Ver carrinho</Link>
            </div>
        </div>
    </div>

}

export default ItemDetail;