<script lang="ts" setup>
const route = useRoute();
const pageId = Number(route.params.id);
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
const projects = inject('projects') as Project[];

const project = projects[pageId];
</script>

<template>
  <main>
    <h1>{{ project.name }}</h1>
    <a :href="`${project.url}`">landing page</a>
    <div>
      <p>Tech stack</p>
      <p>{{ project.tech }}</p>
      <p>{{ project.introduction }}</p>
      <img src="http://picsum.photos/300/200" alt="" />
      <p>{{ project.result }}</p>
      <img src="http://picsum.photos/300/200" alt="" />
    </div>
  </main>
</template>
