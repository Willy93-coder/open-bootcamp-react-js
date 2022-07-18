import React, { useState } from "react";

const GreetingF = (props) => {
    // Breve introducción a useState
    // const [variable, método para actualizarlo] = useState (valor inicial)
    const [age, setAge] = useState(29);

    const birthday = () => {
        // Actualizamos el State
        setAge(age + 1);
    };
    return (
        <div>
            <h1>¡HOLA {props.name} desde componente funcional!</h1>
            <h2>Tu edad es de: {age}</h2>
            <button onClick={birthday}>Cumplir años</button>
        </div>
    );
};

export default GreetingF;
