import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ArticleSchema } from '../types';

const initialState: ArticleSchema = {

};

export const articleSlice = createSlice({
    name: 'Article',
    initialState,
    reducers: {
        test: (state, action: PayloadAction<test>) => {
            
        },
    },
    extraReducers(builder) {
        builder
            // testData
            .addCase(testData.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            });
    },
});

export const articleReducer = articleSlice.reducer;
export const { test } = articleSlice.actions;
