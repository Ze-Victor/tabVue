<script setup lang="ts">
import Tab from "./components/Tab/Tab.vue";

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
</script>

<template>
  <Tab :tab="tab" />
</template>

<style></style>
