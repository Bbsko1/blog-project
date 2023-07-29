import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
    children: ReactNode;
}

const store = createReduxStore();

export const StoreProvider = ({ children }: StoreProviderProps) => {
    return (
        <Provider store={store}>
            { children }
        </Provider>
    );
};
