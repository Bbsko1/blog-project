import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import <FTName | pascalcase> from './<FTName | pascalcase>';

const meta: Meta<typeof <FTName | pascalcase>> = {
    title: 'pages/<FTName | pascalcase>',
    component: <FTName | pascalcase>,
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof <FTName | pascalcase>>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Light: Story = {};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
