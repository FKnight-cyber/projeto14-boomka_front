import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 90%;
    height: 170px;
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: 20px;
    padding: 8px;
    border-radius:8px;
    background-color: #ffffff;
    position: relative;
    
    img{
        width: 80px;
        height: 100px;
    }

    .titleproduct{
        display: inline-block;
        flex-direction: column;
        word-wrap: break-word;
        margin-top: 0;
        margin-left: 12px;
        padding-top: 0;
        padding-bottom: 0;

        h3{
            font-weight: bolder;
            margin-bottom: 4px;
        }

        h4{
            margin-bottom: 6px;
        }

        h5{
            color: #589A0F;
            font-weight: bolder;
        }

        .remover{
            display: flex;
            justify-content: center;
            position: absolute;
            width: 140px;
            right: 0;
            bottom: 20px;
        }
    }
`