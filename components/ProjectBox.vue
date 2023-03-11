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

interface Props {
  project: Project;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="projectBox">
    <p class="projectName">{{ props.project.name }}</p>
    <img
      :src="`${props.project.images.thumbnail}`"
      alt=""
      class="projectImage"
    />
    <div class="projectButton">
      <NuxtLink :to="`/projects/${props.project.id}`" class="projectPage"
        >About</NuxtLink
      >
    </div>
    <div class="projectButton">
      <a :href="`${props.project.url}`" class="projectLink">Home page</a>
    </div>
  </div>
</template>
