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

const currentTab = ref(0);

const onClick = (tabIndex: number) => {
  currentTab.value = tabIndex;
};
</script>

<template>
  <div class="tabButton">
    <Button
      v-for="(tabItem, index) in tab"
      :key="tabItem.buttonText"
      :text="tabItem.buttonText"
      :index="index"
      @on-click="onClick"
    ></Button>
  </div>

  <div class="tabPane">{{ tab[currentTab].paneText }}</div>
</template>

<style scoped src="./styles.css"></style>
