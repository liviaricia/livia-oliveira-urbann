import { Link } from "react-router-dom"
export default function Home() {
    return <div>
        <h2>Bem vindo!</h2>
        <p>Navegue nas categorias acima para encontrar produtos</p>
        <p><Link to="/produtos">Encontrar produtos</Link></p>
    </div>
}