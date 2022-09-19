import React from "react";
import createPersistedState from 'use-persisted-state';
import useGet from './useGet';

export const AppContext = React.createContext({});

const usePersistedCart = createPersistedState('cart');

export function AppContextProvider({ children }) {

    // Because we need this data pretty much everywhere in our app, it's a good idea
    // to load it in here, rather than having to make new GET requests every time we change the page.
    const { data: products } = useGet('/api/products', []);

    const [cart, setCart] = usePersistedCart([]);

    const addToCart = item => setCart([...cart, item._id]);
    const clearCart = () => setCart([]);

    const context = {
        products,
        cart,
        addToCart,
        clearCart
    }

    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    )
}