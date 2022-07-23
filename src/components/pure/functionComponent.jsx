import React, { useEffect, useState } from "react";

const FunctionComponent = () => {
    // Creamos el objeto persona
    const person = {
        fecha: new Date(),
        edad: 0,
        nombre: "Martín",
        apellidos: "San José",
    };

    // Creamos el estado privado
    const [age, setAge] = useState(person.edad);

    // Método para cumplir años
    const birthday = () => {
        setAge(age + 1);
        return {
            ...person,
            fecha: new Date(),
            age,
        };
    };

    // Ciclo de vida
    useEffect(() => {
        const timerID = setInterval(() => birthday(), 1000);
        return () => {
            clearInterval(timerID);
        };
    });

    return (
        <div>
            <h2>
                Hora Actual:
                {person.fecha.toLocaleTimeString()}
            </h2>
            <h3>
                {person.nombre} {person.apellidos}
            </h3>
            <h1>Edad: {age}</h1>
        </div>
    );
};

export default FunctionComponent;
