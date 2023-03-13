<script lang="ts" setup>
type Experience = {
  id: number;
  name: string;
  date: string;
  type: string;
  body: string;
  show: boolean;
};

interface Props {
  experiences: Experience[];
}
const props = defineProps<Props>();
</script>

<template>
  <div
    v-for="experience in props.experiences"
    :key="experience.id"
    class="experienceBox"
  >
    <div class="experienceHeader">
      <p class="date">{{ experience.date }}</p>
      <p class="type">{{ experience.type }}</p>
      <p class="name">{{ experience.name }}</p>
      <button
        type="button"
        class="arrowButton"
        @click="(event) => (experience.show = !experience.show)"
      >
        <div
          class="arrowLeft"
          :class="experience.show ? 'closeLeft' : ''"
        ></div>
        <div
          class="arrowRight"
          :class="experience.show ? 'closeRight' : ''"
        ></div>
      </button>
    </div>
    <div v-if="experience.show" class="experienceBody">
      <div class="textBox">
        <div class="textLine"></div>
        <p>{{ experience.body }}</p>
      </div>
    </div>
  </div>
</template>
