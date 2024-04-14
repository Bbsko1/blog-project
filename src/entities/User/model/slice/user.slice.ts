import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {
    isInited: false,
};

export const userSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const userAuthData = localStorage.getItem(USER_LOCALSTORAGE_KEY);

            if (userAuthData) {
                state.authData = JSON.parse(userAuthData);
            }

            state.isInited = true;
        },
        logout: (state) => {
            state.authData = undefined;

            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
