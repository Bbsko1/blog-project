import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
    title: 'shared/Icon',
    component: Icon,
    args: {
        Svg: EyeIcon,
    },
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                story: 'Вывод иконок через компонент',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Light: Story = {
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
