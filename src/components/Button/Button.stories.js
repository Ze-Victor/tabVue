import Button from "./Button.vue";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    title: { control: "text" },
    selected: { control: "boolean" },
    index: { control: "number" },
    onClick: {},
  },
};

const Template = (args) => ({
  components: { Button },

  setup() {
    return { args };
  },

  template: '<Button v-bind="args" />',
});

export const ButtonComponent = Template.bind({});

ButtonComponent.args = {
  selected: false,
  title: "Botão",
  index: 1,
};

ButtonComponent.parameters = {
  docs: {
    source: {
      code: `
<Button 
  :selected="false" 
  title="Botão" 
  :index="1" 
  @on-click="onClickFunction" 
/>
      `,
    },
  },
};
