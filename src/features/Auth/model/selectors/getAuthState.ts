import { StateSchema } from 'app/providers/StoreProvider';
import { authInitialState } from '../slice/auth.slice';

export const getAuthState = (state: StateSchema) => state.AUTH || authInitialState;
