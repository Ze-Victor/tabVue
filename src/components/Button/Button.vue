<script setup lang="ts">
interface ButtonProps {
  text: string;
  index: number;
}

interface ButtonEvents {
  onClick: (index: number) => void;
}

defineProps<ButtonProps>();
defineEmits<ButtonEvents>();
</script>

<template>
  <button type="button" @click="$emit('onClick', index)">{{ text }}</button>
</template>

<style scoped src="./styles.css"></style>
