import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleData } from 'entities/Article';

export const fetchArticles = createAsyncThunk<ArticleData[], undefined, ThunkConfig<string>>(
    'Articles/fetchArticles',
    async (_, thunkApi) => {
        const { rejectWithValue, extra } = thunkApi;
        const { api } = extra;

        try {
            const { data } = await api.get<ArticleData[]>('/articles');

            if (!data || typeof data !== 'object') {
                throw new Error();
            }

            return data;
        } catch (err) {
            return rejectWithValue('error');
        }
    },
);
