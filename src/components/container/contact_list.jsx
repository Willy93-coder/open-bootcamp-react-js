import React, { useEffect, useState } from "react";
import ContactForm from "../pure/forms/contactForm";
import ContactComponent from "../pure/contactComponent";

const ContactList = () => {
    // State of the component
    const [contacts, setContacts] = useState([]);

    // Life cycle of the component
    useEffect(() => {
        console.log("Task State has been modified");

        return () => {
            console.log("TaskList componente is going to unmount...");
        };
    }, [contacts]);

    function addContact(contact) {
        const tempContact = [...contacts];
        tempContact.push(contact);
        setContacts(tempContact);
    }

    function deletedContact(contact) {
        const index = contacts.indexOf(contact);
        const tempContact = [...contacts];
        tempContact.splice(index, 1);
        setContacts(tempContact);
    }

    return (
        <>
            <div>
                <ContactForm add={addContact} />
            </div>
            <div>
                {contacts.map((contact, index) => {
                    return (
                        <ContactComponent
                            key={index}
                            contact={contact}
                            remove={deletedContact}
                            index={index}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default ContactList;
