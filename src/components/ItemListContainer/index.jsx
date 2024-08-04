import "./style.css";
import ItemList from "../ItemList";

function ItemListContainer() {
    return (
        <div class="catalog">
            <div class="row">
                    <ItemList/>
            </div>
        </div>
    );
}

export default ItemListContainer;