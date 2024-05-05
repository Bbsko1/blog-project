import {
    AnyAction,
    CombinedState, Middleware, Reducer, ReducersMapObject, ThunkDispatch, configureStore,
} from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { $api } from 'shared/api/api';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';

const customMiddleware: Middleware<
    {}, unknown, ThunkDispatch<unknown, unknown, AnyAction>
> = (storeAPI) => (next) => async (action) => {
    if (__PROJECT__ === 'storybook' && action?.meta?.requestStatus) {
        return next({ type: 'CANCEL_EDIT' });
    }

    return next(action);
};

export const createReduxStore = (initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        USER: userReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                },
            },
        }).concat(customMiddleware),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
