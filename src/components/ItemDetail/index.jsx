import { ItemCount } from "../ItemCount";
import { useParams } from 'react-router-dom';
import { items } from '../Item';

function ItemDetail() {
    const { id } = useParams();
    return <div class="row" style={{ marginTop: "10px" }}>
        <div class="col s4">
            <img src={items[id].picture} alt={items[id].name} width="100%" />
        </div>
        <div class="col s8">
            <div class="item">
                <h2>{items[id].name}</h2>
                <h4>R${items[id].price}</h4>
                <h4>Descrição</h4>
                <p>{items[id].description}</p>
                <ItemCount/>
            </div>
        </div>
        <div class="col s12">
            <div class="card-action blue-grey">
                <a href="#">Adicionar no carrinho</a>
            </div>
        </div>
    </div>

}

export default ItemDetail;