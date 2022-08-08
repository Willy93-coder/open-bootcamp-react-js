import React from "react";

const Cuadrado = ({ colores, cambiarColor, stopColor }) => {
    return (
        <div>
            <div
                style={{
                    height: "255px",
                    width: "255px",
                    backgroundColor: `${colores}`,
                }}
                onMouseOver={cambiarColor}
                onMouseOut={stopColor}
                onDoubleClick={stopColor}
            ></div>
        </div>
    );
};

export default Cuadrado;
