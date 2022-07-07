import styled from "styled-components";
import Header from "../components/Header";
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function Registration () {
    
    return (
        <>
        <Header />
        <Container>
            <Register />
        </Container>
        
        </>
    )
}
function Register () {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: '',
        password: '',
        checkPassword: '',
        cpf: ''
    });
    function signUp(e) {
        e.preventDefault()
        const promise = axios.post('https://boomka.herokuapp.com/sign-up', {...user});
        promise
        .then(() => navigate('/sign-in'))
        .catch(() => alert('preencha os dados corretamente'))
    }
    function changeInput(e) {
        setUser({...user, [e.target.name]: e.target.value})
    }
    return (
        
            <div>
                <div className="main">
                    <h1>FAZER CADASTRO</h1>
                </div>
                <form>
                <input value={user.email} name='email' type="email" placeholder="email" onChange={changeInput}/>
                <input value={user.password} name='password' type="password" placeholder="senha" onChange={changeInput}/>
                <input value={user.checkPassword} name='checkPassword' type="password" placeholder="confirme sua senha" onChange={changeInput}/>
                <input value={user.cpf} name='cpf' type="text" placeholder="cpf" onChange={changeInput}/>
                <button onClick={signUp} type={'submit'}>
                    <span>CADASTRAR</span>
                </button>
                </form> 
                

                
            </div>
            
       
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