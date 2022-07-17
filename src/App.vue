<script setup lang="ts">
import Tab from "./components/Tab/Tab.vue";
import FormTab from "./components/FormTab/FormTab.vue";
</script>

<template>
  <div class="paneApp">
    <FormTab />
    <Tab />
  </div>
</template>

<style>
.paneApp {
  display: flex;
  margin-left: 10px;
}
</style>
