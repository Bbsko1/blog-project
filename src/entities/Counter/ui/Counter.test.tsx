import { fireEvent, screen } from '@testing-library/react';
import { RenderComponentTest } from 'shared/config/tests/RenderComponentTest';
import { Counter } from './Counter';

describe('Counter', () => {
    test('test value', () => {
        RenderComponentTest(<Counter />, {
            initialState: {
                counter: { value: 10 },
            },
        });

        expect(screen.getByTestId('title-value')).toHaveTextContent('10');
    });

    test('test increment', () => {
        RenderComponentTest(<Counter />, {
            initialState: {
                counter: { value: 10 },
            },
        });
        const incrementBtn = screen.getByTestId('increment');

        fireEvent.click(incrementBtn);
        expect(screen.getByTestId('title-value')).toHaveTextContent('11');
    });

    test('test decrement', () => {
        RenderComponentTest(<Counter />, {
            initialState: {
                counter: { value: 10 },
            },
        });
        const decrementBtn = screen.getByTestId('decrement');

        fireEvent.click(decrementBtn);
        expect(screen.getByTestId('title-value')).toHaveTextContent('9');
    });
});
