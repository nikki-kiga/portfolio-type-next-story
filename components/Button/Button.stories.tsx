import { Story, Meta } from '@storybook/react/types-6-0'
import React from 'react';
import Button, { Props } from "./Button";

export default {
  title: 'Button',
  component: Button
} as Meta

const Template: Story<Props> = (args) => <Button {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  label: 'Primary Button',
}

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  label: 'Secondary Button'
}
