import React from "react";

const Cuadrado = ({ colores, cambiarColor }) => {
    return (
        <div>
            <div
                style={{
                    height: "255px",
                    width: "255px",
                    backgroundColor: `${colores}`,
                }}
                onMouseOver={cambiarColor}
            ></div>
        </div>
    );
};

export default Cuadrado;
