import React from 'react';
import { connect } from 'react-redux';
import { removeContact } from '../../redux/contacts/contactsActions';
import PropTypes from 'prop-types';

import styles from './ContactListItem.module.scss';

const ContactListItem = ({ name, number, removeContact }) => (
  <li className={styles.contactsListItem}>
    <p>
      {name}: {number}
    </p>
    <button
      type="button"
      className={styles.deleteButton}
      onClick={removeContact}
    >
      Delete
    </button>
  </li>
);

const mapStateToProps = (state, ownProps) => {
  const item = state.contacts.items.find(item => item.id === ownProps.id);

  return {
    ...item,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeContact: () => dispatch(removeContact(ownProps.id)),
});

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  removeContact: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
