import "./style.css";
import { Link } from 'react-router-dom';

function CartWidget() {
    return (
        <div class="shopp">
        <a href="/checkout"><i class="large material-icons">shopping_cart</i> 2</a>
        </div>
    );
}

export default CartWidget;