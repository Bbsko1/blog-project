import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslations } from 'shared/lib/renderWithTranslations/renderWithTranslations';
import { Sidebar } from './Sidebar';

describe('classNames', () => {
    test('test sidebar', () => {
        renderWithTranslations(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test sidebar toggle', () => {
        renderWithTranslations(<Sidebar />);
        const toggleButton = screen.getByTestId('toggle-btn');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapse');
        screen.debug();
    });
});
