import React, { createContext, useReducer } from 'react';

interface IAppContext {
    isMobile: boolean
    handleContentState: Function
    contentState: string
};

const initialState = {
    isMobile: false,
    handleContentState: (headerState: 'carousel' | 'gallery') => null,
    contentState: 'carousel'

};

const AppContext = createContext<{
    state: IAppContext
    dispatch: React.Dispatch<any>
}>({ state: initialState, dispatch: () => null });

const reducer = (state: IAppContext, action: { type: string, payload: any }) => {
    const { type, payload } = action;

    switch (type) {
        case 'HANDLE_IS_MOBILE': {
            return {
                ...state,
                isMobile: payload
            }
        }
        case 'HANDLE_CONTENT_STATE': {
            return {
                ...state,
                contentState: payload
            }
        }
        default: {
            return state;
        }
    }
};

const AppProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <AppContext.Provider value={{ state, dispatch }} >{children}</AppContext.Provider>
};

export { AppProvider, AppContext };