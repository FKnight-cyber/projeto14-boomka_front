import styled from "styled-components";
import logo from "../assets/kbum3logo.png";
import { IoMenuOutline,IoCart,IoSearchOutline } from "react-icons/io5";

export default function Home(){
    return(
        <Container>
            <Header>
                <div>
                    <img src={logo} alt="podemos alterar esse logo depois!" srcset="" />
                </div>
                <div>
                    <input type="text" placeholder="Busca..." />
                    <IoSearchOutline  style={{transform:'translateX(-0.45in)'}} />
                </div>
                <div>
                    <IoCart size={30} color={'#ffffff'} />
                    <IoMenuOutline size={30} color={'#ffffff'} />
                </div>
            </Header>
        </Container>
    )
}

const Container = styled.div`

`

const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: #1960B1;

  > * {
    &:first-child{
        img{
            height: 40px;
            margin-left: 16px;
            margin-right: 30px;
        }
    }
  }

  > * {
    &:nth-child(2){
        input{
            height: 40px;
            width: 230px;
            border: none;
            border-radius: 6px;
        }
    }
  }

  > * {
    &:nth-child(3){
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 70px;
    }
  }
`