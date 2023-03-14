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

interface Props {
  project: Project;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="projectBox">
    <p class="projectName">{{ props.project.name }}</p>
    <div class="imageBox">
      <img
        :src="`${props.project.images.thumbnail}`"
        alt=""
        class="projectImage"
      />
      <div class="projectLink left">
        <NuxtLink :to="`/projects/${props.project.id}`">Learn more</NuxtLink>
      </div>
      <div class="projectLink right">
        <a :href="`${props.project.url}`">Home page</a>
      </div>
    </div>
  </div>
</template>
