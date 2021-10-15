import React, { useState } from 'react';
import texts from "../../Texts";
import { StylesEscena } from "./styledEscena";
import { GlobalStyle, Button } from './styledEscena';

/* Exercise 1:
const Escena = _ =>
    <div>El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial</div> */

export const Escena = _ => {

    // Exercise 4: Previous - Next buttons functionality
    const [idActive, setActive] = useState(1);
    const prevText = () => setActive(idActive - 1);
    const nextText = () => setActive(idActive + 1);
    console.log(idActive);

    // Exercise 2: Creating text elements with props
    const textElements = texts.map((text) => (
        <StylesEscena active={idActive} key={text.id}>{text.text}</StylesEscena>
    ))

    return (
        <div>
            <GlobalStyle />
            <Button onClick={prevText} disabled={idActive <= 1}>Anterior</Button>
            <Button onClick={nextText} disabled={idActive >= texts.length}>Següent</Button>
            {textElements}
        </div>
    );
}

export default Escena;