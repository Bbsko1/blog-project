import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    args: {
        children: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos exercitationem dolorum tenetur maiores ullam, vitae recusandae molestiae sapiente quae consequatur obcaecati doloremque corrupti ducimus, labore iure iusto voluptatum temporibus quo. Aut, consequuntur optio. Mollitia dicta maxime maiores pariatur ad ab temporibus obcaecati tempora vel sequi, labore optio aliquam quia distinctio.',
    },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Light: Story = {
    args: {
        className: Theme.LIGHT,
    },
};

export const Dark: Story = {
    args: {
        className: Theme.DARK,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
