<script lang="ts" setup>
// const letters = 'abcdefghijklmnopqrstuvwxyz';
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const wordShowcase = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target === null) return;
  if (!target.classList.contains('changingWord')) return;
  target.classList.add('deactivated');
  let iterations = 0;
  let phase = 0;
  const delay = 20;
  const { words } = target.dataset;
  if (!words) return;
  const wordArray: string[] = words.split('_');

  const interval = setInterval(() => {
    target.innerText = target.innerText
      .split('')
      .map((letter, index) => {
        if (phase === 0) {
          if (
            index === wordArray[0].length - 1 &&
            iterations >= wordArray[0].length
          ) {
            phase += 1;
            iterations = 0;
          }
          if (index < wordArray[0].length - iterations - 1) {
            return wordArray[0][index];
          }
          return letters[Math.floor(Math.random() * 26)];
        }
        if (phase === 1) {
          if (
            index === wordArray[0].length - 1 &&
            iterations >= wordArray[1].length + delay
          ) {
            phase += 1;
            iterations = 0;
          }
          if (index < iterations && index < wordArray[1].length) {
            return wordArray[1][index];
          }
          return letters[Math.floor(Math.random() * 26)];
        }
        if (phase === 2) {
          if (
            index === wordArray[0].length - 1 &&
            iterations >= wordArray[1].length
          ) {
            phase += 1;
            iterations = 0;
          }
          if (index < wordArray[1].length - iterations) {
            return wordArray[1][index];
          }
          return letters[Math.floor(Math.random() * 26)];
        }
        if (phase === 3) {
          if (
            index === wordArray[0].length - 1 &&
            iterations >= wordArray[2].length + delay
          ) {
            phase += 1;
            iterations = 0;
          }
          if (index < iterations && index < wordArray[2].length) {
            return wordArray[2][index];
          }
          return letters[Math.floor(Math.random() * 26)];
        }
        if (phase === 4) {
          if (
            index === wordArray[0].length - 1 &&
            iterations >= wordArray[2].length
          ) {
            phase += 1;
            iterations = 0;
          }
          if (index < wordArray[2].length - iterations) {
            return wordArray[2][index];
          }
          return letters[Math.floor(Math.random() * 26)];
        }
        if (phase === 5) {
          if (
            index === wordArray[0].length - 1 &&
            iterations >= wordArray[3].length + delay
          ) {
            phase += 1;
            iterations = 0;
          }
          if (index < iterations && index < wordArray[3].length) {
            return wordArray[3][index];
          }
          return letters[Math.floor(Math.random() * 26)];
        }
        if (phase === 6) {
          if (
            index === wordArray[0].length - 1 &&
            iterations >= wordArray[3].length
          ) {
            phase += 1;
            iterations = 0;
          }
          if (index < wordArray[3].length - iterations) {
            return wordArray[3][index];
          }
          return letters[Math.floor(Math.random() * 26)];
        }
        if (phase === 7) {
          if (
            index === wordArray[0].length - 1 &&
            iterations >= wordArray[0].length + 1
          ) {
            phase += 1;
          }
          if (index < iterations) {
            return wordArray[0][index];
          }
          return letters[Math.floor(Math.random() * 26)];
        }
        return true;
      })
      .join('');

    if (phase === 8) {
      target.classList.remove('deactivated');
      clearInterval(interval);
    }
    iterations += 1 / 3;
  }, 30);
};
</script>

<template>
  <section>
    <h2 class="sectionHeading">Introduction</h2>
    <div class="introContainer">
      <p id="summary">
        Hi, I am Dominik. A fresh junior full-stack software developer from the
        Czech Republic searching for an opportunity to utilize and deepen my
        knowledge.
      </p>
      <div class="imgContainer">
        <img class="profilePhoto" src="~/assets/img/MyPhoto.jpg" alt="" />
      </div>
      <p
        id="background"
        @click="(event) => wordShowcase(event)"
        @keyup.enter="(event) => wordShowcase(event)"
      >
        Before I became a developer, I studied
        <span
          tabindex="0"
          class="changingWord"
          data-words="PALEONTOLOGY_FOSSILS_DINOSAURS_TRILOBITES"
          >PALEONTOLOGY</span
        >
        , and in my free time, I still try to keep up to date with current
        scientific knowledge. This passion of mine often gets combined with my
        love for
        <span
          tabindex="0"
          class="changingWord"
          data-words="VIDEO GAMES_PLANET ZOO_THRIVE_SAURIAN"
          >VIDEO GAMES</span
        >. I am also a big fan of
        <span
          tabindex="0"
          class="changingWord"
          data-words="FANTASY LITERATURE_J.R.R. TOLKIEN_A. SAPKOWSKI_ANTHONY RYAN"
          >FANTASY LITERATURE</span
        >
        and shows. For some time, I have also been caring for a group of Crested
        Gekkos. But lately, I am spending more and more free time learning
        <span
          tabindex="0"
          class="changingWord"
          data-words="SOFTWARE DEVELOPMENT_RESPONSIVE DESIGN_ACCESSIBLE WEBSITES_MAINTAINABLE CODE"
          >SOFTWARE DEVELOPMENT</span
        >.
      </p>
    </div>
  </section>
</template>

<!--  data-words="PALEONTOLOGY FOSSILS DINOSARUS TRILOBITES" data-words="paleontology fossils dinosaurs trilobites"-->
