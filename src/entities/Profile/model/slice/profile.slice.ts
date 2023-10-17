import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
    data: null,
    isLoading: false,
    readonly: true,
    error: null,
};

export const profileSlice = createSlice({
    name: 'Profile',
    initialState,
    reducers: {},
});

export const profileReducer = profileSlice.reducer;
export const profileActions = profileSlice.actions;
