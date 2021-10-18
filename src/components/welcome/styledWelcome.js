import styled, { keyframes } from "styled-components";

// Exercise 5: Styling Welcome component
export const WelcomeStyles = styled.div`
    font-size: 3rem;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: #282c34;
    width: 100vw;
    height: 100vh;
    padding-top: 100px;
    text-align: center;
`;

export const WelcomeButton = styled.button`
    background-color: lightgrey;
    text-align: center;
    height: 40px;
    border-radius: 20px;
    width: 200px;
    cursor: pointer;
    font-size: 1rem;
    border: 1px solid grey;
    margin-top: 20px;
    @media(max-width:500px){
      width: 60%;
    }
`;

const AppSpin = keyframes` 
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const WelcomeImg = styled.img`
    padding-top: 60px;
    text-align: center;
    animation: ${AppSpin} infinite 20s linear;
    @media(max-width:900px){
      width: 60%;
    }
`