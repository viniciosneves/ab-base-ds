import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ButtonProps } from '../src/components'

export default {
  title: 'componentes/Button',
  component: Button,
  argTypes: {
    text: { control: 'text' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Button',
  context: 'primary',
} as ButtonProps;

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Button',
  context: 'secondary',
} as ButtonProps;
