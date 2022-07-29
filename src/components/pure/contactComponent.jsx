import React, { useState } from "react";

const ContactComponent = ({ contact, remove, index }) => {
    const [connexion, setConexion] = useState(contact.connected);
    const [display, setDisplay] = useState(false);

    function changeConnexion() {
        setConexion(!connexion);
    }

    function changeDisplay() {
        setDisplay(!display);
    }

    return (
        <div>
            <h2>Contacto nº {index + 1}</h2>
            <button onClick={changeDisplay}>Mostrar contacto</button>
            {display ? (
                <div className="d-flex">
                    <div>
                        <h4>{contact.name}</h4>
                        <h4>{contact.surname}</h4>
                        <p>{contact.email}</p>
                        {connexion ? (
                            <p>
                                Conectado{" "}
                                <span>
                                    <i
                                        className="bi-toggle-on"
                                        onClick={changeConnexion}
                                    ></i>
                                </span>
                            </p>
                        ) : (
                            <p>
                                Desconectado{" "}
                                <span>
                                    <i
                                        className="bi-toggle-off"
                                        onClick={changeConnexion}
                                    ></i>
                                </span>
                            </p>
                        )}
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <i
                            className="bi-trash task-action"
                            onClick={() => remove(contact)}
                        ></i>
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default ContactComponent;
