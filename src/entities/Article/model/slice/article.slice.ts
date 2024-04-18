import { createSlice } from '@reduxjs/toolkit';
import { ArticleSchema } from '../types';
import { fetchArticles } from '../services/fetchArticles';

const initialState: ArticleSchema = {
    isLoading: false,
    articles: null,
};

export const articleSlice = createSlice({
    name: 'Article',
    initialState,
    reducers: {
        /* test: (state, action: PayloadAction<test>) => {

        }, */
    },
    extraReducers(builder) {
        builder
            // fetchArticles
            .addCase(fetchArticles.fulfilled, (state, { payload }) => {
                state.articles = payload;
            });
    },
});

export const articleReducer = articleSlice.reducer;
