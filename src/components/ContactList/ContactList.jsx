import PropTypes from 'prop-types';
import React from 'react';
import { User } from '../User/User';
import css from './ContactList.module.css';

export default function ContactList({ users, deleteUser }) {
  return users.map(user => {
    return (
      <div className={css.contactsList} key={user.id}>
        <User user={user} deleteUser={deleteUser} />
      </div>
    );
  });
}

ContactList.propTypes = {
  users: PropTypes.array.isRequired,
  deleteUser: PropTypes.func.isRequired,
};
