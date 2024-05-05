import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleData } from 'entities/Article';

type FetchArticleProps = {
    id: string;
}

export const fetchArticle = createAsyncThunk<
    ArticleData,
    FetchArticleProps,
    ThunkConfig<string>
>(
    'ArticleDetail/fetchArticle',
    async ({ id }, thunkApi) => {
        const { rejectWithValue, extra } = thunkApi;
        const { api } = extra;

        try {
            const { data } = await api.get<ArticleData>(`/articles/${id}`);

            if (!data || typeof data !== 'object') {
                throw new Error();
            }

            return data;
        } catch (err) {
            return rejectWithValue('error');
        }
    },
);
