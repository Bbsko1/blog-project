import { createSlice } from '@reduxjs/toolkit';
import { ArticlesSchema } from '../types';
import { fetchArticles } from '../services/fetchArticles';

const initialState: ArticlesSchema = {
    isLoading: false,
    articles: null,
};

export const articlesSlice = createSlice({
    name: 'Articles',
    initialState,
    reducers: {
        /* test: (state, action: PayloadAction<test>) => {

        }, */
    },
    extraReducers(builder) {
        builder
            // fetchArticles
            .addCase(fetchArticles.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchArticles.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.articles = payload;
            })
            .addCase(fetchArticles.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

export const articlesReducer = articlesSlice.reducer;
