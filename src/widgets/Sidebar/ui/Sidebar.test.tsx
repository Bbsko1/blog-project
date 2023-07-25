import { fireEvent, screen } from '@testing-library/react';
import { RenderComponentTest } from 'shared/config/tests/RenderComponentTest';
import { Sidebar } from './Sidebar';

describe('classNames', () => {
    test('test sidebar', () => {
        RenderComponentTest(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test sidebar toggle', () => {
        RenderComponentTest(<Sidebar />);
        const toggleButton = screen.getByTestId('toggle-btn');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapse');
        screen.debug();
    });
});
