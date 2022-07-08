import Header from "../components/Header";
import styled from "styled-components";
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import UserContext from '../contexts/UserContext.js'

export default function Login () {
    const { setToken } = useContext(UserContext)
    const navigate = useNavigate()
    const [userLogin, setUserLogin] = useState({
        email: '',
        password: ''
    });
    function signIn(e) {
        e.preventDefault()
        const promise = axios.post('https://boomka.herokuapp.com/sign-in', {...userLogin});
        console.log(userLogin)
        promise
        .then((res) => {
            setToken(res.data)
            navigate('/')
        })
        .catch(() => alert('preencha os dados corretamente'))
    }
    function changeInput(e) {
        setUserLogin({...userLogin, [e.target.name]: e.target.value})
    }
    return (
    <>
            <Header />
            <Container>
                <div>
                    <div className="main">
                        <h1>FAZER LOGIN</h1>
                    </div>
                    <form>
                        <input value={userLogin.email} name='email' type="email" placeholder="email" onChange={changeInput}/>
                        <input value={userLogin.password} name='password' type="password" placeholder="senha" onChange={changeInput}/>
                        <button onClick={signIn} type={'submit'}>
                            <span>LOGIN</span>
                        </button>
                        <span onClick={() => navigate('/sign-up')}>Nao possui conta? cadastre-se</span>
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