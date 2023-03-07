<script lang="ts" setup>
const props = defineProps<{ title: string }>();
</script>

<template>
  <div class="skillBox">
    <h3 class="skillBoxHeading">{{ props.title }}</h3>
    <div class="iconContainer">
      <slot>No skills</slot>
    </div>
  </div>
</template>
