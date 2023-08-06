import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { AuthSchema } from 'features/Auth';

export interface StateSchema {
    COUNTER: CounterSchema;
    USER: UserSchema;
    AUTH: AuthSchema
}
