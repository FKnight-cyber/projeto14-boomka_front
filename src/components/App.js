import { useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../pages/Home.js";
import GlobalStyle from "../theme/globalstyles.js";
import UserContext from "../contexts/UserContext.js";
import Login from "../pages/Registration.js";

export default function App() {
  const [token,setToken] = useState();

  const userContext = {
    token,
    setToken
  }

  return (
    <BrowserRouter>
    <GlobalStyle />
    <UserContext.Provider value={userContext}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </UserContext.Provider >
    </BrowserRouter> 
  );
}
