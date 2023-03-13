import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../src/index.css';

import Dropdown from '../components/Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: { setSelectedBrewMethod: { action: 'selection made' } }
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Primary = Template.bind({});
