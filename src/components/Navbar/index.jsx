import "./style.css";
import CartWidget from "../CartWidget";
import { Link } from 'react-router-dom';
import logo from '../../LogoURBANN.png'

function NavBar() {
    return (
        <nav>
            <div class="nav-wrapper grey lighten-5">
                <Link to="/" class="left initial brand-logo"><img src={logo} alt="Logo"/></Link>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/produtos">Produtos</Link></li>
                    <li><Link to="/">Quem somos</Link></li>
                    <li><Link to="/">FAQ</Link></li>
                    <li><CartWidget /></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;