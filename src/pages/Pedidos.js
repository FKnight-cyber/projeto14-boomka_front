import Header from "../components/Header/Header.jsx";
import styled from "styled-components"
import { useContext, useEffect, useState } from "react"
import axios from 'axios'
import UserContext from "../contexts/UserContext"

export default function Pedidos(){
  const [data, setData] = useState([])
    const {token} = useContext(UserContext);
    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.get('https://boomka.herokuapp.com/myproducts', config);
        promise.then((res) => setData(res.data))
    }, [])
    console.log(data)
    return (
        <>
            <Header />
            <Container >
                <h1>PEDIDOS</h1>
                <h2>Confira os seus pedidos</h2>
                <div>
                    {data.length < 0 ? <></>
                    :
                    <>
                    <div className="box">
                        <div>
                            <h3>N do pedido</h3>
                            <h4>2988788898</h4>
                        </div>
                        <div>
                            <h3>Realizado em:</h3>
                            <h4>09/07/2022</h4>
                        </div>
                    </div>
                    <div className="pedido">
                        <img src={data.image} alt="" srcset="" />
                    </div>
                    </>}
                    
                </div>

                
                
            </Container>
        </>
    )
}
const Container = styled.div `
    > div {
        border: 1px gray solid
    }
    padding: 10px;
    display:flex;
    flex-direction:column;
    gap: 5px;
    h1 {
        color: orange;
        font-weight: 700;
    }
    h2 {
        color: black;
    }
    .box {
        display: flex;
        justify-content: space-between;
        background-color: gray;
        padding: 10px;
    }
    .pedido {
        
        height: 100px;
        display: flex;
        align-items:center;
        justify-content:center;
        img {
            height: 80px;
            width: 80px;
        }
    }
`
