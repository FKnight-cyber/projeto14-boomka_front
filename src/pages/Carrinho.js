import styled from "styled-components";
import { IoClose,IoCart,IoBag,IoTrash,IoArrowBack } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import UserContext from "../contexts/UserContext.js";
import CartProduct from "../components/CartProduct.js";
import axios from "axios";

export default function Carrinho(){
    const navigate = useNavigate();
    const { cart,setCart,token } = useContext(UserContext);

    useEffect(()=>{
        if(token){
            const promise = axios.get("https://boomka.herokuapp.com/carrinho",{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });

            promise.then(res => {
                setCart(res.data);
            });

            promise.catch(Error=>{
                alert(Error.response.data);
            })
        }
    },[cart])

    function cleanCart(){
        if(window.confirm("Você quer limpar o carrinho?")){
            if(token){
                const promise = axios.delete(`https://boomka.herokuapp.com/carrinho`,{
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                });

                promise.then(()=>{
                    return alert('Carrinho limpo!');
                });

                promise.catch(Error => {
                    return alert(Error.data.response);
                })
            }else{
                setCart([]);
            }
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
            <div className="return" onClick={()=>navigate(-1)}>
                <IoArrowBack size={30} color={'#ffffff'} />
            </div> 
        </Container>
    )
}

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
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
        background-color: #333333;
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
        color:crimson;

        h1{
            margin-left: 6px;
        }
    }

    .continue{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 60%;
        height: 60px;
        margin-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        border-radius: 6px;
        background-color: crimson;
        font-size: 20px;
        color: #ffffff;

        @media (min-width:600px) {
            margin-top: 20px;
            justify-content: center;
        }
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
            width: 60%;
            height: 30px;

            h1{
                color: red;
            }
        }
    }

    .return{
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        background-color: #32CD32;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        bottom: 20px;
        left: 20px;
    }
`