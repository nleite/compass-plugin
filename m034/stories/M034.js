import React from 'react';
import { storiesOf } from '@kadira/storybook';
import M034Component from '../src/components/M034';
import ConnectedM034Component from '../src/components/';

storiesOf('M034Component', module)
  .add('connected to store', () => <ConnectedM034Component />)
  .add('enabled', () => <M034Component status="enabled" />)
  .add('disabled', () => <M034Component status="disabled" />);
