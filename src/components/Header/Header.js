import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: #333333;
    padding-right: 10px;
    position: absolute;
    top:0;

  > * {
    &:first-child{
        img{
            height: 40px;
            margin-left: 16px;
            margin-right: 30px;
        }
    }
  }

  > * {
    &:nth-child(2){
        input{
            height: 40px;
            width: 230px;
            border: none;
            border-radius: 6px;
        }
    }
  }

  > * {
    &:nth-child(3){
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 70px;
    }
  }
`