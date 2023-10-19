import { Reducer } from '@reduxjs/toolkit';
import {
    ReduxStoreWithManager,
    StateSchema,
    StateSchemaKeys,
} from 'app/providers/StoreProvider/';
import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

export type ReducerList = {
    [name in StateSchemaKeys]?: Reducer;
}

// type ReducerListEntry = [StateSchemaKeys, Reducer];

interface useDynamicModuleLoaderProp {
    reducers: ReducerList;
    removeAftrerUnmount?: boolean;
}

export const useDynamicModuleLoader = (props: useDynamicModuleLoaderProp) => {
    const { reducers, removeAftrerUnmount = true } = props;
    const dispatch = useAppDispatch();
    const store = useStore<StateSchema>() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            if (store.getState()[name as StateSchemaKeys]) return;

            store.reducerManager.add(name as StateSchemaKeys, reducer);
            dispatch({ type: `@INIT ${name}` });
        });

        return () => {
            if (removeAftrerUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKeys);
                    dispatch({ type: `@DESTROY ${name}` });
                });
            }
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
