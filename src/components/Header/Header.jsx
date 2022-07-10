import { IoMenuOutline,IoCart,IoClose } from "react-icons/io5";
import logo from "../../assets/bomb.png"
import { Link } from "react-router-dom";
import { Container } from "./Header";

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
