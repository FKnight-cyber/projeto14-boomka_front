import styled from "styled-components";
import { IoTrash } from "react-icons/io5";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import axios from "axios";

export default function CartProduct(){
    const {cart,setCart,token} = useContext(UserContext);

    function removeFromCart(index,id){
        if(token){
            const promise = axios.delete(`https://boomka.herokuapp.com/carrinho/${id}`,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });

            promise.then(()=>{
                return alert('removido do carrinho');
            });

            promise.catch(Error => {
                return alert(Error.data.response);
            })
        }else{
            const newCart = [...cart];
            newCart.splice(index,1);
            setCart([...newCart]);
        }
    }
    return(
        cart.map((product,index) => 
        <Container key={index}>
            <div>
                <img src={product.image} alt="" srcset="" />
            </div>
            <div className="titleproduct">
                <h3>{product.manufacturer}</h3>
                <h4>{product.title}</h4>
                <h5>{`R$ ${product.price}`}</h5>
                <div className="remover">
                    <IoTrash size={30} color={'red'} onClick={()=>removeFromCart(index,product.id)} />
                </div>
            </div>
        </Container>
        )
    );
}

const Container = styled.div`
    display: flex;
    width: 90%;
    height: 170px;
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: 20px;
    padding: 8px;
    border-radius:8px;
    background-color: #ffffff;
    position: relative;
    
    img{
        width: 80px;
        height: 100px;
    }

    .titleproduct{
        display: inline-block;
        flex-direction: column;
        word-wrap: break-word;
        margin-top: 0;
        margin-left: 12px;
        padding-top: 0;
        padding-bottom: 0;

        h3{
            font-weight: bolder;
            margin-bottom: 4px;
        }

        h4{
            margin-bottom: 6px;
        }

        h5{
            color: #589A0F;
            font-weight: bolder;
        }

        .remover{
            display: flex;
            justify-content: center;
            position: absolute;
            width: 140px;
            right: 0;
            bottom: 20px;
        }
    }
`