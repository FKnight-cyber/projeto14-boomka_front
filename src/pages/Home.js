import styled from "styled-components";
import logo from "../assets/kbum3logo.png";
import { IoMenuOutline,IoCart,IoSearchOutline,
IoTimerOutline,IoClose,IoPerson,IoPeople,IoFlash } from "react-icons/io5";
import Timer from "../components/Timer";
import dayjs from "dayjs";
import MonthlyProduct from "../components/MonthlyProduct";
import DailyProduct from "../components/DailyProduct";
import { useState } from "react";
import {slider} from "../components/slideshow";

export default function Home(){
    const [opened,setOpened] = useState(false);

    function toggleMenu(){
        if(opened){
            setOpened(false);
        }else{
            setOpened(true);
        }
    }

    return(
        <Container>
            <Header>
                <div>
                    <img src={logo} alt="podemos alterar esse logo depois!" srcset="" />
                </div>
                <div>
                    <input type="text" placeholder="Busca..." />
                    <IoSearchOutline  style={{transform:'translateX(-0.23in)'}} />
                </div>
                <div>
                    <IoCart size={30} color={'#ffffff'} />
                    {
                        opened ? <IoClose onClick={()=>toggleMenu()} size={30} color={'#ffffff'} />
                        :
                        <IoMenuOutline onClick={()=>toggleMenu()} size={30} color={'#ffffff'} />
                    }
                </div>
            </Header>
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
                        <button>Login</button>
                        <button>Cadastro</button>
                    </div>
                </Menu>
                :
                <Section>
                <Slides>{slider}</Slides>
                <div>
                    <h1>{dayjs().locale('pt-br').format('MMMM')} GAMER</h1>
                    <div>
                        <IoTimerOutline />
                        <Timer/>
                    </div>
                </div>
                <Contents>
                    <Products>
                        <MonthlyProduct></MonthlyProduct>
                    </Products>
                    <Title>
                        <IoFlash size={20} color={'#E65F0D'} />
                        <h1>Acabaram de chegar!</h1>
                    </Title>
                    <Products>
                        <DailyProduct></DailyProduct>
                    </Products>
                </Contents>
            </Section>
            }
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

const Slides = styled.div`

`

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: calc(100vh - 60px);
    background-color: #1960B1;
    padding: 20px 16px 20px 16px;

    > * {
    &:first-child{
        > * {
        &:first-child{
            display: flex;
            align-items: center;
            color: #ffffff;

            > * {
                &:first-child{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    border: 1px solid #ffffff;
                    margin-right: 8px;
                }
            }
        }
    }

    > * {
        &:nth-child(2){
            display: flex;
            justify-content: space-between;
            width: 100px;
            color: #ffffff;
            margin-top: 16px;
            margin-left: 12px;
        }
    }

    > * {
        &:nth-child(3){
            display: flex;
            justify-content: space-between;
            width: 56px;
            color: #ffffff;
            margin-top: 16px;
            margin-left: 12px;
        }
    }
    }
  }

  > * {
    &:last-child{
        display: flex;
        flex-direction: column;

        button{
            height: 40px;
            background-color: #EB881E;
            border: none;
            border-radius: 6px;
            margin-bottom: 6px;
            color: #ffffff;
            font-size: 20px;
        }
    }
  }
`

const Section = styled.div`
    > * {
        &:nth-child(2){
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 40px;
            width: 100%;
            background-color: #E65F0D;
            color:#ffffff;
            padding-left: 20px;
            padding-right: 20px;

            > * {
                &:nth-child(2){
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 110px;
                }
            }
        }
    }
`

const Contents = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FAFAFB;
    width: 100%;
    height: calc(100vh - 260px);
    padding: 20px 16px 20px 16px;
`

const Products = styled.div`
    display: flex;
    overflow-x: scroll;
    scroll-behavior: auto;
`

const Title = styled.div`
    display: flex;
    font-size: 20px;
    color: #000000;
    font-weight: bolder;
    margin-top: 20px;
    margin-bottom: 20px;
`