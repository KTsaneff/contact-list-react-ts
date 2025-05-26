import { useState } from 'react';
import './ContactList.css';

import ContactCard from './ContactCard';

import type { Contact } from './Contact';

function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState('');

  const handleAddContact = () => {
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
  };

  const handleDeleteContact = (id: number) => {
    setContacts(contacts.filter(c => c.id !== id));
  };

  return (
  <div className="app-container">
    <h1>Simple Contact List</h1>

    <form onSubmit={(e) => { e.preventDefault(); handleAddContact(); }}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
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
