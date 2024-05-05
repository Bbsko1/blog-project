import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text } from './Text';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    // tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    args: {
    },
    decorators: [

    ],
};

export default meta;
type Story = StoryObj<typeof Text>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const TextTitle: Story = {
    args: {
        title: 'Title',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, sequi.',
    },
};

export const TextTitleDark: Story = {
    args: {
        title: 'Title',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, sequi.',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const TextSizeXL: Story = {
    args: {
        title: 'Title',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, sequi.',
        textSize: 'L',
    },
};

export const TextSizeXLDark: Story = {
    args: {
        title: 'Title',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, sequi.',
        textSize: 'L',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const OnlyText: Story = {
    args: {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, sequi.',
    },
};

export const OnlyTextDark: Story = {
    args: {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, sequi.',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const OnlyTitle: Story = {
    args: {
        title: 'Title',
    },
};

export const OnlyTitleDark: Story = {
    args: {
        title: 'Title',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const Error: Story = {
    args: {
        title: 'Title',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, sequi.',
        theme: 'error',
    },
};

export const ErrorDark: Story = {
    args: {
        title: 'Title',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, sequi.',
        theme: 'error',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
