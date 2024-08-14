import ItemCount from "../ItemCount";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useCart } from "../../context/CartContext";


export const items = [
    { id: 0, name: "Camiseta branca feminina", stock: 5, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae dolor metus. Donec porta ut sapien ut mattis. Nunc purus sapien, aliquet a ante eu, mollis dictum nisi. Vivamus ultrices nisi id tortor varius porta. Cras sit amet dolor consectetur, tincidunt nulla ac, rhoncus nisl. Donec ornare tellus ac bibendum congue. Pellentesque aliquet gravida arcu at euismod.", price: 45.90, color: "branco", picture: "https://global.cdn.magazord.com.br/universobasico/img/2023/03/produto/3553/camiseta-branca-algodao-feminina-lisa.jpg?ims=fit-in/635x865/filters:fill(white)" },
    { id: 1, name: "Camiseta branca feminina", stock: 15, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae dolor metus. Donec porta ut sapien ut mattis. Nunc purus sapien, aliquet a ante eu, mollis dictum nisi. Vivamus ultrices nisi id tortor varius porta. Cras sit amet dolor consectetur, tincidunt nulla ac, rhoncus nisl. Donec ornare tellus ac bibendum congue. Pellentesque aliquet gravida arcu at euismod.labla", price: 50.90, color: "branco", picture: "https://global.cdn.magazord.com.br/universobasico/img/2023/03/produto/3553/camiseta-branca-algodao-feminina-lisa.jpg?ims=fit-in/635x865/filters:fill(white)" },
    { id: 2, name: "Camiseta branca feminina", stock: 5, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae dolor metus. Donec porta ut sapien ut mattis. Nunc purus sapien, aliquet a ante eu, mollis dictum nisi. Vivamus ultrices nisi id tortor varius porta. Cras sit amet dolor consectetur, tincidunt nulla ac, rhoncus nisl. Donec ornare tellus ac bibendum congue. Pellentesque aliquet gravida arcu at euismod.labla", price: 65.90, color: "branco", picture: "https://global.cdn.magazord.com.br/universobasico/img/2023/03/produto/3553/camiseta-branca-algodao-feminina-lisa.jpg?ims=fit-in/635x865/filters:fill(white)" },
    { id: 3, name: "Camiseta branca feminina", stock: 5, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae dolor metus. Donec porta ut sapien ut mattis. Nunc purus sapien, aliquet a ante eu, mollis dictum nisi. Vivamus ultrices nisi id tortor varius porta. Cras sit amet dolor consectetur, tincidunt nulla ac, rhoncus nisl. Donec ornare tellus ac bibendum congue. Pellentesque aliquet gravida arcu at euismod.labla", price: 60.90, color: "branco", picture: "https://global.cdn.magazord.com.br/universobasico/img/2023/03/produto/3553/camiseta-branca-algodao-feminina-lisa.jpg?ims=fit-in/635x865/filters:fill(white)" },
    { id: 4, name: "Camiseta branca feminina", stock: 5, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae dolor metus. Donec porta ut sapien ut mattis. Nunc purus sapien, aliquet a ante eu, mollis dictum nisi. Vivamus ultrices nisi id tortor varius porta. Cras sit amet dolor consectetur, tincidunt nulla ac, rhoncus nisl. Donec ornare tellus ac bibendum congue. Pellentesque aliquet gravida arcu at euismod.labla", price: 70.90, color: "branco", picture: "https://global.cdn.magazord.com.br/universobasico/img/2023/03/produto/3553/camiseta-branca-algodao-feminina-lisa.jpg?ims=fit-in/635x865/filters:fill(white)" },
    { id: 5, name: "Camiseta branca feminina", stock: 5, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae dolor metus. Donec porta ut sapien ut mattis. Nunc purus sapien, aliquet a ante eu, mollis dictum nisi. Vivamus ultrices nisi id tortor varius porta. Cras sit amet dolor consectetur, tincidunt nulla ac, rhoncus nisl. Donec ornare tellus ac bibendum congue. Pellentesque aliquet gravida arcu at euismod.labla", price: 47.90, color: "branco", picture: "https://global.cdn.magazord.com.br/universobasico/img/2023/03/produto/3553/camiseta-branca-algodao-feminina-lisa.jpg?ims=fit-in/635x865/filters:fill(white)" },
    { id: 6, name: "Camiseta branca feminina", stock: 5, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae dolor metus. Donec porta ut sapien ut mattis. Nunc purus sapien, aliquet a ante eu, mollis dictum nisi. Vivamus ultrices nisi id tortor varius porta. Cras sit amet dolor consectetur, tincidunt nulla ac, rhoncus nisl. Donec ornare tellus ac bibendum congue. Pellentesque aliquet gravida arcu at euismod.labla", price: 40.90, color: "branco", picture: "https://global.cdn.magazord.com.br/universobasico/img/2023/03/produto/3553/camiseta-branca-algodao-feminina-lisa.jpg?ims=fit-in/635x865/filters:fill(white)" },
    { id: 7, name: "Camiseta branca feminina", stock: 5, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae dolor metus. Donec porta ut sapien ut mattis. Nunc purus sapien, aliquet a ante eu, mollis dictum nisi. Vivamus ultrices nisi id tortor varius porta. Cras sit amet dolor consectetur, tincidunt nulla ac, rhoncus nisl. Donec ornare tellus ac bibendum congue. Pellentesque aliquet gravida arcu at euismod.labla", price: 49.90, color: "branco", picture: "https://global.cdn.magazord.com.br/universobasico/img/2023/03/produto/3553/camiseta-branca-algodao-feminina-lisa.jpg?ims=fit-in/635x865/filters:fill(white)" },
    { id: 8, name: "Camiseta branca feminina", stock: 5, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae dolor metus. Donec porta ut sapien ut mattis. Nunc purus sapien, aliquet a ante eu, mollis dictum nisi. Vivamus ultrices nisi id tortor varius porta. Cras sit amet dolor consectetur, tincidunt nulla ac, rhoncus nisl. Donec ornare tellus ac bibendum congue. Pellentesque aliquet gravida arcu at euismod.labla", price: 41.90, color: "branco", picture: "https://global.cdn.magazord.com.br/universobasico/img/2023/03/produto/3553/camiseta-branca-algodao-feminina-lisa.jpg?ims=fit-in/635x865/filters:fill(white)" },
    { id: 9, name: "Camiseta branca feminina", stock: 5, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae dolor metus. Donec porta ut sapien ut mattis. Nunc purus sapien, aliquet a ante eu, mollis dictum nisi. Vivamus ultrices nisi id tortor varius porta. Cras sit amet dolor consectetur, tincidunt nulla ac, rhoncus nisl. Donec ornare tellus ac bibendum congue. Pellentesque aliquet gravida arcu at euismod.", price: 44.90, color: "branco", picture: "https://global.cdn.magazord.com.br/universobasico/img/2023/03/produto/3553/camiseta-branca-algodao-feminina-lisa.jpg?ims=fit-in/635x865/filters:fill(white)" },
]

function Item({ item }) {
    const [count, setCount] = useState(1);

    return <div>
        {items.map(item => <div class="col s4">
            <div class="card" key={item.id} id={item.id}>
                <Link to={`/items/` + item.id}>
                    <div class="card-image">
                        <img src={item.picture} alt={item.description} />
                    </div>
                    <div class="item">
                        <span class="card-title">{item.name}</span><br />
                        <span class="value black-text">{item.price}</span>
                    </div>
                </Link>
                <ItemCount stock={item.stock} count={count} setCount={setCount} item={item}/>
               {/*  <div class="card-action blue-grey">
                    
                    <Link onClick={submit}>Adicionar no carrinho</Link>
                </div>  */}
            </div>
        </div>)
        }
    </div>
}

export default Item;