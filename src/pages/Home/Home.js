import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: calc(100vh + 100px);
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: #333333;
    padding-right: 10px;

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

export const Slides = styled.div`

`

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: calc(100vh - 60px);
    background-color: #333333;
    padding: 20px 16px 20px 16px;

    > * {
    &:first-child{
        > * {
        &:first-child{
            display: flex;
            align-items: center;
            color: #ffffff;

            > * {
                &:first-child{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    border: 1px solid #ffffff;
                    margin-right: 8px;
                }
            }
        }
    }

    > * {
        &:nth-child(2){
            display: flex;
            justify-content: space-between;
            width: 100px;
            color: #ffffff;
            margin-top: 16px;
            margin-left: 12px;
        }
    }

    > * {
        &:nth-child(3){
            display: flex;
            justify-content: space-between;
            width: 56px;
            color: #ffffff;
            margin-top: 16px;
            margin-left: 12px;
        }
    }
    }
  }

  > * {
    &:last-child{
        display: flex;
        flex-direction: column;

        button{
            height: 40px;
            background-color: crimson;
            border: none;
            border-radius: 6px;
            margin-bottom: 6px;
            color: #ffffff;
            font-size: 20px;
        }
    }
  }
`

export const Section = styled.div`
    > * {
        &:nth-child(2){
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 40px;
            width: 100%;
            background-color: #241571;
            color:#ffffff;
            padding-left: 20px;
            padding-right: 20px;

            > * {
                &:nth-child(2){
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
            }
        }
    }
`

export const Contents = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FAFAFB;
    height: calc(100vh - 260px);
    padding: 20px 16px 20px 16px;
`

export const Products = styled.div`
    display: flex;
    overflow-x: scroll;
`

export const Title = styled.div`
    display: flex;
    font-size: 20px;
    color: #000000;
    font-weight: bolder;
    margin-top: 20px;
    margin-bottom: 20px;
`

