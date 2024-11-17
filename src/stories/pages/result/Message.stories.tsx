import Message from '@/pages/result/panel/Message';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Result/Message',
  component: Message,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Mine: Story = {
  args: {
    message: '안녕! 잘 지내?',
    sender: '나',
  },
};

export const Other: Story = {
  args: {
    message: '안녕! 오랜만이야. 잘 지내고 있어.',
    sender: '친구',
  },
};
