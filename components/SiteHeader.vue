<script lang="ts" setup>
const toggled = ref<boolean>(false);
const isLargeScreen = useMediaQuery('(min-width: 1024px)');
</script>

<template>
  <header class="headerContainer" :class="toggled ? 'headerActive' : ''">
    <NuxtLink to="/" class="logo">
      <img src="http://picsum.photos/32/32" alt="My logo" />
    </NuxtLink>
    <button
      v-if="!isLargeScreen"
      type="button"
      class="burgerButton"
      :class="toggled ? 'toggled' : ''"
      @click="($event) => (toggled = !toggled)"
    >
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </button>
    <Transition v-if="!isLargeScreen" name="scrollIn">
      <nav v-if="toggled">
        <ul class="list">
          <li>
            <NuxtLink
              to="/"
              class="navLink"
              @click="($event) => (toggled = !toggled)"
              >About</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/experience"
              class="navLink"
              @click="($event) => (toggled = !toggled)"
              >Experience</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/projects"
              class="navLink"
              @click="($event) => (toggled = !toggled)"
              >Projects</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </Transition>
    <nav v-if="isLargeScreen">
      <ul class="list">
        <li>
          <NuxtLink to="/" class="navLink">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/experience" class="navLink">Experience</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/projects" class="navLink">Projects</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
