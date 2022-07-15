import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextField, TextFieldProps } from '../src/components'

export default {
  title: 'componentes/TextField',
  component: TextField,
  argTypes: {
    label: {
        control: 'text'
    }
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const TextFieldComponent = Template.bind({})
TextFieldComponent.args = {
    label: 'Input label',
} as TextFieldProps