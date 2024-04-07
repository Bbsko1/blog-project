import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

export const updateProfileData = createAsyncThunk<Profile, Partial<Profile>, ThunkConfig<string>>(
    'Profile/postUserData',
    async (profile, thunkApi) => {
        const { rejectWithValue, extra } = thunkApi;
        const { api } = extra;

        try {
            const response = await api.patch<Profile>('/profile', profile);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (err) {
            return rejectWithValue('error');
        }
    },
);
