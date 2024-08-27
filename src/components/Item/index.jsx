import { ItemCount } from "../ItemCount";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { ItemsCollection } from "../../services/firebase";
import { getDocs, query,orderBy } from "firebase/firestore";

//Produtos fixados no website
/* export const items = [
    { id: 0, name: "Camiseta branca feminina 1", stock: 5, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae dolor metus. Donec porta ut sapien ut mattis. Nunc purus sapien, aliquet a ante eu, mollis dictum nisi. Vivamus ultrices nisi id tortor varius porta. Cras sit amet dolor consectetur, tincidunt nulla ac, rhoncus nisl. Donec ornare tellus ac bibendum congue. Pellentesque aliquet gravida arcu at euismod.", price: 45.90, color: "branco", picture: "https://global.cdn.magazord.com.br/universobasico/img/2023/03/produto/3553/camiseta-branca-algodao-feminina-lisa.jpg?ims=fit-in/635x865/filters:fill(white)" },
    { id: 1, name: "Camiseta branca feminina 2", stock: 15, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae dolor metus. Donec porta ut sapien ut mattis. Nunc purus sapien, aliquet a ante eu, mollis dictum nisi. Vivamus ultrices nisi id tortor varius porta. Cras sit amet dolor consectetur, tincidunt nulla ac, rhoncus nisl. Donec ornare tellus ac bibendum congue. Pellentesque aliquet gravida arcu at euismod.labla", price: 50.90, color: "branco", picture: "https://global.cdn.magazord.com.br/universobasico/img/2023/03/produto/3553/camiseta-branca-algodao-feminina-lisa.jpg?ims=fit-in/635x865/filters:fill(white)" },
    { id: 2, name: "Camiseta branca feminina 3", stock: 5, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae dolor metus. Donec porta ut sapien ut mattis. Nunc purus sapien, aliquet a ante eu, mollis dictum nisi. Vivamus ultrices nisi id tortor varius porta. Cras sit amet dolor consectetur, tincidunt nulla ac, rhoncus nisl. Donec ornare tellus ac bibendum congue. Pellentesque aliquet gravida arcu at euismod.labla", price: 65.90, color: "branco", picture: "https://global.cdn.magazord.com.br/universobasico/img/2023/03/produto/3553/camiseta-branca-algodao-feminina-lisa.jpg?ims=fit-in/635x865/filters:fill(white)" },
    { id: 3, name: "Camiseta branca feminina 4", stock: 5, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae dolor metus. Donec porta ut sapien ut mattis. Nunc purus sapien, aliquet a ante eu, mollis dictum nisi. Vivamus ultrices nisi id tortor varius porta. Cras sit amet dolor consectetur, tincidunt nulla ac, rhoncus nisl. Donec ornare tellus ac bibendum congue. Pellentesque aliquet gravida arcu at euismod.labla", price: 60.90, color: "branco", picture: "https://global.cdn.magazord.com.br/universobasico/img/2023/03/produto/3553/camiseta-branca-algodao-feminina-lisa.jpg?ims=fit-in/635x865/filters:fill(white)" },
    { id: 4, name: "Camiseta branca feminina 5", stock: 5, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae dolor metus. Donec porta ut sapien ut mattis. Nunc purus sapien, aliquet a ante eu, mollis dictum nisi. Vivamus ultrices nisi id tortor varius porta. Cras sit amet dolor consectetur, tincidunt nulla ac, rhoncus nisl. Donec ornare tellus ac bibendum congue. Pellentesque aliquet gravida arcu at euismod.labla", price: 70.90, color: "branco", picture: "https://global.cdn.magazord.com.br/universobasico/img/2023/03/produto/3553/camiseta-branca-algodao-feminina-lisa.jpg?ims=fit-in/635x865/filters:fill(white)" },
    { id: 5, name: "Camiseta branca feminina 6", stock: 5, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae dolor metus. Donec porta ut sapien ut mattis. Nunc purus sapien, aliquet a ante eu, mollis dictum nisi. Vivamus ultrices nisi id tortor varius porta. Cras sit amet dolor consectetur, tincidunt nulla ac, rhoncus nisl. Donec ornare tellus ac bibendum congue. Pellentesque aliquet gravida arcu at euismod.labla", price: 47.90, color: "branco", picture: "https://global.cdn.magazord.com.br/universobasico/img/2023/03/produto/3553/camiseta-branca-algodao-feminina-lisa.jpg?ims=fit-in/635x865/filters:fill(white)" },
    { id: 6, name: "Camiseta branca feminina 7", stock: 5, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae dolor metus. Donec porta ut sapien ut mattis. Nunc purus sapien, aliquet a ante eu, mollis dictum nisi. Vivamus ultrices nisi id tortor varius porta. Cras sit amet dolor consectetur, tincidunt nulla ac, rhoncus nisl. Donec ornare tellus ac bibendum congue. Pellentesque aliquet gravida arcu at euismod.labla", price: 40.90, color: "branco", picture: "https://global.cdn.magazord.com.br/universobasico/img/2023/03/produto/3553/camiseta-branca-algodao-feminina-lisa.jpg?ims=fit-in/635x865/filters:fill(white)" },
    { id: 7, name: "Camiseta branca feminina 8", stock: 5, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae dolor metus. Donec porta ut sapien ut mattis. Nunc purus sapien, aliquet a ante eu, mollis dictum nisi. Vivamus ultrices nisi id tortor varius porta. Cras sit amet dolor consectetur, tincidunt nulla ac, rhoncus nisl. Donec ornare tellus ac bibendum congue. Pellentesque aliquet gravida arcu at euismod.labla", price: 49.90, color: "branco", picture: "https://global.cdn.magazord.com.br/universobasico/img/2023/03/produto/3553/camiseta-branca-algodao-feminina-lisa.jpg?ims=fit-in/635x865/filters:fill(white)" },
    { id: 8, name: "Camiseta branca feminina 9", stock: 5, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae dolor metus. Donec porta ut sapien ut mattis. Nunc purus sapien, aliquet a ante eu, mollis dictum nisi. Vivamus ultrices nisi id tortor varius porta. Cras sit amet dolor consectetur, tincidunt nulla ac, rhoncus nisl. Donec ornare tellus ac bibendum congue. Pellentesque aliquet gravida arcu at euismod.labla", price: 41.90, color: "branco", picture: "https://global.cdn.magazord.com.br/universobasico/img/2023/03/produto/3553/camiseta-branca-algodao-feminina-lisa.jpg?ims=fit-in/635x865/filters:fill(white)" },
    { id: 9, name: "Camiseta branca feminina 10", stock: 5, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae dolor metus. Donec porta ut sapien ut mattis. Nunc purus sapien, aliquet a ante eu, mollis dictum nisi. Vivamus ultrices nisi id tortor varius porta. Cras sit amet dolor consectetur, tincidunt nulla ac, rhoncus nisl. Donec ornare tellus ac bibendum congue. Pellentesque aliquet gravida arcu at euismod.", price: 44.90, color: "branco", picture: "https://global.cdn.magazord.com.br/universobasico/img/2023/03/produto/3553/camiseta-branca-algodao-feminina-lisa.jpg?ims=fit-in/635x865/filters:fill(white)" },
] */

//Produtos do banco de dados
const snapshot = await getDocs(query(ItemsCollection, orderBy("id","asc")));
export const items = snapshot.docs.map((item) => ({
    id: item.id,
    ...item.data()
}));

function Item() {

    const { addToCart } = useCart();

    const [counts, setCounts] = useState(
        items.reduce((acc, item) => {
            acc[item.id] = 0;
            return acc;
        }, {})
    );

    const submit = (item) => {
        addToCart({
            ...item,
            count: counts[item.id]
        });
        /* console.log(counts[item.id]); */
    };

    const updateCount = (id, newCount) => {
        setCounts(prevCounts => ({
            ...prevCounts,
            [id]: newCount
        }));
    };

    return (
        <div>
            {items.map(item => (
                <div className="col s4" key={item.id}>
                    <div className="card" id={item.id}>
                        <Link to={`/items/${item.id}`}>
                            <div className="card-image">
                                <img src={item.picture} alt={item.description} />
                            </div>
                            <div className="item">
                                <span className="card-title">{item.name}</span><br />
                                <span className="value black-text">{item.price}</span>
                            </div>
                        </Link>
                        <ItemCount stock={item.stock} count={counts[item.id]} setCount={(newCount) => updateCount(item.id, newCount)} item={item} />
                        <div className="card-action  indigo darken-4">
                            <Link onClick={() => submit(item)}>Adicionar no carrinho</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Item;