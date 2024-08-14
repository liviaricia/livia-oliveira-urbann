import './App.css';
import NavBar from './components/Navbar';
import AppRouter from './router';
import CartProvider from './context/CartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
      <NavBar/>
      <AppRouter/>
      </CartProvider>
    </div>
  );
}

export default App;
