import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { IncrementField } from '../src/components'


export default {
  title: 'componentes/IncrementField',
  component: IncrementField,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof IncrementField>;

export const IncrementFieldComponent = () => {
    return (<IncrementField onChange={value => console.log(value)}/>)
}