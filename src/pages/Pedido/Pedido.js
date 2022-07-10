import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background-color: #cccccc;
    position: relative;

    .return{
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        background-color: green;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        bottom: 20px;
        right: 20px;
    }

    .pixkey{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 40%;
        height: 70px;
        background-color: crimson;
        margin-top: 10px;
        border-radius: 8px;

        h1{
            margin-bottom: 4px;
            color: #ffffff;
            font-size: 20px;
            font-weight: bolder;
        }

        input{
            width: 70%;
            height: 30px;
            border: none;
            border-radius: 6px;
            padding-left: 4px;
        }
    }

    header{
        width: 100%;
        height: 80px;
        background-color: #333333;
        padding: 10px;

        img{
            width: 50px;
            height: 50px;
        }
    }

    .content{
        padding: 12px;
        .title{
            display: flex;
            align-items: center;

            h1{
                margin-left: 6px;
                font-size: 16px;
                font-weight: bolder;
                color: crimson;
            }
        }

        .pixbox,.boletobox,.cardbox{
            display: flex;
            height: 50px;
            width: 100%;
            margin-top: 20px;
            justify-content: space-between;
            align-items: center;

            h2{
                text-align: center;
                color: crimson;
                margin-left: 12px;
            }
        }

        .pix,.boleto,.card{
            min-width: 180px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: crimson;
            border-radius: 6px;

            .pixlogo{
                width: 30px;
                height: 30px;
            }

            h1{
                font-size: 16px;
                font-weight: bolder;
                margin-left: 6px;
                color: #ffffff;
            }
        }
    }

    .totalcompra{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 90px;
        width: 60%;
        margin-top: 60px;
        background-color: crimson;
        color: #ffffff;
        border-radius: 10px;
        font-size: 20px;

        h2{
            font-weight: bolder;
            margin-top: 4px;
        }
    }

    .totalcompra.metodo2{
        margin-top: 20px;
    }

    .retornar{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 300px;
        height: 40px;
        margin-top: 60px;
        background-color: #32CD32;
        color: #ffffff;
        font-weight: bolder;
        font-size: 20px;
        border-radius: 6px;
    }
`