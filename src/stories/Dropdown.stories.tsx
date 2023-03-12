import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../src/index.css';

import Dropdown from '../components/atoms/Dropdown';
import { CoffeeDataProps } from '../coffeeData';

export default {
  title: 'Example/Dropdown',
  component: Dropdown
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = () => (
  <Dropdown
    setSelectedBrewMethod={function (
      value: React.SetStateAction<CoffeeDataProps>
    ): void {
      throw new Error('Function not implemented.');
    }}
  />
);

export const Primary = Template.bind({});
