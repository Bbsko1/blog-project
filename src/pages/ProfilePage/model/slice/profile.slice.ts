import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Profile, ProfileSchema } from '../types/profile';
import { fetchUserData } from '../services/fetchUserData/fetchUserData';
import { postUserData } from '../services/postUserData/postUserData';

export const initialState: ProfileSchema = {
    data: null,
    duplicateData: null,
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
        cancelEditProfile: (state) => {
            state.data = state.duplicateData;
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
                state.duplicateData = action.payload;
            })
            .addCase(fetchUserData.rejected, (state, action) => {
                state.isLoading = false;
                state.data = null;
                state.duplicateData = null;
                state.error = action.payload || null;
            })
            // postUserData
            .addCase(postUserData.pending, (state) => {
                state.isLoading = true;
                state.error = null;
                state.readonly = true;
            })
            .addCase(postUserData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.duplicateData = action.payload;
            })
            .addCase(postUserData.rejected, (state, action) => {
                state.isLoading = false;
                state.data = null;
                state.duplicateData = null;
                state.error = action.payload || null;
            });
    },
});

export const profileReducer = profileSlice.reducer;
export const { updateProfile, toggleReadOnly, cancelEditProfile } = profileSlice.actions;
