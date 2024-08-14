import "./style.css";
import { Link } from 'react-router-dom';
import { useCart } from "../../context/CartContext.jsx";

function CartWidget() {
    const { cartQtd } = useCart();
    return (
        <div class="shopp">
           <a href="/cart">
                <i class="large material-icons">shopping_cart</i> { cartQtd () }
            </a>
        </div>
    );
}

export default CartWidget;