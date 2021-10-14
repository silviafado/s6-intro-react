import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

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
`;

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 10px;
    }
`
