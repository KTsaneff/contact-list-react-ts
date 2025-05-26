import React from "react";

import type { Contact } from "./Contact";

type ContactCardProps = {
    contact: Contact;
    onDelete: (id: number) => void;
}

const ContactCard = ({contact, onDelete}: ContactCardProps) => {
    return (
        <li className="contact-item">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <strong>{contact.name}</strong> ({contact.phone}) — {contact.email}
                </div>

                <button
                    onClick={() => onDelete(contact.id)}
                    style={{
                        backgroundColor: '#ff4d4d',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '0.4rem 0.8rem',
                        cursor: 'pointer'
                    }}>✖</button>
            </div>
        </li>
    );
};

export default ContactCard;