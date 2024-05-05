import { ReducersMapObject } from '@reduxjs/toolkit';
import { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailReducer } from 'entities/Article/model/slice/articleDetail.slice';
import { authReducer } from 'features/Auth/model/slice/auth.slice';
import { ReducerList } from 'shared/lib/hooks/useDynamicModuleLoader';

const defaultAsyncReducers: ReducerList = {
    AUTH: authReducer,
    ARTICLE_DETAIL: articleDetailReducer,
};

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
