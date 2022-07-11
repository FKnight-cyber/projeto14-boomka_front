import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: calc(100vh + 100px);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F2F3F4;
    position: relative;

    .bar{
        height: 60px;
    }
    
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 60px;
        background-color: #333333;
        padding-left:10px;
        padding-right: 16px;
        color: #ffffff;
        position: fixed;
        z-index: 1;
        top:0;

        div{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 120px;
            height: 40px;

            h2{
                font-size: 18px;
                font-weight: bolder;
            }
        }

        h3{
            color: #ffffff;
        }
    }

    .vazio{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        font-size: 20px;
        color:crimson;

        h1{
            margin-left: 6px;
        }
    }

    .continue{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 60%;
        height: 60px;
        margin-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        border-radius: 6px;
        background-color: crimson;
        font-size: 20px;
        color: #ffffff;

        @media (min-width:600px) {
            margin-top: 20px;
            justify-content: center;
        }
    }

    .continue.compra{
        display: ${props => props.visibility ? 'none' : 'flex'};
        justify-content: center;
    }

    .title{
        display: flex;
        justify-content: space-between;
        background-color: #ffffff;
        width: 100%;
        height: 70px;
        padding: 10px;
        margin-top: 20px;
        border-radius: 8px;

        .title1{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100px;
            height: 30px;

            h1{
                margin-left: 4px;
            }
        }

        .removeall{
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid red;
            border-radius: 4px;
            width: 60%;
            height: 30px;

            h1{
                color: red;
            }
        }
    }

    .return{
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        background-color: #32CD32;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        bottom: 20px;
        left: 20px;
    }
`