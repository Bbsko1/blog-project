import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

export const fetchUserData = createAsyncThunk<Profile, undefined, ThunkConfig<string>>(
    'Profile/fetchUserData',
    async (_, thunkApi) => {
        const { rejectWithValue, extra } = thunkApi;
        const { api } = extra;

        try {
            const response = await api.get<Profile>('/profile');

            return response.data;
        } catch (err) {
            console.log(err.response);
            return rejectWithValue('error');
        }
    },
);
