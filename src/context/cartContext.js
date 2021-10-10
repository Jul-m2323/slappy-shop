import React, { createContext , useState }  from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({children}) => {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        const newItems = [...items, item];
        setItems([...items, item]);
        setItems(newItems);
    };

    return (
        <CartContext.Provider value={{addItem, items}}>
            {children}
        </CartContext.Provider>
    );
};
