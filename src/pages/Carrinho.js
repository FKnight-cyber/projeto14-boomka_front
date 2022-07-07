import styled from "styled-components";
import { IoClose } from "react-icons/io5";

export default function Carrinho(){
    return(
        <Container>
            <header>
                <div>
                    <IoClose size={30} color={'#ffffff'} />
                    <h2>Carrinho</h2>
                </div>
                <h3>Finalizar</h3>
            </header>
        </Container>
    )
}

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #F2F3F4;
    
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 60px;
        background-color: #1960B1;
        padding-left:10px;
        padding-right: 16px;
        color: #ffffff;

        div{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 120px;
            height: 40px;

            h2{
                font-size: 18px;
                font-weight: bolder;
            }
        }
    }
`