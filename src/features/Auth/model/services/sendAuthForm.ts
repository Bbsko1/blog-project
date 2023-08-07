import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

export interface FormParams {
    username: string;
    password: string;
}

export const sendAuthForm = createAsyncThunk<User, FormParams, { rejectValue: string }>(
    'Auth/sendAuthForm',
    async (userData, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', userData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (err) {
            console.log(err.response);
            return rejectWithValue('error');
        }
    },
);
