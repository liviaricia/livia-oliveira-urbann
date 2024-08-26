import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./style.css";
import { items } from "../../components/Item";

function Checkout() {
    const { cart, cartTotal, cleanCart, addToCart, removeFromCart } = useCart();

    const [counts, setCounts] = useState(
        items.reduce((acc, item) => {
            acc[item.id] = 0;
            return acc;
        }, {})
    );

    const updateCount = (id, newCount) => {
        setCounts(prevCounts => ({
            ...prevCounts,
            [id]: newCount
        }));
    };

    const submit = (item) => {
        addToCart({
            ...item,
            count: counts[item.id]
        });
        alert(counts[item.id])
    };

    const remove = (item, count) => {
        removeFromCart(item, count);
    }

    /* const total = (item)=>{
        cartTotal({
            ...item,

        });
    } */

    const order = {
        buyer: {
            name: "Lívia", email: "email@email.com",
        },
        items: [...cart],
        total: cartTotal()
    }
    console.log(order);
    function finalizarcompra(){
        console.log(order);
        alert("Obrigada por comprar conosco!");
        cleanCart();
    }


    if (cart.length === 0) {
        return <div>
            <h3>Ops! Parece que seu carrinho está vazio 😥</h3>
            <h5><Link to="/produtos">Quero encontrar produtos que são a minha cara</Link></h5>
        </div>
    }
    return <div>
        <h2>Itens no carrinho</h2>
        <div>
            {cart.map((item, id) => (
                <div class="card shopping" key={item.id} id={item.id}>
                    <Link to={`/items/` + item.id}>
                        <div class="card-image cart">
                            <img src={item.picture} alt={item.description} />
                        </div>
                    </Link>
                    <div class="item cart">
                        <span class="card-title">{item.name}</span><br />
                        <span class="value black-text">R$ {item.price}</span><br />
                        <span class="value black-text">Quantidade: {item.count} </span>
                        {/* <button onClick={()=>remove(item.id,item.count)} class="qtd">-</button>
                    <input id="qtdItems" type="text" class="qtd" value={item.count} readOnly />
                    <button onClick={()=>submit(item)} class="qtd">+</button> */}
                        {/* <ItemCount stock={item.stock} count={counts[item.id]} setCount={(newCount) => updateCount(item.id, newCount)} item={item} /> */}
                        <div className="card-action indigo darken-4">
                            <Link item={item} onClick={() => remove(item.id, counts)}>Remover produtos</Link>
                        </div>
                    </div>
                </div>

            ))}
            <div class="shopping-total">
                <p><strong>Total: R$ {cartTotal()}</strong></p>
                <div className="card-action indigo darken-4">
                    <Link onClick={finalizarcompra}>Finalizar minha compra </Link>
                </div><br />
                <div className="card-action indigo lighten-5">
                    <Link onClick={cleanCart} class="indigo-text text-darken-2">Esvaziar carrinho</Link>
                </div>
            </div>
        </div>
    </div>
}

export default Checkout;