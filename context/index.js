import react, { createContext, useState } from 'react';

export const Context = react.createContext({
    Example: [],
    setExample: [],
    Menu: 0,
    setMenu: 0,
});

const ContextProvider = (props) => {
    const [Example, setExample] = useState([]);
    const [Menu, setMenu] = useState(0)

    return (
        <Context.Provider
            value={{
                Example,
                setExample,
                setMenu,
                Menu
            }}
        >
            {props.children}
        </Context.Provider>
    );
}

export default ContextProvider;