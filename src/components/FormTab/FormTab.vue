<script setup lang="ts">
import { ref, reactive } from "vue";
import { inRange, required } from "../../utils/validation";
import { tabStore, type TabItem } from "../../store/tab.store";

const tabs = reactive<TabItem[]>([])

const numTabs = ref(0);
const numTabsIsValid = inRange(1, 5)

function changeNumOptions(value: string) {

  const num = parseInt(value, 10);

  if (num <= tabs.length) {
    // === ALTERAÇÃO ===
    tabs.splice(num, tabs.length - num);
  } else {
    // ou aumenta o tamanho do array com strings vazias nos novos elementos
    const tail = Array(num - tabs.length).fill({
      title: "",
      text: "",
    });
    tail.forEach((o) => tabs.push(o));
  }
}

const buttonDisabled = () => {
    if (tabs.length >0 && tabs[0].title !== "" && tabs[0].text !== "") {
      return true;
    }

    return false;
  };

const saveTabs = () => {
  tabStore.saveNewTabs({...tabs});
};
</script>

<template>
  <div class="paneForm">
    <h2>Tabs</h2>
    <form class="formContent">
      <label class="labelText">Número de Tabs: </label>
      <input
        type="number"
        class="inputText"
        v-model="numTabs"
        @change="changeNumOptions(($event.target as HTMLInputElement).value)"
      />
      <div v-if="numTabs < 0 || numTabs > 5" class="alertValidation">
        {{ numTabsIsValid("numTabs") }}
      </div>
      <div class="separator"></div>
    </form>

    <div v-for="index in tabs" :key="`tab_${index}`">
      <form class="formContent">
        <label class="labelText">Título: </label>
        <input type="text" class="inputText" v-model="index.title" />

        <label class="labelText">Conteúdo: </label>
        <input type="text" class="inputText" v-model="index.text" />

        <div class="separator"></div>
      </form>
    </div>
    <button :disabled="!buttonDisabled()" v-on:click="saveTabs">Salvar</button>
  </div>
</template>

<style scoped src="./styles.css"></style>
