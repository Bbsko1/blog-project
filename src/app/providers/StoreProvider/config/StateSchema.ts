import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject, Dispatch,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailSchema } from 'entities/Article';
import { UserSchema } from 'entities/User';
import { AuthSchema } from 'features/Auth';
import { ArticlesSchema } from 'pages/ArticlesPage';
import { ProfileSchema } from 'pages/ProfilePage';

export interface StateSchema {
    USER: UserSchema;
    AUTH?: AuthSchema;
    PROFILE?: ProfileSchema;
    ARTICLES?: ArticlesSchema;
    ARTICLE_DETAIL?: ArticleDetailSchema;
}

export type StateSchemaKeys = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKeys, reducer: Reducer) => void;
    remove: (key: StateSchemaKeys) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArgs {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArgs;
    dispatch?: Dispatch
}
