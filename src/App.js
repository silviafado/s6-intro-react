import React, { useState } from 'react';
import Escena from './components/escena/Escena';
import { WelcomeStyles, WelcomeButton, WelcomeImg } from './components/welcome/styledWelcome';
import logo from './assets/img/logo512.png';

const App = _ => {

  // Exercise 5: Implementing conditional render and welcome page
  const [start, setStart] = useState(true);
  const access = () => setStart(false);

  return start ?
    (
      <div>
        <WelcomeStyles>
          <div>Benvinguts a l'aventura interestalar de React</div>
          <WelcomeButton onClick={access}>Iniciar</WelcomeButton>
          <WelcomeImg src={logo} />
        </WelcomeStyles>
      </div>
    ) : (<Escena />)
}

export default App;