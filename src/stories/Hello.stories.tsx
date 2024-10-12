import type { Meta } from '@storybook/react';
import Hello from '@/components/Hello';

const meta: Meta<typeof Hello> = {
  component: Hello,
  title: 'Hello',
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  args: {},
};
