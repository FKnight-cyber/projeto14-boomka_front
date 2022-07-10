import Header from "../components/Header"
import styled from "styled-components"

export default function Pedidos () {
    return (
        <>
            <Header />
            <Container >
                <h1>PEDIDOS</h1>
                <h2>Confira os seus pedidos</h2>
                <div>
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
                        <img src="https://thumbs.dreamstime.com/b/televis%C3%A3o-isolada-em-um-fundo-branco-31422643.jpg" alt="" srcset="" />
                    </div>
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