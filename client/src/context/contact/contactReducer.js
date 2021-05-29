export const reducer = (state, action) => {
    switch (action.type) {
        case 'add_contacts':
            return {
                ...state,
                contacts: [...state.contacts, action.payload],
            };
        case 'delete_contacts':
            return {
                ...state,
                contacts: state.contacts.filter(
                    (contact) => contact.id !== action.payload
                ),
            };
        default:
            return state;
    }
};
