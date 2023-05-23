import { Component } from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

export default class ContactForm extends Component {
  state = {
    name: '',
    tel: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addUser({ ...this.state });
    this.setState({ name: '', tel: '' });
  };

  render() {
    const { name, tel } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label>
          Name:
          <br />{' '}
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Number: <br />
          <input
            name="tel"
            value={tel}
            type="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
        </label>
        <br />
        <button className={css.addButton}> Add contact </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  addUser: PropTypes.func.isRequired,
};
