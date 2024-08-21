import "./style.css";
import { Link } from 'react-router-dom';
import { useCart } from "../../context/CartContext.jsx";

function CartWidget() {
    const { cartQtd } = useCart();
    if (cartQtd() === 0) {
        return (
            <div class="shopp">

                <Link to={`/cart`}>
                    <i class="large material-icons">shopping_cart</i>
                </Link>

            </div>
        )
    }
    return (
        <div class="shopp">
            <Link to={`/cart`}>
                <i class="large material-icons">shopping_cart</i>
                <div class="qtdProdsCart"><span>{cartQtd()}</span></div>
            </Link>
        </div>
    );
}

export default CartWidget;