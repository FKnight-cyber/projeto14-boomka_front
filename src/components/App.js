import { useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Produto from "../pages/Produto/Produto.jsx";
import Carrinho from "../pages/Carrinho/Carrinho.jsx";
import GlobalStyle from "../theme/globalstyles.js";
import UserContext from "../contexts/UserContext.js";
import Login from "../pages/Login.js";
import Registration from "../pages/Registration.js";
import Pedido from "../pages/Pedido/Pedido.jsx";
import Pedidos from "../pages/Pedidos.js";
import Account from "../pages/Account.js";
import Adress from "../pages/Adress.js";

export default function App() {
  const [token,setToken] = useState('');
  const [cart,setCart] = useState([]);
  const userContext = {
    token,
    setToken,
    cart,
    setCart
  }

  return (
    <BrowserRouter>
    <GlobalStyle />
    <UserContext.Provider value={userContext}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Registration />}/>
        <Route path="/produtos/:id" element={<Produto />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/pedido" element={<Pedido />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/account" element={<Account />} />
        <Route path="/adress" element={<Adress />} />
      </Routes>
    </UserContext.Provider >
    </BrowserRouter> 
  );
}

