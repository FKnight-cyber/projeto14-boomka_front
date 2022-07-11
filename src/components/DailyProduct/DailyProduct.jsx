import Container from "./DailyProduct.js";
import { Link } from "react-router-dom";

export default function DailyProduct({id,image,title,price}){
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
            </Container>
        </Link> 
    );
}