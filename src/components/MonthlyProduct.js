import Timer from "./Timer";
import styled from "styled-components";
import axios from "axios";
import { IoTimerOutline,IoHeart } from "react-icons/io5";
import { useEffect, useState } from "react";
export default function MonthlyProduct(){
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        const promise = axios.get("http://localhost:5000");

        promise.then(res => {
            console.log(res.data)
            setProducts(res.data);
        })

        promise.catch(Error => {
            alert(Error.response.data)
        })
    },[])

    return(
        products.map((product,index) => 
            <Container key={index}>
            <div>
                <IoHeart color={'red'} size={20} />
            </div>
            <div>
                <img src={product.image} alt="" srcset="" />
                <div>
                    <h1>{product.title}</h1>
                    <h2>R$ {product.preço}</h2>
                    <h3>R$ {product.preço*0.85}</h3>
                    <h4>À vista no PIX</h4>
                </div>
            </div>
            <div>
                <IoTimerOutline color={'#ffffff'} />
                <div>
                    <h1>Termina em</h1>
                    <Timer/>
                </div>
            </div>
        </Container>
        )
    );
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    min-width: 300px;
    height: 200px;
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

  > * {
        &:nth-child(3){
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: 1px solid #E65F0D;

            > * {
                &:first-child{
                    display: flex;
                    width: 60px;
                    height: 40px;
                    justify-content: center;
                    align-items: center;
                    background-color: #E65F0D;
                }
            }

            > * {
                &:nth-child(2){
                    width: 100%;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    color: #E65F0D;
                }
            }
        }
    }
`