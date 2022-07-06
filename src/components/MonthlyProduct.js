import Timer from "./Timer";
import styled from "styled-components";
import { IoTimerOutline,IoHeart } from "react-icons/io5";
export default function MonthlyProduct(){
    return(
        <>
        <Container>
            <div>
                <IoHeart color={'red'} size={20} />
            </div>
            <div>
                <img src="https://images7.kabum.com.br/produtos/fotos/85197/85197_index_m.jpg" alt="" srcset="" />
                <div>
                    <h1>SSD Kingston A400, 240GB, SATA, Leitura 500MB/s, Gravação 350MB/s - SA400S37/240G</h1>
                    <h2>R$ 352,82</h2>
                    <h3>R$ 179,90</h3>
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
        <Container>
            <div>
                <IoHeart color={'red'} size={20} />
            </div>
            <div>
                <img src="https://images7.kabum.com.br/produtos/fotos/85197/85197_index_m.jpg" alt="" srcset="" />
                <div>
                    <h1>SSD Kingston A400, 240GB, SATA, Leitura 500MB/s, Gravação 350MB/s - SA400S37/240G</h1>
                    <h2>R$ 352,82</h2>
                    <h3>R$ 179,90</h3>
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
        <Container>
            <div>
                <IoHeart color={'red'} size={20} />
            </div>
            <div>
                <img src="https://images7.kabum.com.br/produtos/fotos/85197/85197_index_m.jpg" alt="" srcset="" />
                <div>
                    <h1>SSD Kingston A400, 240GB, SATA, Leitura 500MB/s, Gravação 350MB/s - SA400S37/240G</h1>
                    <h2>R$ 352,82</h2>
                    <h3>R$ 179,90</h3>
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
        <Container>
            <div>
                <IoHeart color={'red'} size={20} />
            </div>
            <div>
                <img src="https://images7.kabum.com.br/produtos/fotos/85197/85197_index_m.jpg" alt="" srcset="" />
                <div>
                    <h1>SSD Kingston A400, 240GB, SATA, Leitura 500MB/s, Gravação 350MB/s - SA400S37/240G</h1>
                    <h2>R$ 352,82</h2>
                    <h3>R$ 179,90</h3>
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
        </>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 200px;
    background-color: #ffffff;
    margin-right: 10px;
    padding: 8px;

    > * {
        &:first-child{
            display: flex;
            height: 40px;
            justify-content: flex-end;
        }
    }

    > * {
    &:nth-child(2){
        display: flex;

        img{
            height: 100px;
            width: 120px;
            margin-right: 8px;
        }

        > * {
            &:nth-child(2){
                h1{
                    flex-wrap: wrap;
                    display: inline-block;
                    overflow:hidden;
                    white-space:nowrap;
                    width: calc(26%);
                    text-overflow: ellipsis;
                    margin-bottom: 8px;
                    font-weight: bolder;
                }

                h2{
                    color: lightgray;
                    text-decoration: line-through;
                }

                h3{
                    color: #E65F0D;
                    font-weight: bolder;
                }

                h4{
                    color: lightgray;
                }
            }
        }
    }
  }

  > * {
        &:nth-child(3){
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: 1px solid #E65F0D;

            > * {
                &:first-child{
                    display: flex;
                    width: 60px;
                    height: 40px;
                    justify-content: center;
                    align-items: center;
                    background-color: #E65F0D;
                }
            }

            > * {
                &:nth-child(2){
                    width: 100%;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    color: #E65F0D;
                }
            }
        }
    }
`