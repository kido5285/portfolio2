import React, { createContext, useReducer } from "react"
import AppReducer from './AppReducer'

const initialState = {
    mode: false,
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const show = () => {
        dispatch({
            type: 'SHOW_MENU',
            payload: true,
        })
    }

    const hide = () => {
        dispatch({
            type: 'HIDE_MENU',
            payload: false,
        })
    }

    return (<GlobalContext.Provider value={{mode: state.mode, show, hide}}>
            {children}
        </GlobalContext.Provider>
    )
}