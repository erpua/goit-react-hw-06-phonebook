import React from 'react';
import ContactListItem from '../ContactListItem';
import { connect } from 'react-redux';
import { formFilter } from '../../redux/contacts/contactsActions';
import styles from './Filter.module.scss';

const Filter = ({ value, onChange, contacts }) => {
  return (
    <section className={styles.main__form}>
      <label className={styles.form__label}>
        Find contacts by name
        <input
          className={styles.form__input}
          type="name"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </label>
      <ul>
        {contacts.length > 1 &&
          contacts.map(({ id }) => <ContactListItem key={id} id={id} />)}
      </ul>
    </section>
  );
};

const mapStateToProps = state => {
  const { items, filter } = state.contacts;
  const normalizedFilter = filter.toLowerCase();

  const getVisibleContact = items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );

  return {
    contacts: getVisibleContact,
    value: state.contacts.filter,
  };
};

const mapDispatchToProps = {
  onChange: formFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
