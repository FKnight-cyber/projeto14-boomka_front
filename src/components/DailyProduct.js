import styled from "styled-components";
import axios from "axios";
import { IoHeart } from "react-icons/io5";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function DailyProduct(){
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        const promise = axios.get("http://localhost:5000/daily");

        promise.then(res => {
            setProducts(res.data);
        })

        promise.catch(Error => {
            alert(Error.response.data)
        })
    },[])

    return(
        products.map((product,index) =>
        <Link to={`produtos/${product.id}`} style={{textDecoration:'none'}} >
            <Container key={index}>
                <div>
                    <IoHeart color={'red'} size={20} />
                </div>
                <div>
                    <img src={product.image} alt="" srcset="" />
                    <div>
                        <h1>{product.title}</h1>
                        <h2>R$ {product.price}</h2>
                        <h3>R$ {parseFloat(product.price*0.85).toFixed(2)}</h3>
                        <h4>À vista no PIX</h4>
                    </div>
                </div>
            </Container>
        </Link> 
        )
    );
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    min-width: 300px;
    max-width: 300px;
    height: 140px;
    background-color: #ffffff;
    margin-right: 10px;
    padding: 8px;

    > * {
        &:first-child{
            display: flex;
            justify-content: flex-end;
        }
    }

    > * {
    &:nth-child(2){
        display: flex;

        img{
            height: 90px;
            width: 120px;
            margin-right: 8px;
        }

        > * {
            &:nth-child(2){
                h1{
                    flex-wrap: wrap;
                    display: inline-block;
                    overflow:hidden;
                    white-space:nowrap;
                    min-width: 100px;
                    max-width: calc(26%);
                    text-overflow: ellipsis;
                    margin-bottom: 8px;
                    font-weight: bolder;
                    color: #000000;
                }

                h2{
                    color: lightgray;
                    text-decoration: line-through;
                }

                h3{
                    color: #E65F0D;
                    font-weight: bolder;
                }

                h4{
                    color: lightgray;
                }
            }
        }
    }
  }
`