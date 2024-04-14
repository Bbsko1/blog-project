import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

export const fetchUserData = createAsyncThunk<Profile, undefined, ThunkConfig<string>>(
    'Profile/fetchUserData',
    async (_, thunkApi) => {
        const { rejectWithValue, extra } = thunkApi;
        const { api } = extra;

        try {
            const { data } = await api.get<Profile>('/profile');

            if (!data || typeof data !== 'object') {
                throw new Error();
            }

            return data;
        } catch (err) {
            return rejectWithValue('error');
        }
    },
);
