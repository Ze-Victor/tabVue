<script setup lang="ts">
// imports
import { ref } from "@vue/reactivity";
import Button from "../Button/Button.vue";

interface TabProps {
  tab: {
    buttonText: string;
    paneText: string;
  }[];
}

defineProps<TabProps>();

// states
const currentTab = ref(0);

// functions
const tabOnClick = (tabIndex: number) => {
  currentTab.value = tabIndex;
};

const isTabSelected = (tabIndex: number) => {
  if (tabIndex === currentTab.value) {
    return true;
  }

  return false;
};
</script>

<template>
  <div class="tab-container">
    <Button
      v-for="(tabItem, index) in tab"
      :key="tabItem.buttonText"
      :title="tabItem.buttonText"
      :selected="isTabSelected(index)"
      :index="index"
      @on-click="tabOnClick"
    ></Button>

    <div>{{ tab[currentTab].paneText }}</div>
  </div>
</template>

<style scoped src="./styles.css"></style>
