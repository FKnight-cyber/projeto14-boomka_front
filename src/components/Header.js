import styled from "styled-components";
import { IoMenuOutline,IoCart,IoSearchOutline,IoClose } from "react-icons/io5";
import logo from '../assets/bomb.png';
import { Link } from "react-router-dom";
export default function Header ({opened,setOpened}) {

    function toggleMenu(){
        if(opened){
            setOpened(false);
        }else{
            setOpened(true);
        }
    }
    return (
        
            <Container>
                <div>
                    <Link to="/" styled={{textDecoration:'none'}}>
                        <img src={logo} alt="podemos alterar esse logo depois!" srcset="" />
                    </Link>
                </div>
                <div>
                    <input type="text" placeholder="Busca..." />
                    <IoSearchOutline  style={{transform:'translateX(-0.23in)'}} />
                </div>
                <div>
                    <Link to="/carrinho" style={{textDecoration:'none'}}>
                        <IoCart size={30} color={'#ffffff'} />
                    </Link>
                    {
                        opened ? <IoClose onClick={()=>toggleMenu()} size={30} color={'#ffffff'} />
                        :
                        <IoMenuOutline onClick={()=>toggleMenu()} size={30} color={'#ffffff'} />
                    }
                </div>
            </Container>
        
    )
}
const Container = styled.div`
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