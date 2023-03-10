import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../src/index.css';

import Dropdown from '../components/atoms/Dropdown';

export default {
  title: 'Example/Dropdown',
  component: Dropdown
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = () => <Dropdown />;

export const Primary = Template.bind({});
