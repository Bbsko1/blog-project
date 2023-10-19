import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from 'entities/User';
import { AuthSchema } from '../types/auth';
import { sendAuthForm } from '../services/sendAuthForm';

export const authInitialState: AuthSchema = {
    loading: false,
    username: '',
    password: '',
};

export const authSlice = createSlice({
    name: 'Auth',
    initialState: authInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(sendAuthForm.pending, (state) => {
                state.loading = true;
                state.username = '';
                state.password = '';
                state.error = undefined;
            })
            .addCase(sendAuthForm.fulfilled, (state, action: PayloadAction<User>) => {
                state.loading = false;
                state.username = action.payload.username;
                state.password = action.payload.password;
            })
            .addCase(sendAuthForm.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
