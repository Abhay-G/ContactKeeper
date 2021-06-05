export const reducer = (state, action) => {
    switch (action.type) {
        case 'get_contacts':
            return {
                ...state,
                contacts: action.payload,
                loading: false,
            };
        case 'add_contact':
            return {
                ...state,
                contacts: [action.payload, ...state.contacts],
                loading: false,
            };
        case 'delete_contact':
            return {
                ...state,
                contacts: state.contacts.filter(
                    (contact) => contact._id !== action.payload
                ),
                loading: false,
            };
        case 'clear_contacts':
            return {
                ...state,
                contacts: null,
                filtered: null,
                current: null,
                error: null,
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
                    contact._id === action.payload._id
                        ? action.payload
                        : contact
                ),
                loading: false,
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
                loading: false,
            };
        case 'clear_filter':
            return {
                ...state,
                filtered: null,
            };
        case 'contact_error':
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};
