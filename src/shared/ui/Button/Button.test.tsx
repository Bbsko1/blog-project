import { render, screen } from '@testing-library/react';
import { Button, ButtonThemes } from './Button';

describe('classNames', () => {
    test('test button', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('test button addClass', () => {
        render(<Button theme={ButtonThemes.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug();
    });
});
