import { createContext, useReducer } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { reducer } from './contactReducer';

export const ContactContext = createContext();

export const ContactProvider = (props) => {
    const initialState = {
        contacts: null,
        current: null,
        filtered: null,
        error: null,
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    //ADD CONTACT
    const addContact = async (contact) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        try {
            const res = await axios.post('/api/contacts', contact, config);
            dispatch({ type: 'add_contact', payload: res.data });
        } catch (err) {
            dispatch({ type: 'contact_error', payload: err.response.msg });
        }
    };
    //CLEAR CONTACT
    const clearContacts = () => {
        dispatch({ type: 'clear_contacts' });
    };
    //GET CONTACT
    const getContacts = async () => {
        try {
            const res = await axios.get('/api/contacts');
            dispatch({ type: 'get_contacts', payload: res.data });
        } catch (err) {
            dispatch({ type: 'contact_error', payload: err.response.msg });
        }
    };
    //DELETE CONTACT
    const deleteContact = async (id) => {
        try {
            await axios.delete(`/api/contacts/${id}`);
            dispatch({ type: 'delete_contact', payload: id });
        } catch (err) {
            dispatch({ type: 'contact_error', payload: err.response.msg });
        }
    };
    //UPDATE CONTACT
    const updateContact = async (contact) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        try {
            const res = await axios.put(
                `/api/contacts/${contact._id}`,
                contact,
                config
            );
            dispatch({ type: 'update_contact', payload: res.data });
        } catch (err) {
            dispatch({ type: 'contact_error', payload: err.response.msg });
        }
    };

    //SET CURRENT CONTACT
    const setCurrent = (contact) => {
        dispatch({ type: 'set_current', payload: contact });
    };
    //CLEAR CURRENT CONTACT
    const clearCurrent = () => {
        dispatch({ type: 'clear_current' });
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
                error: state.error,
                addContact,
                getContacts,
                deleteContact,
                setCurrent,
                clearCurrent,
                updateContact,
                filterContacts,
                clearFilter,
                clearContacts,
            }}
        >
            {props.children}
        </ContactContext.Provider>
    );
};
