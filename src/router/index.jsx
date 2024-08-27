import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ItemListContainer from "../components/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer";
import Checkout from "../pages/Checkout";
import NavBar from "../components/Navbar";
import Home from "../pages/Home";

const AppRouter = () => (

    <Router>
        <div>
            <NavBar />
        </div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<ItemListContainer />} />
            <Route path="/cart" element={<Checkout />} />
            <Route path="/items/:id" element={<ItemDetailContainer />} />
        </Routes>
    </Router>

);

export default AppRouter;