import React from "react";
import { Contact } from "../../models/contact.class";
import ComponenteB from "../pure/componente_b";

const ComponenteA = () => {
    const contact = new Contact("Willy", "Cifre", "willy@gmail.com", false);

    return (
        <div>
            <h1>Datos del contacto:</h1>
            <ComponenteB contact={contact} />
        </div>
    );
};

export default ComponenteA;
