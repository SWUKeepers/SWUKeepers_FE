import { Meta, StoryObj } from '@storybook/react';
import Loading from '@/components/Loading';

const meta: Meta = {
  title: 'components/Loading',
  component: Loading,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // Add your default args here
  },
};
