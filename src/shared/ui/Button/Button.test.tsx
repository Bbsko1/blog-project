import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('classNames', () => {
    test('test button', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('test button addClass', () => {
        render(<Button theme="clear">Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug();
    });
});
