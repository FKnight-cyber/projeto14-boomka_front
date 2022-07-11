import axios from 'axios';
import { IoMenuOutline,IoCart,IoArrowBack,
IoCheckmarkCircleSharp,IoSadOutline,IoPerson,IoPeople } from "react-icons/io5";
import logo from "../../assets/bomb.png";
import { useEffect, useState,useContext } from "react";
import { useParams,useNavigate, Link } from 'react-router-dom';
import { Container,Header,Footer,Content } from './Produto.js';
import UserContext from '../../contexts/UserContext';
import { Menu } from '../Home/Home.js';
import { toast,ToastContainer } from "react-toastify";

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

export default function Produto(){
    const [produto,setProduto] = useState('');
    const [opened,setOpened] = useState(false);
    const navigate = useNavigate();
    const { cart,setCart,token } = useContext(UserContext);

    const {id} = useParams();

    useEffect(()=>{
        const promise = axios.get(`https://boomka.herokuapp.com/produtos/${id}`);

        promise.then(res => {
            setProduto(res.data);
        })

        promise.catch(Error => {
            alert(Error.response.data);
        })
    },[id])

    function addToCart(produto){
        if(produto.inventory === 0) return notify('Estoque esgotado!');
        if(cart.includes(produto)) return notify('Esse produto já está no carrinho!');
        if(token){

            const body = {
                id
            }

            const promise = axios.post("https://boomka.herokuapp.com/carrinho",body,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });

            promise.then(()=>{
                return notify2('adicionado ao carrinho');
            });

            promise.catch(Error => {
                return notify(Error.response.data.message);
            })
        }else{
            notify2('Produto adicionado ao carrinho');
            setCart([...cart,produto]);
        }
    };

    function toggleMenu(){
        if(opened){
            setOpened(false);
        }else{
            setOpened(true);
        }
    };

    function comprar(){
        if(produto.inventory === 0) return notify("Estoque esgotado!");
        setCart([...cart,produto]);
        navigate("/carrinho");
    }

    return(
        <>
        <Container visibility={opened}>
            <Header>
                <div>
                    <div>
                        <IoMenuOutline size={40} color={'#ffffff'} />
                        <img src={logo} alt="" srcset="" onClick={()=>navigate(-1)} />
                    </div>
                    <Link to="/carrinho" >
                        <IoCart size={30} color={'#ffffff'} />
                    </Link>
                </div>
            </Header>
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
                opened ?
                <Menu>
                    <div>
                        <div>
                            <div>
                                <IoPerson color={'#ffffff'} size={24} />
                            </div>
                            <h1>Olá, faça seu login!</h1>
                        </div>
                        <div>
                            <IoPerson color={'#ffffff'} size={12} />
                            <h1>Minha conta</h1>
                        </div>
                        <div>
                            <IoPeople color={'#ffffff'} size={12} />
                            <h1>Team</h1>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => navigate("/sign-in")}>Login</button>
                        <button onClick={() => navigate("/sign-up")}>Cadastro</button>
                    </div>
                </Menu>
                :
                <Content changeColor={produto.inventory===0}>
                <h6>{produto.department}</h6>
                <div>
                    <div className="title">
                        <h1>{produto.manufacturer}</h1>
                    </div>
                    <div className="description">
                        <h2>{produto.title}</h2>
                    </div>
                    <div className="offer">
                        
                    </div>
                    <div className="images">
                        <img src={produto.image} alt="" srcset="" />
                    </div>
                    <div className="availability">
                        {
                            produto.inventory === 0 ? 
                            <IoSadOutline size={30} color={'red'} />
                            : 
                            <IoCheckmarkCircleSharp size={30} color={'#32CD32'} />
                        }
                        <h3>DISPONIBILIDADE</h3>
                        <div className="bar"></div>
                        <h4>
                            {
                                produto.inventory === 0 ? 'Estoque esgotado!' : 'Imediata, em estoque'
                            }
                        </h4>
                    </div>
                    <div className="price">
                        <div className="first">
                            <div className="originalprice">
                                <h2>De:</h2>
                                <h4>R$ {produto.price}</h4>
                            </div> 
                            <h1>Por: <strong>R$ {parseFloat(produto.price*0.95).toFixed(2)}</strong> ou</h1>
                            <strong><h3>R$ {parseFloat(produto.price*0.9).toFixed(2)}</h3></strong>
                        </div>
                        <div>
                            <h6><strong>à vista no PIX com</strong> 10% de desconto.</h6>
                        </div>
                    </div>
                </div>
            </Content>
            }
            <div className="return" onClick={()=>navigate(-1)}>
                <IoArrowBack size={30} color={'#ffffff'} />
            </div> 
            <div className='carrinho' onClick={()=>addToCart(produto)}>
                <IoCart size={30} color={'#ffffff'} />
            </div>
            <div className='espaço'></div>
            <div className='espaço'></div>
            <div className='espaço'></div>
            <Footer>
                <div className="estoque">
                    <h1>Quantidade</h1>
                    <h2>{produto.inventory}</h2>
                </div>
                <div className="comprar" onClick={comprar}>
                    <h1>Comprar</h1>
                </div>
            </Footer>
        </Container>
        </>
    )
}