import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    args: {
        children: 'Text',
        to: '/',
    },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
    args: {
        theme: 'primary',
    },
};

export const Inverted: Story = {
    args: {
        theme: 'inverted',
    },
};

export const PrimaryDark: Story = {
    args: {
        theme: 'primary',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const InvertedDark: Story = {
    args: {
        theme: 'inverted',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
