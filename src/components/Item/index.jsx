import ItemCount from "../ItemCount";
import ItemDetailContainer from "../ItemDetailContainer";
import { Link } from 'react-router-dom';

export const items = [
    { id: 1, name: "Camiseta branca feminina", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae dolor metus. Donec porta ut sapien ut mattis. Nunc purus sapien, aliquet a ante eu, mollis dictum nisi. Vivamus ultrices nisi id tortor varius porta. Cras sit amet dolor consectetur, tincidunt nulla ac, rhoncus nisl. Donec ornare tellus ac bibendum congue. Pellentesque aliquet gravida arcu at euismod.", price: 45.90, color: "branco", picture: "https://global.cdn.magazord.com.br/universobasico/img/2023/03/produto/3553/camiseta-branca-algodao-feminina-lisa.jpg?ims=fit-in/635x865/filters:fill(white)" },
    { id: 2, name: "Camiseta branca feminina", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae dolor metus. Donec porta ut sapien ut mattis. Nunc purus sapien, aliquet a ante eu, mollis dictum nisi. Vivamus ultrices nisi id tortor varius porta. Cras sit amet dolor consectetur, tincidunt nulla ac, rhoncus nisl. Donec ornare tellus ac bibendum congue. Pellentesque aliquet gravida arcu at euismod.labla", price: 50.90, color: "branco", picture: "https://global.cdn.magazord.com.br/universobasico/img/2023/03/produto/3553/camiseta-branca-algodao-feminina-lisa.jpg?ims=fit-in/635x865/filters:fill(white)" },
    { id: 3, name: "Camiseta branca feminina", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae dolor metus. Donec porta ut sapien ut mattis. Nunc purus sapien, aliquet a ante eu, mollis dictum nisi. Vivamus ultrices nisi id tortor varius porta. Cras sit amet dolor consectetur, tincidunt nulla ac, rhoncus nisl. Donec ornare tellus ac bibendum congue. Pellentesque aliquet gravida arcu at euismod.labla", price: 65.90, color: "branco", picture: "https://global.cdn.magazord.com.br/universobasico/img/2023/03/produto/3553/camiseta-branca-algodao-feminina-lisa.jpg?ims=fit-in/635x865/filters:fill(white)" },
    { id: 4, name: "Camiseta branca feminina", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae dolor metus. Donec porta ut sapien ut mattis. Nunc purus sapien, aliquet a ante eu, mollis dictum nisi. Vivamus ultrices nisi id tortor varius porta. Cras sit amet dolor consectetur, tincidunt nulla ac, rhoncus nisl. Donec ornare tellus ac bibendum congue. Pellentesque aliquet gravida arcu at euismod.labla", price: 60.90, color: "branco", picture: "https://global.cdn.magazord.com.br/universobasico/img/2023/03/produto/3553/camiseta-branca-algodao-feminina-lisa.jpg?ims=fit-in/635x865/filters:fill(white)" },
    { id: 5, name: "Camiseta branca feminina", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae dolor metus. Donec porta ut sapien ut mattis. Nunc purus sapien, aliquet a ante eu, mollis dictum nisi. Vivamus ultrices nisi id tortor varius porta. Cras sit amet dolor consectetur, tincidunt nulla ac, rhoncus nisl. Donec ornare tellus ac bibendum congue. Pellentesque aliquet gravida arcu at euismod.labla", price: 70.90, color: "branco", picture: "https://global.cdn.magazord.com.br/universobasico/img/2023/03/produto/3553/camiseta-branca-algodao-feminina-lisa.jpg?ims=fit-in/635x865/filters:fill(white)" },
    { id: 6, name: "Camiseta branca feminina", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae dolor metus. Donec porta ut sapien ut mattis. Nunc purus sapien, aliquet a ante eu, mollis dictum nisi. Vivamus ultrices nisi id tortor varius porta. Cras sit amet dolor consectetur, tincidunt nulla ac, rhoncus nisl. Donec ornare tellus ac bibendum congue. Pellentesque aliquet gravida arcu at euismod.labla", price: 47.90, color: "branco", picture: "https://global.cdn.magazord.com.br/universobasico/img/2023/03/produto/3553/camiseta-branca-algodao-feminina-lisa.jpg?ims=fit-in/635x865/filters:fill(white)" },
    { id: 7, name: "Camiseta branca feminina", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae dolor metus. Donec porta ut sapien ut mattis. Nunc purus sapien, aliquet a ante eu, mollis dictum nisi. Vivamus ultrices nisi id tortor varius porta. Cras sit amet dolor consectetur, tincidunt nulla ac, rhoncus nisl. Donec ornare tellus ac bibendum congue. Pellentesque aliquet gravida arcu at euismod.labla", price: 40.90, color: "branco", picture: "https://global.cdn.magazord.com.br/universobasico/img/2023/03/produto/3553/camiseta-branca-algodao-feminina-lisa.jpg?ims=fit-in/635x865/filters:fill(white)" },
    { id: 8, name: "Camiseta branca feminina", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae dolor metus. Donec porta ut sapien ut mattis. Nunc purus sapien, aliquet a ante eu, mollis dictum nisi. Vivamus ultrices nisi id tortor varius porta. Cras sit amet dolor consectetur, tincidunt nulla ac, rhoncus nisl. Donec ornare tellus ac bibendum congue. Pellentesque aliquet gravida arcu at euismod.labla", price: 49.90, color: "branco", picture: "https://global.cdn.magazord.com.br/universobasico/img/2023/03/produto/3553/camiseta-branca-algodao-feminina-lisa.jpg?ims=fit-in/635x865/filters:fill(white)" },
    { id: 9, name: "Camiseta branca feminina", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae dolor metus. Donec porta ut sapien ut mattis. Nunc purus sapien, aliquet a ante eu, mollis dictum nisi. Vivamus ultrices nisi id tortor varius porta. Cras sit amet dolor consectetur, tincidunt nulla ac, rhoncus nisl. Donec ornare tellus ac bibendum congue. Pellentesque aliquet gravida arcu at euismod.labla", price: 41.90, color: "branco", picture: "https://global.cdn.magazord.com.br/universobasico/img/2023/03/produto/3553/camiseta-branca-algodao-feminina-lisa.jpg?ims=fit-in/635x865/filters:fill(white)" },
    { id: 10, name: "Camiseta branca feminina", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae dolor metus. Donec porta ut sapien ut mattis. Nunc purus sapien, aliquet a ante eu, mollis dictum nisi. Vivamus ultrices nisi id tortor varius porta. Cras sit amet dolor consectetur, tincidunt nulla ac, rhoncus nisl. Donec ornare tellus ac bibendum congue. Pellentesque aliquet gravida arcu at euismod.", price: 44.90, color: "branco", picture: "https://global.cdn.magazord.com.br/universobasico/img/2023/03/produto/3553/camiseta-branca-algodao-feminina-lisa.jpg?ims=fit-in/635x865/filters:fill(white)" },
]

function Item() {
    return <div>
        {items.map(item => <div class="col s4">
            <a href={`/items/` + item.id}>
                {/* <Link to={`/item:filter?id=`+item.id}> */}
                <div class="card" key={item.id} id={item.id}>
                    <div class="card-image">
                        <img src={item.picture} alt={item.description} />
                    </div>
                    <div class="item">
                        <span class="card-title">{item.name}</span><br />
                        <span class="value black-text">{item.price}</span>
                        <ItemCount />
                    </div>
                    <div class="card-action blue-grey">
                        <a href="#">Adicionar no carrinho</a>
                    </div>
                </div>
                {/* </Link> */}
            </a>
        </div>)
        }</div>
}

export default Item;