import ContactForm from '../../ContactForm';
import Filter from '../../Filter';
import {
  PhoneBook,
  PhonebookContainer,
  ContactsTitle,
  EmptyPhonebook,
  Container,
} from './PhonebookForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/selectors';
import ContactList from '../../ContactList';

export const PhonebookForm = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const contacts = useSelector(selectContacts);
  
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
  
    return (
      <PhonebookContainer>
        <PhoneBook>Phonebook</PhoneBook>
        <Container>
          {' '}
          <ContactForm />
          <div>
            {' '}
            <ContactsTitle>Contacts</ContactsTitle>
            <Filter />
            {contacts.length > 0 && <ContactList />}
            {contacts.length === 0 && !isLoading && !error && (
              <EmptyPhonebook>
                Phonebook is empty
              </EmptyPhonebook>
            )}
          </div>
        </Container>
      </PhonebookContainer>
    );
  };
  
  export default PhonebookForm;