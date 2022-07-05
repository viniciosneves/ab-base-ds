import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../src/components'

export default {
  title: 'componentes/Button',
  component: Button,
  argTypes: {
    text: { control: 'text' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primario = Template.bind({});
Primario.args = {
  text: 'Button',
};
