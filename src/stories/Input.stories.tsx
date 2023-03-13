import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../src/index.css';

import Input from '../components/Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: { setDesiredOunces: { action: 'input in ounces' } }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
