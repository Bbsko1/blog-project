import { CounterSchema } from '../types/CounterSchema';
import { counterReducer, decrement, increment } from './counter.slice';

describe('getCounter', () => {
    test('test counter reducer increment', () => {
        const state: CounterSchema = {
            value: 10,
        };

        expect(counterReducer(state, increment())).toEqual({ value: 11 });
    });

    test('test counter reducer decrement', () => {
        const state: CounterSchema = {
            value: 10,
        };

        expect(counterReducer(state, decrement())).toEqual({ value: 9 });
    });

    test('test counter reducer increment empty state', () => {
        expect(counterReducer(undefined, increment())).toEqual({ value: 1 });
    });

    test('test counter reducer decrement empty state', () => {
        expect(counterReducer(undefined, decrement())).toEqual({ value: -1 });
    });
});
