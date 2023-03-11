<script lang="ts" setup>
const projects = inject('projects');
</script>

<template>
  <section>
    <h2>My solo projects</h2>
    <div class="projectsContainer">
      <template v-for="project in projects" :key="project.id">
        <ProjectBox :project="project" />
      </template>
    </div>
  </section>
</template>
