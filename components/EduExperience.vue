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
    name: 'GreenFox Academy bootcamp',
    date: '2022-2023',
    type: 'Full stack',
    body: 'These five months of intensive learning gave me good understanding of        JavaScript, HTML, and CSS. The whole course culminated with a team project where I learned about React and Java Spring, in addition to agile development, teamwork, and CI/DC.',
    show: false,
  },
]);
</script>

<template>
  <section>
    <h2>Education</h2>
    <div class="experienceContainer">
      <ExperienceBox :experiences="experiences" />
    </div>
  </section>
</template>
