<script setup lang="ts">
interface ButtonProps {
  title: string;
  selected: boolean;
  index: number;
}

interface ButtonEvents {
  onClick: (index: number) => void;
}

defineProps<ButtonProps>();
defineEmits<ButtonEvents>();
</script>

<template>
  <button
    type="button"
    :class="{ selected: selected }"
    :title="$props.title"
    @click="$emit('onClick', index)"
  >
    {{ title }}
  </button>
</template>

<style scoped src="./styles.css"></style>
