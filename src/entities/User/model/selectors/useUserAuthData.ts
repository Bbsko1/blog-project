import { StateSchema } from 'app/providers/StoreProvider';

export const useUserAuthData = (state: StateSchema) => state.USER.authData;
