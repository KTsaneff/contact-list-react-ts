import { useState } from 'react';
import './ContactList.css';

import ContactCard from './ContactCard';

import type { Contact } from './Contact';

function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null)
  

  const handleAddContact = () => {

    if(!name.trim() || !phone.trim() || !email.trim()){
      setError('All fields are required.');
      return;
    }

    const phoneRegex = /^\+?[0-9 ]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!phoneRegex.test(phone)){
      setError('Phone number format is invalid.  Use +359123456789 or 00359123456789');
      return;
    }

    if(!emailRegex.test(email)){
      setError('Email format is invalid.');
      return;
    }

    if(editingId !== null) {
      const updatedContacts = contacts.map((contact) => 
        contact.id === editingId ? { ...contact, name, phone, email } : contact
      );
      setContacts(updatedContacts);
      setEditingId(null);
    } else {
      const newContact: Contact = {
        id: Date.now(),
        name,
        phone,
        email,
      };
      setContacts([...contacts, newContact]);
    }

    setName('');
    setPhone('');
    setEmail('');
    setError('');
  };

  const handleDeleteContact = (id: number) => {
    setContacts(contacts.filter(c => c.id !== id));
  };

  const handleEditContact = (contact: Contact) => {
    setName(contact.name);
    setPhone(contact.phone);
    setEmail(contact.email);
    setEditingId(contact.id);
    setError('');
  }

  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.phone.includes(searchTerm) ||
    c.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
  <div className="app-container">
    <h1>Simple Contact List</h1>

    {error && (
      <div style={{color: 'red', marginBottom: '1rem'}}>
        ⚠️ {error}
      </div>
    )}

    <form onSubmit={(e) => { e.preventDefault(); handleAddContact(); }}>
        <input
          type="text"
          placeholder="e.g. Nona"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="e.g. +359888123456"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="email"
          placeholder="e.g. example@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">{editingId ? 'Save Changes' : 'Add Contact'}</button>
      </form>

    <input
      type="text"
      placeholder="Search contacts..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: '0.5rem',
        marginBottom: '1rem',
        width: '100%',
        borderRadius: '6px',
        border: '1px solid #ccc',
        fontSize: '1rem'
      }}
    />


    <h2>All Contacts:</h2>

    {contacts.length === 0 ? (
        <p>No contacts added yet.</p>
      ) : filteredContacts.length === 0 ? (
        <p>No contacts match your search.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {filteredContacts.map((c) => (
            <ContactCard 
              key={c.id} 
              contact={c} 
              onDelete={handleDeleteContact}
              onEdit={handleEditContact} />
          ))}
      </ul>
    )}

  </div>
);

}

export default App
