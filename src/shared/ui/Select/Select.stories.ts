import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Select } from './Select';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Select> = {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    args: {
        options: [
            { value: '1st', content: 'Первый пункт' },
            { value: '2nd', content: 'Второй пункт' },
        ],
    },
    decorators: [

    ],
};

export default meta;
type Story = StoryObj<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {};

export const WithLabel: Story = {
    args: {
        label: 'Заголовок селекта',
    },
};

export const DefaultDark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const DefaultDarkWithLabel: Story = {
    args: {
        label: 'Заголовок селекта',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
