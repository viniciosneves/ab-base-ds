import React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from '../src/components';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button text='Button' />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
