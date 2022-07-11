import logo from "../../assets/bomb.png";
import { IoMenuOutline,IoCart,
IoTimerOutline,IoClose,IoPerson,IoPeople,IoFlash } from "react-icons/io5";
import Timer from "../../components/Timer.js";
import dayjs from "dayjs";
import MonthlyProduct from "../../components/MonthlyProduct/MonthlyProduct.jsx";
import DailyProduct from "../../components/DailyProduct/DailyProduct.jsx";
import { useState,useEffect } from "react";
import {slider} from "../../components/slideshow.js";
import { Container,Header,Slides,Menu,Section,Contents,Products,Title } from "./Home.js";
import { Link,useNavigate } from "react-router-dom";
import { ReactScrolling } from 'react-auto-glide';
import 'react-auto-glide/dist/index.css';
import axios from "axios";

export default function Home(){
    const [opened,setOpened] = useState(false);
    const [productsMonthly,setProductsMonthly] = useState([]);
    const [productsDaily,setProductsDaily] = useState([]);
    const navigate = useNavigate();

    function toggleMenu(){
        if(opened){
            setOpened(false);
        }else{
            setOpened(true);
        }
    }

     useEffect(() => {
        const promise = axios.get("https://boomka.herokuapp.com/monthly");

        promise.then(res => {
            setProductsMonthly(res.data);
        })

        promise.catch(Error => {
            alert(Error.response.data)
        })

        const promise2 = axios.get("https://boomka.herokuapp.com/daily");

        promise2.then(res => {
            setProductsDaily(res.data);
        })

        promise2.catch(Error => {
            alert(Error.response.data)
        })
    },[])
   
    const mapper = ({price,id,image,title}) => <MonthlyProduct price={price} id={id} image={image} title={title} />;
    const mapperDaily = ({price,id,image,title}) => <DailyProduct price={price} id={id} image={image} title={title} />;
    
    return(
        <Container>
            <Header>
                <div>
                    <img src={logo} alt="podemos alterar esse logo depois!" srcset="" />
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
                            <h1 onClick={() => navigate("/account")}>Minha conta</h1>
                        </div>
                        <div>
                            <IoPeople color={'#ffffff'} size={12} />
                            <h1>Team</h1>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => navigate("/sign-in")}>Login</button>
                        <button onClick={() => navigate("/sign-up")}>Cadastro</button>
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
                        {productsMonthly.length ? <ReactScrolling time={'10s'} width={'320px'} mapper={mapper} list={productsMonthly} /> : ''}
                    </Products>
                    <Title>
                        <IoFlash size={20} color={'crimson'} />
                        <h1>Acabaram de chegar!</h1>
                    </Title>
                    <Products>
                        {productsDaily.length ? <ReactScrolling time={'10s'} width={'320px'} mapper={mapperDaily} list={productsDaily} /> : ''}
                    </Products>
                </Contents>
            </Section>
            }
        </Container>
    )
}