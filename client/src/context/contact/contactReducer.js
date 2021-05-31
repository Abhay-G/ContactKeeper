export const reducer = (state, action) => {
    switch (action.type) {
        case 'add_contact':
            return {
                ...state,
                contacts: [...state.contacts, action.payload],
            };
        case 'delete_contact':
            return {
                ...state,
                contacts: state.contacts.filter(
                    (contact) => contact.id !== action.payload
                ),
            };
        case 'set_current':
            return {
                ...state,
                current: action.payload,
            };
        case 'clear_current':
            return {
                ...state,
                current: null,
            };
        case 'update_contact':
            return {
                ...state,
                contacts: state.contacts.map((contact) =>
                    contact.id === action.payload.id ? action.payload : contact
                ),
            };
        case 'filter_contacts':
            return {
                ...state,
                filtered: state.contacts.filter((contact) => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return (
                        contact.name.match(regex) || contact.email.match(regex)
                    );
                }),
            };
        case 'clear_filter':
            return {
                ...state,
                filtered: null,
            };
        default:
            return state;
    }
};
