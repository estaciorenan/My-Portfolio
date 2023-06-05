
'use client'
import { createContext } from 'react';
import ValueContext from './valuesContext';

const Context = createContext<any>({});

type Props = {
    children?: React.ReactNode
};

function AuthContext({ children }: Props) {
    const {
        page,
        setPage,
        themeDark,
        setThemeDark
    } = ValueContext()
    return (
        <Context.Provider value={{ 
            page,
            setPage,
            themeDark,
            setThemeDark
         }}>
            {children}
        </Context.Provider>
    );
}
export { Context, AuthContext };
