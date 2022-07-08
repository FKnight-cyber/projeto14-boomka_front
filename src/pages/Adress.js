import Header from "../components/Header"
import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import UserContext from '../contexts/UserContext.js'

export default function Endereço () {
    const {token} = useContext(UserContext)
    const navigate = useNavigate()
    const [user, setUser] = useState({
        cep: '',
        endereço: '',
        numero: '',
        bairro: '',
        cidade: ''
    });
    function signUp(e) {
        e.preventDefault()
        const promise = axios.post('https://boomka.herokuapp.com/adress', {...user, token});
        console.log(user)
        promise
        .then(() => navigate('/account'))
        .catch(() => alert('preencha os dados corretamente'))
    }
    function changeInput(e) {
        setUser({...user, [e.target.name]: e.target.value})
    }
    return (
        <>
            <Header />
            <Container>
            <div>
                <div className="main">
                    <h1>ENDEREÇO DE ENTREGA</h1>
                </div>
                <form>
                <input value={user.cep} name='cep' type="number" placeholder="cep" onChange={changeInput}/>
                <input value={user.endereço} name='endereço' type="text" placeholder="endereço" onChange={changeInput}/>
                <input value={user.numero} name='numero' type="number" placeholder="numero" onChange={changeInput}/>
                <input value={user.bairro} name='bairro' type="text" placeholder="bairro" onChange={changeInput}/>
                <input value={user.cidade} name='cidade' type="text" placeholder="cidade" onChange={changeInput}/>
                <button onClick={signUp} type={'submit'}>
                    <span>CADASTRAR</span>
                </button>
                </form> 
                
            </div>
            </Container>
        </>
    )
}
const Container = styled.div `
    height: 100vh;
    
    align-items: center;
    justify-content: center;

    display: flex;
    flex-direction: column;

    > * {
        &:first-child {
        display:flex;
        flex-direction:column;
        flex-direction:start;
    }}
    .main {
        padding: 10px;
        display:flex;
        align-items:center;
        height:60px;
        margin: 15px;
        border: 1px orange solid;
        width: 326px;
        height:58px;
        h1 {
            color: orange;
        }
    }
    .ion-selected {
        color: green !important;
        font-size: 22px !important;
    }
    form {
        width: 100%;

        align-items: center;
        gap: 13px;

        display: flex;
        flex-direction: column;
        button, input {
            width: 326px;
            height:58px;
            padding: 18px;
            border-radius: 2px;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
        }
        input {
            border-color: black;
            border: 1px black solid;
        }
        input::placeholder {
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            color: #000000;
        }
        button {
            background-color: green;
            font-size: 10px;
            display:flex;
            flex-direction: center;
            align-items:center;
            border:none;
            span {
                margin: 0 auto;
                font-size:20px;
            }
            &:hover{
                cursor: pointer;
            }
        }
        
    }
`;