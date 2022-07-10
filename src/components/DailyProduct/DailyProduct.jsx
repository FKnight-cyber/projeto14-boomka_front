import Container from "./DailyProduct.js";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function DailyProduct(){
    const [products,setProducts] = useState([]);
  
    useEffect(()=>{
        const promise = axios.get("https://boomka.herokuapp.com/daily");

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
            </Container>
        </Link> 
        )
    );
}