import styled from "styled-components";
import axios from 'axios'
import { IoMenuOutline,IoCart,IoSearchOutline,IoHeart,IoCheckmarkCircleSharp,IoSadOutline } from "react-icons/io5";
import logo from "../assets/kbum3logo.png";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

export default function Produto(){
    const [produto,setProduto] = useState('');

    const {id} = useParams();

    useEffect(()=>{
        const promise = axios.get(`http://localhost:5000/produtos/${id}`);

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

const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
`

const Header = styled.div`
    width: 100%;
    height: 100px;
    background-color: #333333;
    padding: 8px;

    > * {
        &:first-child{
            display: flex;
            justify-content: space-between;

            img{
                height: 40px;
                width: 40px;
            }
        }
    }

    > * {
        &:nth-child(2){
            display: flex;
            justify-content: space-between;
            align-items: center;

            input{
                width: 70%;
                height: 36px;
                border-radius: 6px;
                padding-left: 8px;
                margin-left: 8px;
            }
        }
    }
`

const Footer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    background-color: #333333;
    position: fixed;
    font-size: 20px;
    bottom: 0;

    h1{
        color: #ffffff;
    }

    h2{
        margin-top: 4px;
        color:#E6600D;
    }

    .estoque,.comprar{
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const Content = styled.div`
padding: 10px;
    h6{
        display: flex;
        align-items: center;
        width: 100%;
        height: 30px;
        color: #4897E3;
        background-color: #F9F9F9;
    }

    > * {
        &:nth-child(2){
            margin-top: 4px;
            .title{
                background-color: #ffffff;
                h1{
                    font-size: 20px;
                    font-weight: bolder;
                    color: #000000;
                }
            }

            .description{
                margin-top: 10px;
                font-size: 16px;
                word-wrap: break-word;
            }

            .offer{
                display: flex;
                justify-content: flex-end;
            }

            .images{
                display: flex;
                justify-content: center;
                align-items: center;

                img{
                    width: 200px;
                    height: 160px;
                }
            }

            .availability{
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 360px;
                height: 50px;

                h3{
                    color:darkgray;
                }

                h4{
                    color: ${props=>props.changeColor ? 'red' : '#E6600D'};
                    font-weight: bolder;
                }
            }

            .bar{
                height: 20px;
                width: 2px;
                background-color: #cccccc;
            }

            .price{
                display: flex;
                width: 100%;
                font-size: 20px;

                .first{
                    width: 320px;
                }

                .originalprice{
                    display: flex;

                    h2{
                        color: lightgray;
                        margin-bottom: 30px;
                    }

                    h4{
                        font-size: 20px;
                        color: #BBBBBD;
                        text-decoration: line-through;
                        margin-left: 4px;
                    }
                }

                strong{
                    font-size: 22px;
                    font-weight: bolder;
                }

                h3{
                    color:#E6600D;
                }

                > * {
                    &:last-child{
                        display: flex;
                        justify-content: flex-end;
                        align-items: flex-end;
                        width: 100%;
                        font-size: 12px;
                        
                        h6{
                            color: #000000;
                        }

                        strong{
                            font-size: 14px;
                            color: #E6600D;
                            margin-right: 4px;
                        }
                        
                    }
                }
            }
        }
    }
`