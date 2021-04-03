import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsActions';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.scss';

class ContactForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const findContact = this.props.contacts.find(
      contact => contact.name === name,
    );
    if (findContact) {
      alert(`${findContact.name} is already in contacts`);
      return;
    }
    this.props.onAddContact(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={styles.main__form} onSubmit={this.handleSubmit}>
        <label className={styles.form__label}>
          Name
          <input
            className={styles.form__input}
            type="name"
            value={name}
            onChange={this.handleChange}
            name="name"
          />
        </label>
        <label className={styles.form__label}>
          Number
          <input
            className={styles.form__input}
            type="name"
            value={number}
            onChange={this.handleChange}
            name="number"
          />
        </label>
        <button className={styles.form__button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = {
  onAddContact: addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
