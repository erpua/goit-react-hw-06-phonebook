import React, { Component } from 'react';

import PropTypes from 'prop-types';

import styles from './Filter.module.scss';

class Filter extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    visibleSearchContacts: PropTypes.arrayOf(
      PropTypes.exact({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }),
    ),
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
      <section className={styles.main__form}>
        <label className={styles.form__label}>
          Find contacts by name
          <input
            className={styles.form__input}
            type="name"
            value={this.props.value}
            onChange={e => this.props.onChange(e.target.value)}
          />
        </label>
        <ul>
          {this.props.contacts.length > 2 &&
            this.props.visibleSearchContacts.map(({ id, name, number }) => (
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
      </section>
    );
  }
}

export default Filter;
