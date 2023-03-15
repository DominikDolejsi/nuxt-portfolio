<script lang="ts" setup>
// const letters = 'abcdefghijklmnopqrstuvwxyz';
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const wordShowcase = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target === null) return;
  if (!target.classList.contains('changingWord')) return;
  target.classList.add('deactivated');
  const { words } = target.dataset;
  if (!words) return;
  const wordArray: string[] = words.split('_');
  if (wordArray.length < 2) return;
  let memory = {
    phase: 0,
    iterations: 0,
  };

  const delay = 10;
  const iterationSpeed = 1 / 3;

  const showWord = (newWord: string, currentWord: string[]) => {
    const changedWord = currentWord.map((letter, index) => {
      if (index < memory.iterations && index < newWord.length) {
        return newWord[index];
      }
      return letters[Math.floor(Math.random() * 26)];
    });
    return changedWord;
  };
  const deleteWord = (newWord: string, currentWord: string[]) => {
    const changedWord = currentWord.map((letter, index) => {
      if (index < newWord.length - memory.iterations) {
        return newWord[index];
      }
      return letters[Math.floor(Math.random() * 26)];
    });
    return changedWord;
  };

  const progressPhase = (
    currentIterations: number,
    currentWord: string,
    timeDelay?: number
  ) => {
    if (
      timeDelay === undefined
        ? currentIterations >= currentWord.length
        : currentIterations >= currentWord.length + timeDelay
    ) {
      return { iterations: 0, phase: memory.phase + 1 };
    }
    return { iterations: memory.iterations, phase: memory.phase };
  };
  let targetArray = target.innerText.split('');

  const interval = setInterval(() => {
    if (memory.phase === 0) {
      targetArray = deleteWord(wordArray[0], targetArray);
      memory = progressPhase(memory.iterations, wordArray[0]);
    } else if (memory.phase === wordArray.length * 2 - 1) {
      targetArray = showWord(wordArray[0], targetArray);
      memory = progressPhase(memory.iterations, wordArray[0]);
    } else if (memory.phase % 2) {
      targetArray = showWord(
        wordArray[memory.phase - Math.floor(memory.phase / 2)],
        targetArray
      );
      memory = progressPhase(
        memory.iterations,
        wordArray[memory.phase - Math.floor(memory.phase / 2)],
        delay
      );
    } else {
      targetArray = deleteWord(
        wordArray[memory.phase - Math.floor(memory.phase / 2)],
        targetArray
      );
      memory = progressPhase(
        memory.iterations,
        wordArray[memory.phase - Math.floor(memory.phase / 2)]
      );
    }

    target.innerText = targetArray.join('');

    if (memory.phase === wordArray.length * 2) {
      target.classList.remove('deactivated');
      clearInterval(interval);
    }
    memory.iterations += iterationSpeed;
  }, 30);
};
</script>

<template>
  <section>
    <h2>Introduction</h2>
    <div class="introContainer">
      <div class="welcomeMessage">
        <p id="welcome">Hi, I am Dominik</p>
        <p id="subtitle">Full stack software developer</p>
      </div>
      <div class="textBox">
        <div class="textLine"></div>
        <p>
          I am a passionate software developer from the Czech Republic searching
          for an opportunity to utilize and deepen my knowledge.
        </p>
      </div>
      <div class="textBox">
        <div class="textLine"></div>
        <p
          @click="(event) => wordShowcase(event)"
          @keyup.enter="(event) => wordShowcase(event)"
        >
          Before I became a developer, I studied
          <span
            tabindex="0"
            class="changingWord"
            data-words="PALEONTOLOGY_FOSSILS _DINOSAURS _TRILOBITES "
            >PALEONTOLOGY</span
          >, and in my free time, I still try to keep up to date with current
          scientific knowledge. This passion of mine often gets combined with my
          love for
          <span
            tabindex="0"
            class="changingWord"
            data-words="VIDEO GAMES_PLANET ZOO_THRIVE _SAURIAN "
            >VIDEO GAMES</span
          >. I am also a big fan of
          <span
            tabindex="0"
            class="changingWord"
            data-words="FANTASY LITERATURE_J.R.R. TOLKIEN _A. SAPKOWSKI _ANTHONY RYAN "
            >FANTASY LITERATURE</span
          >
          and shows. For some time, I have also been caring for a group of
          Crested Gekkos. But lately, I am spending more and more free time
          learning
          <span
            tabindex="0"
            class="changingWord"
            data-words="SOFTWARE DEVELOPMENT_RESPONSIVE DESIGN _ACCESSIBLE WEBSITES_MAINTAINABLE CODE "
            >SOFTWARE DEVELOPMENT</span
          >.
        </p>
      </div>
    </div>
  </section>
</template>
