import { createContext, useReducer } from 'react';
import { reducer } from './Authreducer';
import setAuthToken from '../../utils/setAuthToken';
import axios from 'axios';

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
    const loadUser = async () => {
        if (localStorage.token) {
            setAuthToken(localStorage.token);
        }
        try {
            const res = await axios.get('/api/auth');
            dispatch({ type: 'user_loaded', payload: res.data });
        } catch (err) {
            dispatch({ type: 'auth_error' });
        }
    };

    //REGISTER USER
    const register = async (formData) => {
        const config = {
            header: {
                'Content-Type': 'application/json',
            },
        };
        try {
            const res = await axios.post('/api/users', formData, config);
            dispatch({ type: 'register_user', payload: res.data });
            loadUser();
        } catch (err) {
            dispatch({ type: 'register_fail', payload: err.response.data.msg });
        }
    };

    //LOGIN USER
    const login = async (formData) => {
        const config = {
            header: {
                'Content-Type': 'application/json',
            },
        };
        try {
            const res = await axios.post('/api/auth', formData, config);
            dispatch({ type: 'login_sucess', payload: res.data });
            loadUser();
        } catch (err) {
            dispatch({ type: 'login_fail', payload: err.response.data.msg });
        }
    };
    //LOGOUT USER
    const logout = () => {
        dispatch({ type: 'logout' });
    };
    //CLEAR ERROR
    const clearErrors = () => {
        dispatch({ type: 'clear_errors' });
    };

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                user: state.user,
                error: state.error,
                loadUser,
                register,
                login,
                clearErrors,
                logout,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};
