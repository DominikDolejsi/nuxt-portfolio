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
  techStack: string[];
  introduction: string;
  result: string;
};
const projects = inject('projects') as Project[];

const project = projects[pageId];
</script>

<template>
  <main>
    <h1>{{ project.name }}</h1>
    <a :href="`${project.url}`" class="pageLink">home page</a>
    <div class="projectBody">
      <p class="techTitle">Tech stack</p>
      <div class="techContainer">
        <div v-for="tech of project.techStack" :key="tech" class="techBox">
          <p>{{ tech }}</p>
        </div>
      </div>
      <div class="textBox">
        <div class="textLine"></div>
        <p>{{ project.introduction }}</p>
      </div>
      <img src="http://picsum.photos/300/200" alt="" />
      <div class="textBox">
        <div class="textLine"></div>
        <p>{{ project.result }}</p>
      </div>
      <img src="http://picsum.photos/300/200" alt="" />
    </div>
  </main>
</template>
