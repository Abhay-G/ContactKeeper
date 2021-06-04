export const reducer = (state, action) => {
    switch (action.type) {
        case 'register_user':
        case 'login_sucess':
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false,
            };
        case 'register_fail':
        case 'auth_error':
        case 'login_fail':
        case 'logout':
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: action.payload,
            };
        case 'clear_errors':
            return {
                ...state,
                error: null,
            };
        case 'user_loaded':
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload,
            };
        default:
            return state;
    }
};
