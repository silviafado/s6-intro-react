import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

// Exercise 3: Styling Escena component
export const StylesEscena = styled.div`
    border: solid 1px black;
    border-radius: 20px;
    height: 40px;
    margin: 20px;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 20px;
    background-color: white;
    @media(max-width:500px){
      height: 80px;
      font-size: 0.9rem;
    }
    &:nth-of-type(${(props) => props.active}) {
        background-color: pink;
    }
`;

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 10px;
        @media(max-width: 1200px){
            height: 100vh;
        }    
        &::after {
            content: "";
            background: url("${(props) => props.img}") no-repeat;
            opacity: 0.8;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            position: absolute;
            z-index: -1;
            background-size: cover;
        }
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
    }
`;