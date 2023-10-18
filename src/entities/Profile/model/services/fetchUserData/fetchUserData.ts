import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ThunkExtraArgs } from 'app/providers/StoreProvider/config/StateSchema';
import { Profile } from '../../types/profile';

export const fetchUserData = createAsyncThunk<Profile, undefined, {extra: ThunkExtraArgs}>(
    'Profile/fetchUserData',
    async (_, { extra, rejectWithValue }) => {
        /* const { rejectWithValue, extra } = thunkApi; */
        const { api } = extra;

        try {
            const response = await api.get<Profile>('/profile');

            return response.data;
        } catch (err) {
            return rejectWithValue('error');
        }
    },
);
