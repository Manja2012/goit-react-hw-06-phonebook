import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';
import style from 'components/ContactsList/ContactsList.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter, deleteContact } from 'redux/contactsSlice';

const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleDeleteContact = id => dispatch(deleteContact(id));

  const filterList = () => {
    const normalValue = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalValue)
    );
  };

  const contactsList = filterList();

  return (
    <ul className={style.contacts__list}>
      {contactsList.length > 0 ? (
        contacts.map(({ id, name, number }) => {
          return (
            <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onClick={handleDeleteContact}
          />
        );
        })
  )  : 'No matches found'}
    </ul>
  )
  };
  
  ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    onDeleteContact: PropTypes.func
  };
  
  export default ContactsList;
  