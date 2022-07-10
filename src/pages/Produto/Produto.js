import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    position: relative;

    .carrinho{
        display: ${props=>props.visibility ? 'none' : 'flex'};
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 60px;
        bottom: 100px;
        right: 10px;
        border-radius: 50%;
        background-color: #32CD32;
        position: fixed;
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
        bottom: 100px;
        left: 20px;
    }

    .espaço{
        height: 70px;
    }
`

export const Header = styled.div`
    width: 100%;
    height: 60px;
    background-color: #333333;
    padding: 8px;

    > * {
        &:first-child{
            display: flex;
            justify-content: space-between;

            img{
                height: 40px;
                width: 40px;
            }
        }
    }

    > * {
        &:nth-child(2){
            display: flex;
            justify-content: space-between;
            align-items: center;

            input{
                width: 70%;
                height: 36px;
                border-radius: 6px;
                padding-left: 8px;
                margin-left: 8px;
            }
        }
    }
`

export const Footer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    background-color: #333333;
    position: fixed;
    font-size: 20px;
    margin-top: 100px;
    bottom: 0;

    h1{
        color: #ffffff;
    }

    h2{
        margin-top: 4px;
        color:#E6600D;
    }

    .estoque,.comprar{
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const Content = styled.div`
padding: 10px;
    h6{
        display: flex;
        align-items: center;
        width: 100%;
        height: 30px;
        color: #4897E3;
        background-color: #F9F9F9;
    }

    > * {
        &:nth-child(2){
            margin-top: 4px;
            .title{
                background-color: #ffffff;
                h1{
                    font-size: 20px;
                    font-weight: bolder;
                    color: #000000;
                }
            }

            .description{
                margin-top: 10px;
                font-size: 16px;
                word-wrap: break-word;
            }

            .offer{
                display: flex;
                justify-content: flex-end;
            }

            .images{
                display: flex;
                justify-content: center;
                align-items: center;

                img{
                    width: 200px;
                    height: 160px;
                }
            }

            .availability{
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 340px;
                height: 50px;

                h3{
                    color:darkgray;
                }

                h4{
                    color: ${props=>props.changeColor ? 'crimson' : '#32CD32'};
                    font-weight: bolder;
                }
            }

            .bar{
                height: 20px;
                width: 2px;
                background-color: #cccccc;
            }

            .price{
                display: flex;
                width: 100%;
                font-size: 20px;

                .first{
                    width: 320px;
                }

                .originalprice{
                    display: flex;

                    h2{
                        color: lightgray;
                        margin-bottom: 30px;
                    }

                    h4{
                        font-size: 20px;
                        color: #BBBBBD;
                        text-decoration: line-through;
                        margin-left: 4px;
                    }
                }

                strong{
                    font-size: 22px;
                    font-weight: bolder;
                }

                h3{
                    color:#32CD32;
                }

                > * {
                    &:last-child{
                        display: flex;
                        justify-content: flex-end;
                        align-items: flex-end;
                        width: 100%;
                        font-size: 12px;
                        
                        h6{
                            color: #000000;
                        }

                        strong{
                            font-size: 14px;
                            color: #32CD32;
                            margin-right: 4px;
                        }
                        
                    }
                }
            }
        }
    }

`