import React, { createContext, useReducer } from 'react';
import { initialState, UserReducer } from '../reducers/UserReducer';

//CONTEXTO DE INFORMAÇÕES DO USUÁRIO
export const UserContext = createContext();

export default ({ children }) => {

    //CONTROLADOR DE AÇÕES DO ESTADO DE USUÁRIO
    const [state, dispatch] = useReducer(UserReducer, initialState);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};
