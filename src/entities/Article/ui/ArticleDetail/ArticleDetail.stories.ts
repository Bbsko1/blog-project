import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleDetail } from './ArticleDetail';

const meta: Meta<typeof ArticleDetail> = {
    title: 'entities/ArticleDetail',
    component: ArticleDetail,
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof ArticleDetail>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Light: Story = {};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
