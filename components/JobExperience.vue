<script lang="ts" setup>
type Experience = {
  id: number;
  name: string;
  date: string;
  type: string;
  body: string;
  show: boolean;
};

const experiences = ref<Experience[]>([
  {
    id: 1,
    name: 'My first developer job',
    date: '',
    type: '',
    body: 'This part is empty, you can help by expanding it.',
    show: false,
  },
]);
</script>

<template>
  <section>
    <h2>Job experience</h2>
    <div class="experienceContainer">
      <ExperienceBox :experiences="experiences" />
    </div>
  </section>
</template>
