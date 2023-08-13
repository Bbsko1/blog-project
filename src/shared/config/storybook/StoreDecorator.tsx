import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { authReducer } from 'features/Auth/model/slice/auth.slice';

const defaultAsyncReducers = { AUTH: authReducer };

export const StoreDecorator = (
    state?: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
): Decorator => (Story) => (
    <StoreProvider
        initialState={state as StateSchema}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers } as ReducersMapObject<StateSchema>}
    >
        <Story />
    </StoreProvider>
);
