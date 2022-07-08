import styled from "styled-components";
import { IoClose,IoCart,IoBag,IoTrash } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../contexts/UserContext.js";
import CartProduct from "../components/CartProduct.js";

export default function Carrinho(){
    const navigate = useNavigate();
    const { cart,setCart } = useContext(UserContext);

    function cleanCart(){
        if(window.confirm("Você quer limpar o carrinho?")){
            setCart([]);
        }
    }
    return(
        <Container visibility={cart.length===0}>
            <header>
                <div>
                    <IoClose size={30} color={'#ffffff'} onClick={()=>navigate(-1)}/>
                    <h2>Carrinho</h2>
                </div>
                <Link to="/pedido" style={{textDecoration:"none"}}>
                    <h3>Finalizar</h3>
                </Link>
            </header>
            {
                cart.length === 0 ?
                ""
                :
                <div className="title">
                    <div className="title1">
                        <IoBag size={20} color={'red'} />
                        <h1>PRODUTO</h1>
                    </div>
                    <div className="removeall" onClick={cleanCart}>
                        <IoTrash size={20} color={'red'} />
                        <h1>Remover todos os produtos</h1>
                    </div>
                </div>
            }
            {    
            cart.length === 0 ?
                <div className="vazio">
                    <h1>{":("}</h1>
                    <h1>Seu carrinho está vazio</h1>
                </div>
                :
                <div>
                    <CartProduct></CartProduct>
                </div>           
            }
            <div className="continue compra" onClick={()=>navigate("/pedido")}>
                <h2>Finalizar compra</h2>
            </div>
            <div className="continue" onClick={()=>navigate("/")}>
                <IoCart size={30} color={'#ffffff'} />
                <h2>Continuar comprando</h2>
            </div>
        </Container>
    )
}

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
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

        h3{
            color: #ffffff;
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

    .continue{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 240px;
        height: 60px;
        margin-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        border-radius: 6px;
        background-color: #E6600D;
        font-size: 20px;
        color: #ffffff;
    }

    .continue.compra{
        display: ${props => props.visibility ? 'none' : 'flex'};
        justify-content: center;
    }

    .title{
        display: flex;
        justify-content: space-between;
        background-color: #ffffff;
        width: 100%;
        height: 70px;
        padding: 10px;
        margin-top: 20px;
        border-radius: 8px;

        .title1{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100px;
            height: 30px;

            h1{
                margin-left: 4px;
            }
        }

        .removeall{
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid red;
            border-radius: 4px;
            width: 220px;
            height: 30px;

            h1{
                color: red;
            }
        }
    }
`