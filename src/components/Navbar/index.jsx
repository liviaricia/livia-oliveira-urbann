import CartWidget from "../CartWidget";
import Test from "../CartWidget";
import ItemListContainer from "../ItemListContainer";
import "./style.css";
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="App">
            <nav>
                <div class="nav-wrapper blue-grey lighten-4">
                <a href="/" class="left initial brand-logo blue-grey-text">URBANN</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="/">Home</a></li>
                        <li><a href="#">Masculino</a></li>
                        <li><a href="#">Feminino</a></li>
                        <li><a href="#">Quem somos</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><CartWidget/></li>
                    </ul>
                   
                </div>
            </nav>
        </div>
    );
}

export default NavBar;