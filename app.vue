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
  techStack: string[];
  introduction: string;
  result: string;
};

const projects: Project[] = [
  {
    id: 0,
    name: 'Calculator',
    url: 'https://calculator-vite-vue.vercel.app/',
    images: {
      thumbnail: '/img/calc_thumbnail.png',
      first: '/img/calc_first.png',
      second: '/img/calc_second.png',
    },
    techStack: ['Vue', 'Vite'],
    introduction:
      'I started working on this project right after I finished boot camp to keep myself in the programming flow and to try out new tech. I learned about Vue from a friend and was excited to try it.\nMy goals for this project were to learn the basics of the new framework and finish a small project on my own. Optimally I would end up with a calculator with some basic functionality.',
    result:
      'As a result, I learned how to operate and orient myself inside the Vue environment, which I enjoyed. I was a little bit surprised when it came to writing calculating functions.\nI had not anticipated the limits of javascript in basic mathematical operations, but after a few days, I managed to make the calculator behave as I wanted it to. That is how the little diode on the top of the calculator came to be, informing the user when the calculator rounded some numbers "behind the scenes". This little struggle pushed me to deepen my knowledge of math and numbers in javascript.\nThe last thing I did was the history panel on the side of the calculator. This history feature was comparatively easy to implement, and after a blunder with CSS, I managed to put it behind the calculator. Overall, I was satisfied with this project. It helped me gain confidence and energy for future projects.',
  },
];

provide('projects', projects);
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
