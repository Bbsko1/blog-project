import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Profile, ProfileSchema } from '../types/profile';
import { fetchUserData } from '../services/fetchUserData/fetchUserData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const initialState: ProfileSchema = {
    data: null,
    isLoading: true,
    readonly: true,
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
        toggleReadOnly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
    },
    extraReducers(builder) {
        builder
            // fetchUserData
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
                state.error = action.payload ?? null;
            })
            // postUserData
            .addCase(updateProfileData.pending, (state) => {
                state.isLoading = true;
                state.error = null;
                state.readonly = true;
            })
            .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.data = null;
                state.error = action.payload ?? null;
            });
    },
});

export const profileReducer = profileSlice.reducer;
export const { updateProfile, toggleReadOnly } = profileSlice.actions;
