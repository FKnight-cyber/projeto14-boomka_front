import Timer from "../Timer";
import axios from "axios";
import { IoTimerOutline } from "react-icons/io5";
import { useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import Container from "./MonthlyProduct.js";
import UserContext from "../../contexts/UserContext";

export default function MonthlyProduct({id,image,title,price}){
    return(
        <Link to={`produtos/${id}`} style={{textDecoration:'none'}} >
            <Container>
                <div>
                </div>
                <div>
                    <img src={image} alt="" srcset="" />
                    <div>
                        <h1>{title}</h1>
                        <h2>R$ {price}</h2>
                        <h3>R$ {parseFloat(price*0.85).toFixed(2)}</h3>
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
        </Link>
    );
}