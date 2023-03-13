import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../src/index.css';

import { Button } from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: {
      action: 'Button in ounces'
    },
    text: { control: 'text', defaultValue: 'This is a button' }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
