import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    min-width: 300px;
    max-width: 300px;
    height: 200px;
    background-color: #ffffff;
    margin-right: 10px;
    padding: 8px;

    > * {
        &:first-child{
            display: flex;
            justify-content: flex-end;
        }
    }

    > * {
    &:nth-child(2){
        display: flex;

        img{
            height: 90px;
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
                    min-width: 100px;
                    max-width: calc(26%);
                    text-overflow: ellipsis;
                    margin-bottom: 8px;
                    font-weight: bolder;
                    color: #000000;
                }

                h2{
                    color: lightgray;
                    text-decoration: line-through;
                }

                h3{
                    color: #241571;
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
            border: 1px solid #241571;

            > * {
                &:first-child{
                    display: flex;
                    width: 60px;
                    height: 40px;
                    justify-content: center;
                    align-items: center;
                    background-color: #241571;
                }
            }

            > * {
                &:nth-child(2){
                    width: 100%;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    color: #241571;
                }
            }
        }
    }
`

export default Container;