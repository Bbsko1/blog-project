import { StateSchema } from 'app/providers/StoreProvider';
import { getAuthState } from './getAuthState';

describe('getAuthState.test', () => {
    test('getAuthState return error', () => {
        const state: DeepPartial<StateSchema> = {
            AUTH: {
                error: 'error',
            },
        };

        expect(getAuthState(state as StateSchema).error).toEqual('error');
    });
    test('getAuthState return error - undefined', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getAuthState(state as StateSchema).error).toEqual(undefined);
    });
    test('getAuthState return loading true', () => {
        const state: DeepPartial<StateSchema> = {
            AUTH: {
                loading: true,
            },
        };

        expect(getAuthState(state as StateSchema).loading).toEqual(true);
    });
    test('getAuthState return loading false', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getAuthState(state as StateSchema).loading).toEqual(false);
    });
    test('getAuthState return username', () => {
        const state: DeepPartial<StateSchema> = {
            AUTH: {
                username: 'testName',
            },
        };

        expect(getAuthState(state as StateSchema).username).toEqual('testName');
    });
    test('getAuthState return empty username', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getAuthState(state as StateSchema).username).toEqual('');
    });
    test('getAuthState return password', () => {
        const state: DeepPartial<StateSchema> = {
            AUTH: {
                password: 'password',
            },
        };

        expect(getAuthState(state as StateSchema).password).toEqual('password');
    });
    test('getAuthState return empty password', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getAuthState(state as StateSchema).password).toEqual('');
    });
});
