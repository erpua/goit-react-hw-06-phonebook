import React, { Component } from 'react';

/* Libraries */
import { v1 as uuid } from 'uuid';

/* Styles */
import styles from './global.module.css';

/* Components */
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const storageContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(storageContacts);

    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    console.log('nextContacts:', nextContacts);

    const prevcontacts = prevState.contacts;
    console.log('prevcontacts:', prevcontacts);

    if (nextContacts.length !== prevcontacts.length) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  addContact = (name, number) => {
    const newContact = {
      id: uuid(),
      name,
      number,
    };

    const findContact = this.state.contacts.find(
      contact => contact.name === name,
    );

    if (findContact) {
      alert(`${findContact.name} is already in contacts`);
      return;
    }

    this.setState(prevState => {
      return { contacts: [newContact, ...prevState.contacts] };
    });
  };

  deleteContact = id => {
    console.log('before deleting');
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
    console.log('should be deleted');
  };

  formFilter = filter => {
    this.setState({ filter });
  };

  getVisibleContact = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContact();
    return (
      <>
        <h1 className={styles.title}>Phone book</h1>
        <ContactForm onAddContact={this.addContact} />
        <h2 className={styles.title}>Contacts</h2>
        <Filter
          value={filter}
          onChange={this.formFilter}
          visibleSearchContacts={visibleContacts}
          contacts={contacts}
          onDeleteContact={this.deleteContact}
        />
        <ContactList contacts={contacts} onDeleteContact={this.deleteContact} />
      </>
    );
  }
}

export default App;
