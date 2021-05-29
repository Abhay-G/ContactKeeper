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
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    //ADD CONTACT
    const addContact = (contact) => {
        contact.id = uuidv4();
        dispatch({ type: 'add_contacts', payload: contact });
    };
    //DELETE CONTACT
    const deleteContact = (id) => {
        dispatch({ type: 'delete_contacts', payload: id });
    };
    //SET CURRENT CONTACT

    //CLEAR CURRENT CONTACT

    //UPDATE CONTACT

    //FILTER CONTACTS

    //CLEAR FILTER

    return (
        <ContactContext.Provider
            value={{ contacts: state.contacts, addContact, deleteContact }}
        >
            {props.children}
        </ContactContext.Provider>
    );
};
