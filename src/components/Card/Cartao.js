import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  background-color: #dddddd;
  height: 100vh;
  width: 100%;

  body {
  font-family: Helvetica, sans-serif;
  font-size: 16px;
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

  a {
    color: #666;
  }

  h1 {
    font-weight: bold;
    margin: 0 0 10px;
  }

  h4 {
    margin-bottom: 30px;
  }

  h1,
  h2,
  h4 {
    text-align: center;
  }

  .App-payment {
    padding: 30px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 30px auto 0;
    max-width: 400px;
  }
  
  small{
    margin-bottom: 6px;
  }

  .form-group{
    input{
      width: 300px;
      height: 40px;
      font-size: 16px;
      margin-bottom: 10px;
    }
  }

  .row{
    width: 300px;
    justify-content: space-between;
    display: flex;
  }

  .col-6{
    input{
      width: 140px;
      height: 40px;
      font-size: 16px;
      margin-bottom: 10px;
    }
  }

  .form-actions {
    margin-top: 15px;
    
    button{
      width: 300px;
      height: 40px;
      border: none;
      background-color: crimson;
      font-size: 26px;
      font-weight: bolder;
      color: #ffffff;
    }
  }

  .form-actions.return{
    button{
      background-color: green;
    }
  }

  .App-cards {
    margin: 0 auto;
    max-width: 1280px;
    text-align: center;
  }

  .App-cards-list {
    display: flex;
    margin-top: 30px;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .App-cards-list > * {
    transform: scale(0.8);
    margin-bottom: 30px !important;
  }

  .App-highlight {
    font-family: serif;
    margin: 15px auto 0;
    max-width: 300px;
  }

  .App-highlight > div {
    padding-left: 40px;
  }

  .App-badges {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .App-badges a {
    display: block;
  }

  .App-badges a + a {
    margin-top: 18px;
  }

  .github__btn {
    align-items: center;
    background-color: #ccc;
    border-radius: 4px;
    color: #444;
    display: flex;
    line-height: 1;
    padding: 8px 12px;
  }

  .github__btn:hover {
    color: #444;
    text-decoration: none;
  }

  .github__btn img {
    display: inline-block;
    height: 28px;
    margin-right: 8px;
  }

  .App-credits {
    background-color: #000;
    color: #fff;
    line-height: 50px;
    text-align: center;
  }

  .App-credits a {
    color: #fff;
    font-weight: bold;
  }

  @media screen and (min-width: 600px) {
    .App-badges {
      flex-direction: row;
    }

    .App-badges a + a {
      margin-top: 0;
      margin-left: 18px;
    }
  }
`
