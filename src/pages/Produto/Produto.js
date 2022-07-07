import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
`

export const Header = styled.div`
    width: 100%;
    height: 100px;
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
                width: 360px;
                height: 50px;

                h3{
                    color:darkgray;
                }

                h4{
                    color: ${props=>props.changeColor ? 'red' : '#E6600D'};
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
                    color:#E6600D;
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
                            color: #E6600D;
                            margin-right: 4px;
                        }
                        
                    }
                }
            }
        }
    }
`