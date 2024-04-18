import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from '../types';

export const fetchArticles = createAsyncThunk<Article[], undefined, ThunkConfig<string>>(
    'Article/fetchArticles',
    async (_, thunkApi) => {
        const { rejectWithValue, extra } = thunkApi;
        const { api } = extra;

        try {
            const { data } = await api.get<Article[]>('/articles');

            if (!data || typeof data !== 'object') {
                throw new Error();
            }

            return data;
        } catch (err) {
            return rejectWithValue('error');
        }
    },
);
