import { StateSchema } from 'app/providers/StoreProvider';

export const getCounterValue = (state: StateSchema) => state.COUNTER.value;
