import React from "react";
import textos from "./Textos";

/* Exercise 1:
const Escena = _ =>
    <div>El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial</div> */

// Exercise 2:    
export const Escena = _ => {
    return (
        textos.map((text) => (
            <p key={text.id}>{text.text}</p>
        ))
    );
}

export default Escena;