import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Profile, ProfileSchema } from '../types/profile';
import { fetchUserData } from '../services/fetchUserData/fetchUserData';

export const initialState: ProfileSchema = {
    data: null,
    isLoading: true,
    readonly: false,
    error: null,
};

export const profileSlice = createSlice({
    name: 'Profile',
    initialState,
    reducers: {
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.data = {
                ...state.data,
                ...action.payload,
            };
        },
    },
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
            .addCase(fetchUserData.rejected, (state, action) => {
                state.isLoading = false;
                state.data = null;
                state.error = action.payload || null;
            });
    },
});

export const profileReducer = profileSlice.reducer;
export const { updateProfile } = profileSlice.actions;
