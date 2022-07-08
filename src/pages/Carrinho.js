import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../contexts/UserContext.js";

export default function Carrinho(){
    const navigate = useNavigate();
    const { cart,setCart } = useContext(UserContext);
    return(
        <Container>
            <header>
                <div>
                    <IoClose size={30} color={'#ffffff'} onClick={()=>navigate(-1)}/>
                    <h2>Carrinho</h2>
                </div>
                <h3>Finalizar</h3>
            </header>
            {    
            cart.length === 0 ?
                <div className="vazio">
                    <h1>{":("}</h1>
                    <h1>Seu carrinho está vazio</h1>
                </div>
                :
                <contents>

                </contents>           
            }
        </Container>
    )
}

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #F2F3F4;
    
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 60px;
        background-color: #1960B1;
        padding-left:10px;
        padding-right: 16px;
        color: #ffffff;

        div{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 120px;
            height: 40px;

            h2{
                font-size: 18px;
                font-weight: bolder;
            }
        }
    }

    .vazio{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        font-size: 20px;
        color:#E6600D;

        h1{
            margin-left: 6px;
        }
    }
`