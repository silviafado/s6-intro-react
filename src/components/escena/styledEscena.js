import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

// Exercise 3: Styling Escena
export const StylesEscena = styled.div`
    border: solid 1px black;
    border-radius: 20px;
    height: 40px;
    margin: 20px;
    text-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 20px;
    @media(max-width:500px){
      height: 80px;
      text-size: 0.7rem;
    }
    &:nth-of-type(${(props) => props.active}) {
        background-color: pink;
    }
`;

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 10px;
    }
`;

export const Button = styled.button`
    background-color: lightgrey;
    text-align: center;
    height: 40px;
    width: 50%;
    cursor: pointer;
    font-size: 1.2rem;
    border: 1px solid grey;
    @media(max-width:500px){
      width: 100%;
      text-size: 1rem;
    }
`;

