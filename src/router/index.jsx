import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CartWidget from "../components/CartWidget";
import ItemListContainer from "../components/ItemListContainer";
import ItemDetail from "../components/ItemDetail";
import Item from "../components/Item";
import App from '../App';
import ItemDetailContainer from "../components/ItemDetailContainer";
import Test from "../components/CartWidget/test";
import Checkout from "../pages/Checkout";
import NavBar from "../components/Navbar";
import Home from "../pages/Home";

const AppRouter = () => (

    <Router>
        <div>
            <NavBar />
        </div>
        <Routes>
            {/* <Route exact path="/" element={<ItemListContainer />} /> */}
            {/* <Route path="/"/> */}
            {/* <Route path="/checkout" element={<CartWidget />} /> */}
            {/* <Route path="/item" element={<ItemListContainer />} /> */}
            {/* <Route exact path="/item:filter?" element={<Item />} /> */}
            {/* <Route path="/item-details" element={<Item/>}/> */}
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<ItemListContainer />} />
            <Route path="/cart" element={<Checkout />} />
            <Route path="/items/:id" element={<ItemDetailContainer />} />
        </Routes>
    </Router>

);

export default AppRouter;