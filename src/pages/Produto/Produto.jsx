import axios from 'axios'
import { IoMenuOutline,IoCart,IoSearchOutline,IoHeart,
IoCheckmarkCircleSharp,IoSadOutline } from "react-icons/io5";
import logo from "../../assets/kbum3logo.png";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Container,Header,Footer,Content } from './Produto.js';

export default function Produto(){
    const [produto,setProduto] = useState('');

    const {id} = useParams();

    useEffect(()=>{
        const promise = axios.get(`https://boomka.herokuapp.com/produtos/${id}`);

        promise.then(res => {
            console.log(produto)
            setProduto(res.data);
        })

        promise.catch(Error => {
            alert(Error.response.data);
        })
    },[])

    return(
        <Container>
            <Header>
                <div>
                    <div>
                        <IoMenuOutline size={40} color={'#ffffff'} />
                        <img src={logo} alt="" srcset="" />
                    </div>
                    <IoCart size={30} color={'#ffffff'} />
                </div>
                <div>
                    <input type="text" placeholder="O que você está procurando?" />
                    <IoSearchOutline size={20} color={'#ffffff'} />
                </div>
            </Header>
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
                        <IoHeart color={'#cccccc'} size={26} />
                    </div>
                    <div className="images">
                        <img src={produto.image} alt="" srcset="" />
                    </div>
                    <div className="availability">
                        {
                            produto.inventory === 0 ? 
                            <IoSadOutline size={30} color={'red'} />
                            : 
                            <IoCheckmarkCircleSharp size={30} color={'#E6600D'} />
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
            <Footer>
                <div className="estoque">
                    <h1>Quantidade</h1>
                    <h2>{produto.inventory}</h2>
                </div>
                <div className="comprar">
                    <h1>Comprar</h1>
                </div>
            </Footer>
        </Container>
    )
}