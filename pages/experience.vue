<script lang="ts" setup>
const computeTimeElapsed = () => {
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = day * 365;

  const elapsedTime = Date.now() - new Date(2022, 9, 12).getTime();

  const elapsedMonths = Math.floor(elapsedTime / month);
  const elapsedYears = Math.floor(elapsedTime / year);

  if (elapsedYears >= 1 && elapsedTime - (elapsedYears * year) / month >= 1) {
    if (elapsedYears > 1) {
      if (elapsedMonths > 1) {
        return `${elapsedYears} years and ${elapsedMonths} months`;
      }
      return `${elapsedYears} years and ${elapsedMonths} month`;
    }
    if (elapsedMonths > 1) {
      return `${elapsedYears} year and ${elapsedMonths} months`;
    }
    return `${elapsedYears} year and ${elapsedMonths} month`;
  }
  if (elapsedYears >= 1) {
    if (elapsedYears > 1) {
      return `${elapsedYears} years`;
    }
    return `${elapsedYears} year`;
  }
  if (elapsedMonths > 1) {
    return `${elapsedMonths} months`;
  }
  return `${elapsedMonths} month`;
};
</script>

<template>
  <main>
    <h1>Experience</h1>
    <div class="textBox journey">
      <div class="textLine"></div>
      <div>
        <p>It has been</p>
        <p id="journeyLength">
          {{ computeTimeElapsed() }}
        </p>
        <p>since my programming journey began.</p>
      </div>
    </div>
    <JobExperience />
    <EduExperience />
  </main>
</template>
