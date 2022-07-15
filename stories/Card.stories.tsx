import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from '../src/components'


export default {
  title: 'componentes/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

export const CardComponent = () => {
    return (<Card>
        <h1>Olá, eu sou um card</h1>
    </Card>)
}