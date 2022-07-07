import { useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Produto from "../pages/Produto/Produto.jsx";
import Carrinho from "../pages/Carrinho.js";
import GlobalStyle from "../theme/globalstyles.js";
import UserContext from "../contexts/UserContext.js";

export default function App() {
  const [token,setToken] = useState();
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
        <Route path="/produtos/:id" element={<Produto />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
    </UserContext.Provider >
    </BrowserRouter> 
  );
}
