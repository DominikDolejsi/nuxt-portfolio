<script lang="ts" setup></script>

<template>
  <section>
    <h2 class="sectionHeading">My Skills</h2>
    <div class="skillsContainer">
      <SkillsBox title="Languages">
        <IconsJavaScript />
        <IconsTypeScript />
        <IconsHTML />
        <IconsCSS />
        <IconsJava />
      </SkillsBox>
      <SkillsBox title="Frontend">
        <IconsVue />
        <IconsReact />
        <IconsNuxt />
      </SkillsBox>
      <SkillsBox title="Backend">
        <IconsNode />
        <IconsSpring />
      </SkillsBox>
      <SkillsBox title="Tools">
        <IconsVScode />
        <IconsCommandLine />
        <IconsGit />
        <IconsGitHub />
      </SkillsBox>
    </div>
  </section>
</template>
