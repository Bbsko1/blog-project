import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Light: Story = {
    args: {
        imgSrc: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    },
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
    args: {
        imgSrc: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    },
};

export const CustomSize: Story = {
    args: {
        imgSrc: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
        height: 300,
        width: 300,
    },
};
