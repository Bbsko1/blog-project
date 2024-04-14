import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { <FTName | pascalcase>Schema } from '../types';

const initialState: <FTName | pascalcase>Schema = {

};

export const <FTName | lowercasefirstchar>Slice = createSlice({
    name: '<FTName | pascalcase>',
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

export const <FTName | lowercasefirstchar>Reducer = <FTName | lowercasefirstchar>Slice.reducer;
export const { test } = <FTName | lowercasefirstchar>Slice.actions;
