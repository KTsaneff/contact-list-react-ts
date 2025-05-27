import React from "react";

import type { Contact } from "./Contact";

type ContactCardProps = {
    contact: Contact;
    onDelete: (id: number) => void;
    onEdit: (contact: Contact) => void;
}

const ContactCard = ({contact, onDelete, onEdit}: ContactCardProps) => {
    return (
        <li className="contact-item">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <strong>{contact.name}</strong> ({contact.phone}) — {contact.email}
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                        onClick={() => onEdit(contact)}
                        style={{
                            backgroundColor: '#ffc107',
                            color: '#333',
                            border: 'none',
                            borderRadius: '6px',
                            padding: '0.4rem 0.8rem',
                            cursor: 'pointer'
                        }}>✏️</button>
  
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

            </div>
        </li>
    );
};

export default ContactCard;