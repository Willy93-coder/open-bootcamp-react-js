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
    const [timer, setTimer] = useState();

    function cambiarColor() {
        color.red = Math.floor(Math.random() * 256);
        color.green = Math.floor(Math.random() * 256);
        color.blue = Math.floor(Math.random() * 256);
        primerColor = `rgb(${color.red},${color.green},${color.blue})`;

        setColors(primerColor);
    }

    function cambiarColorAuto() {
        if (!timer) setTimer(setInterval(cambiarColor, 1000));
    }

    function stopCambioColor() {
        clearInterval(timer);
        setTimer(null);
    }

    return (
        <div>
            <Cuadrado
                colores={colors}
                cambiarColor={cambiarColorAuto}
                stopColor={stopCambioColor}
            />
        </div>
    );
};

export default ContainerCuadrado;
