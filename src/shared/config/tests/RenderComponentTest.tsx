/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTests from 'shared/config/i18n/i18nForTests';

type RenderComponentTestProps = {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
}

export const RenderComponentTest = (
    component: ReactNode,
    options: RenderComponentTestProps = {},
) => {
    const {
        route = '/',
        initialState,
    } = options;

    return render(
        <StoreProvider initialState={initialState as StateSchema}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>,
    );
};
