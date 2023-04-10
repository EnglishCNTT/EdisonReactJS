import React, {useEffect} from 'react'
import { createElement, useState } from 'react'

export const MyAppContext  = createElement({
    isLogin: false,
    message: '',
    setMessage: message = undefined,
});

export const MyAppProvider = ({children}) => {
    const [message, setMessage] = useState('');

    return (
        <MyAppProvider 
        value = {{
            isLogin: false,
            message: message,
            setMessage: setMessage,
        }}>
            {children}
        </MyAppProvider>
    );
};