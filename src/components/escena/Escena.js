import React from "react";
import texts from "../../Texts";
import { StylesEscena } from "./styledEscena";

/* Exercise 1:
const Escena = _ =>
    <div>El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial</div> */

// Exercise 2:    
export const Escena = _ => {
    return (
        texts.map((text) => (
            <StylesEscena key={text.id}>{text.text}</StylesEscena>
        ))
    );
}

console.log(Escena(texts));

export default Escena;