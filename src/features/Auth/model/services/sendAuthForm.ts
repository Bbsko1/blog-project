import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

export interface FormParams {
    username: string;
    password: string;
}

export const sendAuthForm = createAsyncThunk<User, FormParams, ThunkConfig<string>>(
    'Auth/sendAuthForm',
    async (userData, thunkApi) => {
        const { rejectWithValue, dispatch, extra } = thunkApi;
        const { api } = extra;

        try {
            const response = await api.post<User>('/login', userData);

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
