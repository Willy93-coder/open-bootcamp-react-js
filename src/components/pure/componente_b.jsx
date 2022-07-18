import React, { useState } from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";

const ComponenteB = ({ contact }) => {
    const [connection, setConnection] = useState(contact.connected);

    const changeConnection = () => {
        setConnection(!connection);
    };

    return (
        <div>
            <h2>Nombre: {contact.name}</h2>
            <h3>Apellido: {contact.surname}</h3>
            <h4>Email: {contact.email}</h4>
            <h5>Conexión: {connection ? "Línea" : "Desconectado"}</h5>
            <button onClick={changeConnection}>Cambiar estado conexión</button>
        </div>
    );
};

ComponenteB.propTypes = {
    contact: PropTypes.instanceOf(Contact),
};

export default ComponenteB;
