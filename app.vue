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
      thumbnail: 'http://picsum.photos/300/200',
      first: 'http://picsum.photos/300/200',
      second: 'http://picsum.photos/300/200',
    },
    techStack: ['Vue', 'Vite'],
    introduction:
      'I have started working on this project right after I finished bootcamp, to keep myself in the programming flow and to try out new tech. I learned about Vue from a friend and was excited to try it out.\nMy goals for this project were, to learn basics of new framework and to try to finish small project purely on my own. Optimally I would end up with calculator with some basic functionality',
    result:
      'As a result I learned how to operate and orient myself inside Vue enviroment, which I really enjoyed.\nI was litlle bit suprised when it came to writing calculating functions, I had not anticipated the limits of javascript in basic mathematical operations, but after few days I managed to make the calculator behave as I wanted to. Thats how the little diode on the top of the calculator came to be. Informing user when the calculator rounded some numbers "behind the scenes". In the end, this little struggle pushed me to deepen my knowledge when it comes to math and numbers in javascript, and I was very happy with the result.\nLast thing I did was history panel on the side of the calculator. this histroy feature was comparatevely easy to implement, and after a blunder with CSS, I managed to put it behind the calculator. Overall, i was really happy with this project. IT helped me gain confidence and energy into future projects.',
  },
];

provide('projects', projects);
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
