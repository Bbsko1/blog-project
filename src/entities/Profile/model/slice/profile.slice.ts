import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Profile, ProfileSchema } from '../types/profile';
import { fetchUserData } from '../services/fetchUserData/fetchUserData';

export const initialState: ProfileSchema = {
    data: null,
    isLoading: false,
    readonly: true,
    error: null,
};

export const profileSlice = createSlice({
    name: 'Profile',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchUserData.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchUserData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchUserData.rejected, (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.data = null;
                state.error = action.payload;
            });
    },
});

export const profileReducer = profileSlice.reducer;
export const profileActions = profileSlice.actions;
