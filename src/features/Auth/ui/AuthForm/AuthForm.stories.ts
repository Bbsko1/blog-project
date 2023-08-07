import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { AuthForm } from './AuthForm';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof AuthForm> = {
    title: 'features/AuthForm',
    component: AuthForm,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    // tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    decorators: [
        StoreDecorator({
            AUTH: {
                loading: false,
                username: 'admin',
                password: '123a',
            },
        }),
    ],
};

export default meta;
type Story = StoryObj<typeof AuthForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const Error: Story = {
    decorators: [
        StoreDecorator({
            AUTH: {
                loading: false,
                username: 'admin',
                password: '123a',
                error: 'error',
            },
        }),
    ],
};

export const ErrorDark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            AUTH: {
                loading: false,
                username: 'admin',
                password: '123a',
                error: 'error',
            },
        }),
    ],
};
