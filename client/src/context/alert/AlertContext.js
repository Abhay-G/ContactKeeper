import { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { reducer } from './alertReducer';

export const AlertContext = createContext();

export const AlertProvider = (props) => {
    const initialState = [];

    const [state, dispatch] = useReducer(reducer, initialState);

    //SET ALERT
    const setAlert = (msg, type, timeout = 3000) => {
        const id = uuidv4();
        dispatch({
            type: 'set_alert',
            payload: { msg: msg, type: type, id: id },
        });
        setTimeout(
            () => dispatch({ type: 'remove_alert', payload: id }),
            timeout
        );
    };

    return (
        <AlertContext.Provider
            value={{
                alerts: state,
                setAlert,
            }}
        >
            {props.children}
        </AlertContext.Provider>
    );
};
