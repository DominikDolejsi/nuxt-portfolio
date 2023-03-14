<script lang="ts" setup>
const toggled = ref<boolean>(false);
const isLargeScreen = useMediaQuery('(min-width: 1024px)');
</script>

<template>
  <header class="headerContainer" :class="toggled ? 'headerActive' : ''">
    <NuxtLink to="/" class="logo">
      <svg
        width="20.322"
        height="19.385"
        version="1.1"
        viewBox="0 0 5.3768 5.1289"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(-.63034 -.51267)">
          <g transform="matrix(.75378 0 0 .76867 -.40528 -.40322)">
            <path
              d="m1.7708 1.9716c7.1552-2.2783 8.8478 6.1937 1.999 5.4493-0.49608 0.056159-1.1832 0.10187-1.5882-0.29209-0.35333-0.45042-0.070993-1.346 0.83062-1.2414 0.68448 0.05959 1.0878 0.58462 1.5061 0.50202l0.045639-2.3002"
              fill="none"
              stroke="#256e57"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".79375"
            />
            <g fill="#196c69">
              <ellipse
                transform="matrix(.94127 .33764 -.58414 .81165 0 0)"
                cx="4.7344"
                cy="2.8943"
                rx="1.3057"
                ry=".41851"
                style="paint-order: markers fill stroke"
              />
              <ellipse
                transform="matrix(-.8864 .46293 -.15022 -.98865 0 0)"
                cx="-5.3598"
                cy="-5.9857"
                rx=".71199"
                ry=".28539"
                style="paint-order: markers fill stroke"
              />
              <ellipse
                transform="matrix(.19786 .98023 -.99079 -.1354 0 0)"
                cx="2.3444"
                cy="-3.7235"
                rx=".81681"
                ry=".36034"
                style="paint-order: markers fill stroke"
              />
            </g>
          </g>
        </g>
      </svg>
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
