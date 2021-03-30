import React, { Component } from 'react';

import PropTypes from 'prop-types';

import styles from './ContactList.module.scss';

class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }),
    ),
    onDeleteContact: PropTypes.func.isRequired,
  };

  render() {
    return (
      // <ul className={styles.form}>
      <ul>
        {this.props.contacts.map(({ id, name, number }) => (
          <li key={id} className={styles.contactsListItem}>
            <p>
              {name}: {number}
            </p>
            <button
              type="button"
              className={styles.deleteButton}
              onClick={() => this.props.onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;
