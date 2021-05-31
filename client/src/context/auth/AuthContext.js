import { createContext, useReducer } from 'react';
import { reducer } from './Authreducer';

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null,
        error: null,
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    //LOAD USER

    //REGISTER USER

    //LOGIN USER

    //LOGOUT USER

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                user: state.user,
                error: state.error,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};
