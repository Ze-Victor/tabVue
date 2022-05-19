import Tab from "./Tab.vue";

const tab = [
  {
    buttonText: "Tab 1",
    paneText: "Texto 1",
  },
  {
    buttonText: "Tab 2",
    paneText: "Texto 2",
  },
  {
    buttonText: "Tab 3",
    paneText: "Texto 3",
  },
  {
    buttonText: "Tab 4",
    paneText: "Texto 4",
  },
];

export default {
  title: "Tab",
  component: Tab,
};

const Template = (args) => ({
  components: { Tab },

  setup() {
    return { args };
  },

  template: '<Tab v-bind="args" />',
});

export const Primary = Template.bind({});

Primary.args = {
  tab,
};
