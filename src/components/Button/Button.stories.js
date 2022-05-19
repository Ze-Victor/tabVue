import Button from "./Button.vue";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => ({
  components: { Button },

  setup() {
    return { args };
  },

  template: '<Button v-bind="args" />',
});

export const Primary = Template.bind({});

Primary.args = {
  text: "Botão",
  index: 1,
};
