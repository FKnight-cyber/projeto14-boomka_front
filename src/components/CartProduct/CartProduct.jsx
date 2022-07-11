import { IoTrash } from "react-icons/io5";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";
import axios from "axios";
import { toast,ToastContainer } from "react-toastify";
import { Container } from "./CartProduct";

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
                return notify2('Produto removido do carrinho');
            });

            promise.catch(Error => {
                return notify(Error.response.data.message);
            })
        }else{
            const newCart = [...cart];
            newCart.splice(index,1);
            setCart([...newCart]);
            notify2('Produto removido do carrinho');
        }
    }
    return(
        cart.map((product,index) => 
        <Container key={index}>
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

