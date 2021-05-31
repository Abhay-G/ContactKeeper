export const reducer = (state, action) => {
    switch (action.type) {
        case 'set_alert':
            return [...state, action.payload];
        case 'remove_alert':
            return state.filter((alert) => alert.id !== action.payload);
        default:
            return state;
    }
};
