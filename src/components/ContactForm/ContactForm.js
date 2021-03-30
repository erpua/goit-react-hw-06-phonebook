import React, { Component } from 'react';

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

export default ContactForm;
