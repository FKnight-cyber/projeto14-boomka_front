import Header from "../components/Header/Header.jsx";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext.js";
import axios from "axios";

export default function Account () {
    const navigate = useNavigate();
    const [click, setClick] = useState(false);
    function Adress() {
        if(!click) {
            setClick(true)
        } else {
            setClick(false)
        }
    }
    const [opened,setOpened] = useState(false);
    const [data, setData] = useState([])
    const {token} = useContext(UserContext)
    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.get('https://boomka.herokuapp.com/adress', config);
        promise.then((res) => setData(res.data))
    }, [])
    console.log(data)
    return (
        <>
            <Header opened={opened} setOpened={setOpened} />
            <Container>
                <div>
                    <h1>MINHA CONTA</h1>
                    <h2>Administre seus dados, endereços e pedidos. Se houver dúvida, entre em contato com nossa Central de Atendimento</h2>
                </div>
                <div>
                    <h1>MEUS PEDIDOS</h1>
                    <h2 onClick={() => navigate('/pedidos')}>Todos os seus pedidos</h2>
                </div>
                <div>
                    <h1>ENDEREÇO</h1>
                    <h2 onClick={() => navigate('/adress')}>Cadastrar endereço de entrega</h2> 
                    <h2 onClick={() => Adress()}>Meu endereço</h2>
                    {click ? <><h2># {data.cidade} - {data.bairro}</h2>
                    </> : <></> }
                </div>
                
            </Container>
        </>
    )
}
const Container = styled.div `
    margin-top: 70px;
    display: flex;
    flex-direction:column;
    gap:20px;
    padding: 0 10px;
    
    div {
        display: flex;
        flex-direction:column;
        flex-wrap:wrap;
        gap: 10px;
        word-wrap: break-word;
        width: 350px;
        h1 {
            color: orange;
            font-weight: 700;
        }
        h2 {
            color: black;
        }
    }
`;