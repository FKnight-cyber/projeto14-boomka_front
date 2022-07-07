import logo from "../../assets/kbum3logo.png";
import { IoMenuOutline,IoCart,IoSearchOutline,
IoTimerOutline,IoClose,IoPerson,IoPeople,IoFlash } from "react-icons/io5";
import Timer from "../../components/Timer.js";
import dayjs from "dayjs";
import MonthlyProduct from "../../components/MonthlyProduct/MonthlyProduct.jsx";
import DailyProduct from "../../components/DailyProduct/DailyProduct.jsx";
import { useState } from "react";
import {slider} from "../../components/slideshow.js";
import { Container,Header,Slides,Menu,Section,Contents,Products,Title } from "./Home.js";

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