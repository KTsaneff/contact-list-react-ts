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

    const newContact: Contact = {
      id: Date.now(),
      name,
      phone,
      email,
    };

    setContacts([...contacts, newContact]);

    setName('');
    setPhone('');
    setEmail('');
    setError('');
  };

  const handleDeleteContact = (id: number) => {
    setContacts(contacts.filter(c => c.id !== id));
  };

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
        <button type="submit">Add Contact</button>
      </form>

    <h2>All Contacts:</h2>
    {contacts.length === 0 ? (
      <p>No contacts added yet.</p>
    ) : (
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {contacts.map((c) => (
          <ContactCard key={c.id} contact={c} onDelete={handleDeleteContact}/>
        ))}
      </ul>
    )}
  </div>
);

}

export default App
