import React, { useState } from "react";
import Cuadrado from "../pure/cuadrado";

const ContainerCuadrado = () => {
    const color = {
        red: 0,
        green: 0,
        blue: 0,
    };

    let primerColor = `rgb(${color.red},${color.green},${color.blue})`;
    const [colors, setColors] = useState(primerColor);

    function cambiarColor() {
        color.red = Math.floor(Math.random() * 256);
        color.green = Math.floor(Math.random() * 256);
        color.blue = Math.floor(Math.random() * 256);
        primerColor = `rgb(${color.red},${color.green},${color.blue})`;
        setColors(primerColor);
    }

    return (
        <div>
            <Cuadrado colores={colors} cambiarColor={cambiarColor} />
        </div>
    );
};

export default ContainerCuadrado;
