import { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { reducer } from './contactReducer';

export const ContactContext = createContext();

export const ContactProvider = (props) => {
    const initialState = {
        contacts: [
            {
                type: 'personal',
                id: '1',
                name: 'Rachel Green',
                email: 'rachel@mail.com',
                phone: '9812763932',
            },
            {
                type: 'professional',
                id: '2',
                name: 'Joe Tribyani',
                email: 'joe@mail.com',
                phone: '6721483211',
            },
            {
                type: 'professional',
                id: '3',
                name: 'Chandler Bing',
                email: 'bing@mail.com',
                phone: '7812691882',
            },
        ],
        current: null,
        filtered: null,
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    //ADD CONTACT
    const addContact = (contact) => {
        contact.id = uuidv4();
        dispatch({ type: 'add_contact', payload: contact });
    };
    //DELETE CONTACT
    const deleteContact = (id) => {
        dispatch({ type: 'delete_contact', payload: id });
    };
    //SET CURRENT CONTACT
    const setCurrent = (contact) => {
        dispatch({ type: 'set_current', payload: contact });
    };
    //CLEAR CURRENT CONTACT
    const clearCurrent = () => {
        dispatch({ type: 'clear_current' });
    };
    //UPDATE CONTACT
    const updateContact = (contact) => {
        dispatch({ type: 'update_contact', payload: contact });
    };

    //FILTER CONTACTS
    const filterContacts = (text) => {
        dispatch({ type: 'filter_contacts', payload: text });
    };
    //CLEAR FILTER
    const clearFilter = () => {
        dispatch({ type: 'clear_filter' });
    };

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                filtered: state.filtered,
                addContact,
                deleteContact,
                setCurrent,
                clearCurrent,
                updateContact,
                filterContacts,
                clearFilter,
            }}
        >
            {props.children}
        </ContactContext.Provider>
    );
};
