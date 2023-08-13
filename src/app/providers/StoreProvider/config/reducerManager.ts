import {
    AnyAction, CombinedState, Reducer, ReducersMapObject, combineReducers,
} from '@reduxjs/toolkit';
import { ReducerManager, StateSchema, StateSchemaKeys } from './StateSchema';

export function createReducerManager(
    initialReducers: ReducersMapObject<StateSchema>,
): ReducerManager {
    const reducers = { ...initialReducers };

    let combinedReducer = combineReducers(reducers);

    let keysToRemove: StateSchemaKeys[] = [];

    return {
        getReducerMap: ():ReducersMapObject<StateSchema> => reducers,
        reduce: (state: StateSchema, action: AnyAction): CombinedState<StateSchema> => {
            if (keysToRemove.length > 0) {
                // eslint-disable-next-line no-param-reassign
                state = { ...state };

                keysToRemove.forEach((key) => {
                    // eslint-disable-next-line no-param-reassign
                    delete state[key];
                });

                keysToRemove = [];
            }

            return combinedReducer(state, action);
        },
        add: (key: StateSchemaKeys, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }

            reducers[key] = reducer;

            combinedReducer = combineReducers(reducers);
        },
        remove: (key: StateSchemaKeys) => {
            if (!key || !reducers[key]) {
                return;
            }

            delete reducers[key];
            keysToRemove.push(key);
            combinedReducer = combineReducers(reducers);
        },
    };
}
