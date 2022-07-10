import { Container } from "./Carrinho.js";
import { IoClose,IoCart,IoBag,IoTrash,IoArrowBack } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import UserContext from "../../contexts/UserContext.js";
import CartProduct from "../../components/CartProduct/CartProduct.jsx";
import axios from "axios";
import { toast,ToastContainer } from "react-toastify";
import swal from 'sweetalert';

const notify = (error)=>{
    toast(`❗ ${error}`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }

const notify2 = (msg)=>{
    toast(`✅ ${msg}`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }

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
                notify(Error.response.data.message);
            })
        }
    },[cart])

    function cleanCart(){
        swal({
            title: "Você quer limpar o carrinho 🤔?",
            text: "Tem certeza mesmo? =(",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                if(token){
                    const promise = axios.delete(`https://boomka.herokuapp.com/carrinho`,{
                        headers:{
                            Authorization:`Bearer ${token}`
                        }
                    });
    
                    promise.then(()=>{
                        return notify2('Carrinho limpo!');
                    });
    
                    promise.catch(Error => {
                        return notify(Error.response.data.message);
                    })
                }else{
                    setCart([]);
                }
        }else{
              swal("Seu carrinho segue firme e forte!");
            }
          });
    
        return;
    }

    return(
        <Container visibility={cart.length===0}>
            <div className="bar"></div>
            <header>
                <div>
                    <IoClose size={30} color={'#ffffff'} onClick={()=>navigate(-1)}/>
                    <h2>Carrinho</h2>
                </div>
                <Link to="/pedido" style={{textDecoration:"none"}}>
                    <h3>Finalizar</h3>
                </Link>
            </header>
            <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={true}
            limit={1}
            />
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