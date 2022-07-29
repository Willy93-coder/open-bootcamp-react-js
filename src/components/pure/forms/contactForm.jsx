import React, { useRef } from "react";
import { Contact } from "../../../models/contact.class";

const ContactForm = ({ add }) => {
    const nameRef = useRef("");
    const surnameRef = useRef("");
    const emailRef = useRef("");

    function createContact(e) {
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            surnameRef.current.value,
            emailRef.current.value,
            false
        );
        add(newContact);
    }

    return (
        <div>
            <h2>Crear contacto</h2>
            <form onSubmit={createContact}>
                <div>
                    <input
                        ref={nameRef}
                        id="inputName"
                        type="text"
                        required
                        placeholder="Contact name"
                    />
                </div>
                <div>
                    <input
                        ref={surnameRef}
                        id="inputSurname"
                        type="text"
                        required
                        placeholder="Contact surname"
                    />
                </div>
                <div>
                    <input
                        ref={emailRef}
                        id="inputEmail"
                        type="text"
                        required
                        placeholder="Contact email"
                    />
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default ContactForm;
