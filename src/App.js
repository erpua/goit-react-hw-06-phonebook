import React from 'react';

/* Styles */
import styles from './global.module.css';

/* Components */
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

const App = () => {
  return (
    <>
      <h1 className={styles.title}>Phone book</h1>
      <ContactForm />
      <h2 className={styles.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default App;
