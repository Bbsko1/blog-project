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

type ReducerListEntry = [StateSchemaKeys, Reducer];

interface useDynamicModuleLoaderProp {
    reducers: ReducerList;
    removeAftrerUnmount?: boolean;
}

export const useDynamicModuleLoader = (props: useDynamicModuleLoaderProp) => {
    const { reducers, removeAftrerUnmount = true } = props;
    const dispatch = useAppDispatch();
    const store = useStore<StateSchema>() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
            store.reducerManager.add(name, reducer);
            dispatch({ type: `@INIT ${name}` });
        });

        return () => {
            if (removeAftrerUnmount) {
                Object.entries(reducers).forEach(([name]: ReducerListEntry) => {
                    store.reducerManager.remove(name);
                    dispatch({ type: `@DESTROY ${name}` });
                });
            }
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
