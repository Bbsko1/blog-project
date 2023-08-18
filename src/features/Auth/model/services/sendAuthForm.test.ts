import axios from 'axios';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { sendAuthForm } from './sendAuthForm';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('sendAuthForm.test', () => {
    test('success login', async () => {
        const userData = { id: 1, username: 'name', password: '123123' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));

        const asyncThunk = new TestAsyncThunk(sendAuthForm);
        const result = await asyncThunk.callThunk({ username: '123', password: '12312' });

        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(asyncThunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
        expect(asyncThunk.dispatch).toHaveBeenCalledTimes(3);
        expect(result.payload).toEqual(userData);
    });

    test('error login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const asyncThunk = new TestAsyncThunk(sendAuthForm);
        const result = await asyncThunk.callThunk({ username: '123', password: '12312' });

        expect(result.meta.requestStatus).toBe('rejected');
        expect(asyncThunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.payload).toEqual('error');
    });
});
