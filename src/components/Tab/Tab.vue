<script setup lang="ts">
// imports
import { ref } from "@vue/reactivity";
import Button from "../Button/Button.vue";
import { tabStore } from "../../store/tab.store";

const currentTab = ref(0);

const onClick = (tabIndex: number) => {
  currentTab.value = tabIndex;
};
</script>

<template>
  <div v-if="tabStore.listTabs.length > 0" class="pane">
    <div class="title">Conteúdo</div>
    <div class="tabButton">
      <Button
        v-for="(tabItem, index) in tabStore.listTabs"
        :key="`title_${index}`"
        :text="tabItem.title"
        :index="index"
        :class="currentTab === index ? 'selected' : null"
        @on-click="onClick"
      ></Button>
    </div>

    <div class="tabPane">{{ tabStore.listTabs[currentTab].text }}</div>
  </div>
  <div v-else class="pane">
    <div class="title">Conteúdo</div>
    <div class="tabButton">
      <Button
        :key="`title_${0}`"
        :text="'Tab 1'"
        :index="0"
        class="selected"
        @on-click="onClick"
      ></Button>
    </div>

    <div class="tabPane">{{ "Sem Conteúdo" }}</div>
  </div>
</template>

<style scoped src="./styles.css"></style>
