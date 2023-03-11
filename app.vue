<script lang="ts" setup>
type ProjectImages = {
  thumbnail: string;
  first: string;
  second: string;
};

type Project = {
  id: number;
  name: string;
  url: string;
  images: ProjectImages;
  tech: string[];
  introduction: string;
  result: string;
};

const projects: Project[] = [
  {
    id: 0,
    name: 'Calculator',
    url: 'https://calculator-vite-vue.vercel.app/',
    images: {
      thumbnail: 'http://picsum.photos/300/200',
      first: 'http://picsum.photos/300/200',
      second: 'http://picsum.photos/300/200',
    },
    tech: ['Vue', 'Vite'],
    introduction: '',
    result: '',
  },
];

provide('projects', projects);
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
