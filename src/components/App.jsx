import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import CONTACTS from '../DataSet/Contacts';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidUpdate() {
    const { contacts } = this.state;
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  componentDidMount() {
    const contactsLSLength = JSON.parse(
      localStorage.getItem('contacts')
    )?.length;
    if (contactsLSLength !== 0) {
      this.setState({
        contacts: JSON.parse(localStorage.getItem('contacts')),
      });
    } else {
      this.setState({ contacts: CONTACTS });
    }
  }

  addUser = userData => {
    const newUser = {
      id: nanoid(),
      ...userData,
    };

    if (
      !this.state.contacts.some(
        contact => contact.name.toLowerCase() === newUser.name.toLowerCase()
      )
    ) {
      this.setState(prevState => {
        return { contacts: [...prevState.contacts, newUser] };
      });
    } else {
      alert(`${newUser.name} is already in contacts.`);
      return null;
    }
  };

  deleteUser = id => {
    this.setState(prevState => {
      return { contacts: prevState.contacts.filter(user => user.id !== id) };
    });
  };

  setFilter = filterData => {
    this.setState({ filter: filterData.target.value });
  };

  filteredContacts() {
    return this.state.contacts.filter(user =>
      user.name.toLowerCase().includes(this.state.filter.toLocaleLowerCase())
    );
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '24px',
          color: '#010101',
          flexDirection: 'column',
          width: '330px',
          margin: '0 auto',
          border: 'solid 2px #999',
          padding: '15px',
          boxShadow: '2px 2px 2px 3px rgba(0, 0, 0, .2)',
          marginTop: '12px',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm addUser={this.addUser} />
        <h2>Contacts</h2>
        <Filter setFilter={this.setFilter} />
        <ContactList
          users={this.filteredContacts()}
          deleteUser={this.deleteUser}
          className={css.list}
        />
      </div>
    );
  }
}
