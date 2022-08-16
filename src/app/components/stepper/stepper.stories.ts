// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { StepperComponent } from './stepper.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Components/Stepper',
  component: StepperComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    size: { control: 'size' },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<StepperComponent> = (args: StepperComponent) => ({
  props: args,
});

export const Stepper = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Stepper.args = {
isLinear: false,
};

