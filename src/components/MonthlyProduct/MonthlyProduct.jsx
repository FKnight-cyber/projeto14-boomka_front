import Timer from "../Timer";
import axios from "axios";
import { IoTimerOutline,IoHeart } from "react-icons/io5";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "./MonthlyProduct.js";

export default function MonthlyProduct(){
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        const promise = axios.get("https://boomka.herokuapp.com/monthly");

        promise.then(res => {
            setProducts(res.data);
        })

        promise.catch(Error => {
            alert(Error.response.data)
        })
    },[])

    return(
        products.map((product,index) => 
        <Link key={index} to={`produtos/${product.id}`} style={{textDecoration:'none'}} >
            <Container>
                <div>
                    <IoHeart color={'red'} size={20} />
                </div>
                <div>
                    <img src={product.image} alt="" srcset="" />
                    <div>
                        <h1>{product.title}</h1>
                        <h2>R$ {product.price}</h2>
                        <h3>R$ {parseFloat(product.price*0.85).toFixed(2)}</h3>
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
        )
    );
}