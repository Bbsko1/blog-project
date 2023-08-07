import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonThemes } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    // tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    args: {
        children: 'Button',
    },
    decorators: [

    ],
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {};

export const Clear: Story = {
    args: {
        theme: ButtonThemes.CLEAR,
    },
};

export const Disabled: Story = {
    args: {
        theme: ButtonThemes.OUTLINE,
        disabled: true,
    },
};

export const Outline: Story = {
    args: {
        theme: ButtonThemes.OUTLINE,
    },
};

export const OutlineL: Story = {
    args: {
        theme: ButtonThemes.OUTLINE,
        size: 'L',
    },
};

export const OutlineXL: Story = {
    args: {
        theme: ButtonThemes.OUTLINE,
        size: 'XL',
    },
};

export const Background: Story = {
    args: {
        theme: ButtonThemes.BACKGROUND,
    },
};

export const BackgroundInverted: Story = {
    args: {
        theme: ButtonThemes.BACKGROUND_INVERTED,
    },
};

export const DefaultDark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const ClearDark: Story = {
    args: {
        theme: ButtonThemes.CLEAR,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const OutlineDark: Story = {
    args: {
        theme: ButtonThemes.OUTLINE,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const BackgroundDark: Story = {
    args: {
        theme: ButtonThemes.BACKGROUND,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const BackgroundInvertedDark: Story = {
    args: {
        theme: ButtonThemes.BACKGROUND_INVERTED,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const Square: Story = {
    args: {
        theme: ButtonThemes.BACKGROUND_INVERTED,
        children: '<',
        square: true,
    },
};

export const SquareL: Story = {
    args: {
        theme: ButtonThemes.BACKGROUND_INVERTED,
        children: '<',
        square: true,
        size: 'L',
    },
};

export const SquareXL: Story = {
    args: {
        theme: ButtonThemes.BACKGROUND_INVERTED,
        children: '<',
        square: true,
        size: 'XL',
    },
};
