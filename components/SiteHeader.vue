<script lang="ts" setup>
const toggled = ref<boolean>(false);
</script>

<template>
  <header class="headerContainer" :class="toggled ? 'headerActive' : ''">
    <NuxtLink to="/">
      <img src="" alt="My logo" />
    </NuxtLink>
    <button
      type="button"
      class="burgerButton"
      :class="toggled ? 'toggled' : ''"
      @click="($event) => (toggled = !toggled)"
    >
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </button>
    <Transition name="scrollIn">
      <nav v-if="toggled">
        <ul class="list">
          <li><NuxtLink to="/">About</NuxtLink></li>
          <li><NuxtLink to="/experience">Experience</NuxtLink></li>
          <li><NuxtLink to="/projects">Projects</NuxtLink></li>
        </ul>
      </nav>
    </Transition>
  </header>
</template>
