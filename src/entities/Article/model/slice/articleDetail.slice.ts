import { createSlice } from '@reduxjs/toolkit';
import { ArticleDetailSchema } from '../types';
import { fetchArticle } from '../services/fetchArticle';

const initialState: ArticleDetailSchema = {
    isLoading: false,
    article: null,
    error: null,
};

export const articleDetailSlice = createSlice({
    name: 'ArticleDetail',
    initialState,
    reducers: {
        /* test: (state, action: PayloadAction<test>) => {

        }, */
    },
    extraReducers(builder) {
        builder
            // fetchArticle
            .addCase(fetchArticle.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchArticle.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.article = payload;
            })
            .addCase(fetchArticle.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload ?? null;
            });
    },
});

export const articleDetailReducer = articleDetailSlice.reducer;
